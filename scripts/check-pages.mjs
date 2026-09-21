import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('work/github-pages'),base='/makeitpersonalized';
let pages=0;const targets=new Set();
async function exists(file){try{return(await fs.stat(file)).isFile()}catch{return false}}
async function walk(directory){for(const entry of await fs.readdir(directory,{withFileTypes:true})){
 const filename=path.join(directory,entry.name);
 if(entry.isDirectory()){await walk(filename);continue}
 if(!/\.(html|css|js)$/.test(filename))continue;
 const text=await fs.readFile(filename,'utf8');
 assert(!text.includes('makeitpersonalized.alper0.chatgpt.site'),`Original host found in ${filename}`);
 assert(!text.includes('/api/requests'),`Live order endpoint found in ${filename}`);
 if(entry.name.endsWith('.html')){
  pages++;assert(text.includes('Design preview'),`Preview notice missing in ${filename}`);
  for(const match of text.matchAll(/(?:href|src)="(\/[^" ]*)"/g)){
   assert(match[1].startsWith(base+'/'),`Unprefixed link ${match[1]}`);
   targets.add(decodeURIComponent(match[1].slice(base.length).split(/[?#]/)[0]));
  }
 }
 if(entry.name.endsWith('.css'))for(const match of text.matchAll(/url\(["']?(\/[^)"']+)/g)){
  assert(match[1].startsWith(base+'/'),`Unprefixed CSS asset ${match[1]}`);
  targets.add(match[1].slice(base.length));
 }
}}
await walk(root);
assert(pages>=52,'Missing exported pages');
for(const target of targets){const file=path.join(root,target);assert(await exists(file)||await exists(file+'.html')||await exists(path.join(file,'index.html')),`Missing route or asset: ${target}`)}
assert(await exists(path.join(root,'.nojekyll')),'Missing .nojekyll');
assert(!(await exists(path.join(root,'README.md'))),'README must not be published');
console.log(`Verified ${pages} HTML pages and ${targets.size} internal links/assets; no live order endpoints.`);
