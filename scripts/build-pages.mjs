import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Publish the standalone, non-transactional catalog/design preview at the
// repository's GitHub Pages project URL. Keep the hosted app source untouched.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='/makeitpersonalized';
const source=path.join(root,'pages-storefront');
const output=path.join(root,'work','github-pages');
await fs.access(path.join(source,'index.html'));
await fs.access(path.join(source,'data','catalog.js'));
await fs.mkdir(path.join(root,'work'),{recursive:true});

// Do not discard a prior preview build; move it aside before staging a clean one.
try{
  const existing=await fs.lstat(output);
  const archive=path.join(root,'work','github-pages-'+Date.now());
  if(existing.isSymbolicLink()||path.dirname(path.resolve(output))!==path.join(root,'work')||path.dirname(path.resolve(archive))!==path.join(root,'work'))throw new Error('Unexpected preview output path.');
  await fs.rename(output,archive);
}catch(error){if(error.code!=='ENOENT')throw error;}
await fs.cp(source,output,{recursive:true});

const indexPath=path.join(output,'index.html');
let html=await fs.readFile(indexPath,'utf8');
html=html.replace('href="/favicon.svg"',`href="${base}/favicon.svg"`)
  .replace('href="/style.css"',`href="${base}/style.css"`)
  .replace('src="/app.js"',`src="${base}/app.js"`)
  .replace('<head>','<head><base href="'+base+'/">');
await fs.writeFile(indexPath,html);

// Catalog photo and mockup paths are absolute on the local server. Scope them
// to the project mount without altering external original product links.
const catalogPath=path.join(output,'data','catalog.js');
let catalog=await fs.readFile(catalogPath,'utf8');
catalog=catalog.replaceAll('"/assets/','"'+base+'/assets/');
await fs.writeFile(catalogPath,catalog);
await fs.writeFile(path.join(output,'.nojekyll'),'');
console.log(`Prepared ${base} GitHub Pages storefront at ${output}`);
