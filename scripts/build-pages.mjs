import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';

// Build an isolated, non-transactional preview. The hosted application stays intact.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='/makeitpersonalized';
await fs.mkdir(path.join(root,'work'),{recursive:true});
const stage=await fs.mkdtemp(path.join(root,'work','pages-'));
for(const name of ['app','components','hooks','lib','public','package.json','tsconfig.json']){
  await fs.cp(path.join(root,name),path.join(stage,name),{recursive:true,filter:source=>{
    const relative=path.relative(root,source).replaceAll('\\','/');
    return !['app/api','app/requests','lib/server.ts','app/robots.ts','app/sitemap.ts'].some(excluded=>relative===excluded||relative.startsWith(excluded+'/'));
  }});
}
await fs.symlink(path.join(root,'node_modules'),path.join(stage,'node_modules'),process.platform==='win32'?'junction':'dir');
const read=relative=>fs.readFile(path.join(stage,relative),'utf8');
const write=async(relative,text)=>{await fs.mkdir(path.dirname(path.join(stage,relative)),{recursive:true});await fs.writeFile(path.join(stage,relative),text)};

async function adapt(directory){
  for(const entry of await fs.readdir(directory,{withFileTypes:true})){
    const filename=path.join(directory,entry.name);
    if(entry.isDirectory()){await adapt(filename);continue}
    if(!/\.(tsx?|css)$/.test(filename))continue;
    let text=await fs.readFile(filename,'utf8');
    // These are application routes/assets, never API or external URLs.
    text=text.replace(/(['"])\/(shop|customize|services|requests|privacy|about|contact|faq|catalog|favicon|products)(?=[\/.'"?#-])/g,`$1${base}/$2`);
    text=text.replace(/href="\/"/g,`href="${base}/"`).replace(/path:'\/'/g,`path:'${base}/'`);
    text=text.replaceAll('https://makeitpersonalized.alper0.chatgpt.site','https://simsek0.github.io');
    text=text.replace(/index:\s*true,\s*follow:\s*true/g,'index:false,follow:false');
    await fs.writeFile(filename,text);
  }
}
for(const name of ['app','components','hooks','lib'])await adapt(path.join(stage,name));

await write('vite.config.ts',`import {defineConfig} from 'vite';
import vinext from 'vinext';
import tailwindcss from '@tailwindcss/postcss';
export default defineConfig({base:'${base}/',css:{postcss:{plugins:[tailwindcss()]}},plugins:[vinext()]});
`);
await write('next.config.ts',`export default {output:'export',assetPrefix:'${base}'};\n`);
for(const [file,expression] of [
  ['app/shop/[category]/page.tsx','shopCategories.map(c=>({category:c.slug}))'],
  ['app/shop/products/[slug]/page.tsx','shopProducts.map(p=>({slug:p.slug}))'],
  ['app/services/[slug]/page.tsx','services.map(s=>({slug:s.slug}))']
])await write(file,(await read(file))+`\nexport function generateStaticParams(){return ${expression}}\n`);

await write('app/customize/page.tsx',`'use client';
import {useEffect,useState} from 'react';
import Customize from './customize';
import {initialRequestDraft} from '@/lib/order-flow';
export default function Page(){const[query,setQuery]=useState<Record<string,string>|null>(null);useEffect(()=>setQuery(Object.fromEntries(new URLSearchParams(window.location.search))),[]);return query?<Customize initialDraft={initialRequestDraft(query)}/>:<p className="wrap">Opening the design preview…</p>}
`);
let customize=await read('app/customize/customize.tsx');
const submitStart=customize.indexOf(' async function submit(');
const submitEnd=customize.indexOf(' const preferences=',submitStart);
if(submitStart<0||submitEnd<0)throw new Error('Order form changed: review the preview adapter before publishing.');
customize=customize.slice(0,submitStart)+` async function submit(e:SubmitEvent<HTMLFormElement>){e.preventDefault();showError('This is a design preview. No request has been sent and no information has been saved.');}\n`+customize.slice(submitEnd);
customize=customize.replace("'Request my quote'","'Preview request'").replace('Attached to your request','Preview only · stays on this device');
await write('app/customize/customize.tsx',customize);
await write('app/requests/page.tsx',`import SiteHeader from '@/components/site-header';import SiteFooter from '@/components/site-footer';export default function Page(){return <><SiteHeader/><main className="content-page wrap"><p className="eyebrow">Design preview</p><h1>The inbox is not connected.</h1><p>No orders or customer information are stored on this preview.</p><a className="button" href="${base}/shop/">Back to the shop</a></main><SiteFooter/></>}`);
await write('components/structured-data.tsx','export default function StructuredData(_props:{data:unknown}){return null}\n');
let layout=await read('app/layout.tsx');
layout=layout.replace('<div id="main">','<div className="preview-notice" role="note">Design preview · Orders are not submitted</div><div id="main">');
await write('app/layout.tsx',layout);
await write('app/home-shop.css',(await read('app/home-shop.css'))+'\n.preview-notice{padding:8px 16px;text-align:center;background:#f4effb;color:#70548f;font:13px/1.5 sans-serif;border-bottom:1px solid #e9e0f3}\n');
await write('public/robots.txt','User-agent: *\nDisallow: /\n');
await write('public/.nojekyll','');
console.log('Prepared GitHub Pages preview:',stage);
if(process.argv.includes('--prepare-only'))process.exit(0);
const code=await new Promise((resolve,reject)=>{const child=spawn(process.execPath,[path.join(root,'node_modules/vinext/dist/cli.js'),'build'],{cwd:stage,stdio:'inherit'});child.on('error',reject);child.on('exit',resolve)});
if(code!==0)process.exit(code??1);
const output=path.join(root,'work','github-pages');
// Use a fresh output location; never publish stale build files.
try{
  const existing=await fs.lstat(output);
  const archive=path.join(root,'work','github-pages-'+Date.now());
  if(existing.isSymbolicLink()||path.dirname(path.resolve(output))!==path.join(root,'work')||path.dirname(path.resolve(archive))!==path.join(root,'work'))throw new Error('Unexpected preview output path.');
  await fs.rename(output,archive);
}catch(error){if(error.code!=='ENOENT')throw error}
await fs.cp(path.join(stage,'dist/client'),output,{recursive:true});
// assetPrefix writes assets beneath the mount path; Pages adds that path itself.
await fs.cp(path.join(output,base.slice(1),'_next'),path.join(output,'_next'),{recursive:true});
await fs.access(path.join(output,'index.html'));
// GitHub serves nested index files reliably, including a trailing slash.
async function directoryIndexes(directory){for(const entry of await fs.readdir(directory,{withFileTypes:true})){
  const filename=path.join(directory,entry.name);
  if(entry.isDirectory())await directoryIndexes(filename);
  else if(entry.name.endsWith('.html')&&!['index.html','404.html'].includes(entry.name)){
    const target=filename.slice(0,-5);await fs.mkdir(target,{recursive:true});await fs.copyFile(filename,path.join(target,'index.html'));
  }
}}
await directoryIndexes(output);
console.log('GitHub Pages files:',output);
