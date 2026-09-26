import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve('work/github-pages');
const base='/makeitpersonalized';
for(const name of ['index.html','style.css','app.js','favicon.svg','.nojekyll','data/catalog.js'])assert((await fs.stat(path.join(root,name))).isFile(),`Missing ${name}`);
const html=await fs.readFile(path.join(root,'index.html'),'utf8');
assert(html.includes(`<base href="${base}/">`),'Missing GitHub Pages base path');
assert(html.includes(`href="${base}/style.css"`),'Missing mounted stylesheet');
assert(html.includes(`src="${base}/app.js"`),'Missing mounted app module');
const data=await import(pathToFileURL(path.join(root,'data/catalog.js')));
assert.equal(data.products.length,27,'Expected the complete store catalog');
for(const product of data.products){
  assert(product.url.startsWith('https://makeitpersonalized.com/'),`Unexpected listing URL: ${product.id}`);
  for(const field of ['image','preview']){
    const url=new URL(product[field],'https://pages.invalid');
    assert(url.pathname.startsWith(`${base}/assets/`),`Unprefixed ${field} URL for ${product.id}`);
    const file=path.join(root,url.pathname.slice(base.length+1));
    assert((await fs.stat(file)).isFile(),`Missing ${field} file for ${product.id}`);
  }
}
const sourceFiles=[];
async function walk(directory){for(const entry of await fs.readdir(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);if(entry.isDirectory())await walk(file);else sourceFiles.push(file);}}
await walk(root);
assert(!sourceFiles.some(file=>file.endsWith('catalog-source.json')),'Internal import manifest should not be published');
console.log(`Verified GitHub Pages path, 27 catalog items, original photos and mockups (${sourceFiles.length} files).`);

function pathToFileURL(file){return new URL(`file:///${file.replaceAll('\\','/')}`);}
