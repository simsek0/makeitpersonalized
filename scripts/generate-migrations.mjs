import { generateSQLiteDrizzleJson, generateSQLiteMigration } from 'drizzle-kit/api';
import * as schema from '../db/schema.ts';
import fs from 'node:fs/promises';
const dir=new URL('../drizzle/',import.meta.url);await fs.mkdir(new URL('meta/',dir),{recursive:true});
let journal;try{journal=JSON.parse(await fs.readFile(new URL('meta/_journal.json',dir),'utf8'))}catch(e){if(e.code!=='ENOENT')throw e;journal={version:'7',dialect:'sqlite',entries:[]}}
const last=journal.entries.at(-1);let before=last?JSON.parse(await fs.readFile(new URL('meta/'+String(last.idx).padStart(4,'0')+'_snapshot.json',dir),'utf8')):await generateSQLiteDrizzleJson({});
if(!last)before.id='00000000-0000-0000-0000-000000000000';
const after=await generateSQLiteDrizzleJson(schema,before.id);const sql=await generateSQLiteMigration(before,after);if(!sql.length){console.log('No schema changes.');process.exit(0)}
const idx=journal.entries.length,tag=String(idx).padStart(4,'0')+'_requests';
await fs.writeFile(new URL(tag+'.sql',dir),sql.join('\n--> statement-breakpoint\n')+'\n');
await fs.writeFile(new URL('meta/'+String(idx).padStart(4,'0')+'_snapshot.json',dir),JSON.stringify(after,null,2)+'\n');
journal.entries.push({idx,version:after.version,when:Date.now(),tag,breakpoints:true});await fs.writeFile(new URL('meta/_journal.json',dir),JSON.stringify(journal,null,2)+'\n');console.log('Generated '+tag+'.sql');
