import {categories,defaultDraft,draftForShopProduct,type Draft} from './catalog.ts';
import {shopProducts} from './shop.ts';
export const designHelpText="I’d like some help with the design. Please get in touch to talk through ideas.";
export function draftForCategory(id:string,previous:Draft=defaultDraft):Draft {
 const c=categories.find(c=>c.id===id)||categories[0];
 return {...previous,category:c.id,product:c.products[0],color:'Other / not sure',size:['apparel','embroidery'].includes(c.id)?'Please confirm size':'Not applicable',placement:'Tell us in notes'};
}
export function initialRequestDraft(query:Record<string,string|string[]|undefined>):Draft {
 const value=(key:string)=>typeof query[key]==='string'?query[key] as string:'';
 const item=draftForShopProduct(value('item'));
 let draft=item?{...item,color:'Other / not sure',size:['apparel','embroidery'].includes(item.category)?'Please confirm size':'Not applicable',placement:'Tell us in notes'}:draftForCategory(value('category'));
 if(value('purpose')==='business')draft={...draft,purpose:'Business / team'};
 return draft;
}
export function quickItems(draft:Draft):string[] {
 const category=categories.find(c=>c.id===draft.category)||categories[0];
 return [...new Set([draft.product,...category.products.filter(name=>!shopProducts.some(p=>p.name===name))])];
}
export function ideaError(draft:Draft,hasArtwork:boolean):string {
 if(!Number.isInteger(draft.quantity)||draft.quantity<1||draft.quantity>5000)return 'How many would you like? Enter a number from 1 to 5,000.';
 if(!draft.notes.trim()&&!draft.text.trim()&&!hasArtwork)return 'Tell us a little about your idea, add artwork, or choose “I’d like design help.”';
 return '';
}
export function artworkError(file:Pick<File,'type'|'size'>):string {
 if(!['image/png','image/jpeg','application/pdf'].includes(file.type)||file.size>5*1024*1024||file.size===0)return 'That file wasn’t added. Choose a PNG, JPG or PDF up to 5 MB.';
 return '';
}
