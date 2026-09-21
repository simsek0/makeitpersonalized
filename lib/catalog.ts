import {shopProducts} from './shop.ts';
const baseCategories = [
 { id:'apparel', name:'Custom apparel', tagline:'Wear your idea.', products:['Essential T-shirt','Long-sleeve T-shirt','Sweatshirt','Apron','My own garment'], methods:'Print', description:'Text, photos or your own artwork on everyday favorites.' },
 { id:'embroidery', name:'Embroidery', tagline:'Make your mark.', products:['Cap','Polo shirt','Sweatshirt','My own item'], methods:'Embroidery', description:'Business logos, names and designs, stitched with care.' },
 { id:'engraving', name:'Engraved gifts', tagline:'Make it meaningful.', products:['Wood gift','Metal gift','Glassware','Jewelry or dog tag','My own item'], methods:'Engraving', description:'Names, dates, logos and silhouettes on a gift worth keeping.' },
 { id:'drinkware', name:'Mugs & drinkware', tagline:'Personalize the everyday.', products:['11 oz ceramic mug','Tumbler','Water bottle','My own drinkware'], methods:'Print or engraving', description:'A favorite photo, a good line or your business logo.' },
] as const;
export const categories=baseCategories.map(c=>({...c,products:[...c.products,...shopProducts.filter(p=>p.service===c.id).map(p=>p.name)]}));
export const sizes=['S','M','L','XL','2XL','3XL','4XL','Mixed sizes','Please confirm size','Not applicable'];
export const colors=['White','Black','Navy','Royal blue','Red','Natural / original','Other / not sure'];
export type Draft = { category:string; product:string; quantity:number; color:string; size:string; placement:string; text:string; notes:string; neededBy:string; purpose:string };
export const defaultDraft:Draft={category:'apparel',product:'Essential T-shirt',quantity:1,color:'White',size:'M',placement:'Front',text:'',notes:'',neededBy:'',purpose:'Personal / gift'};

export function draftForShopProduct(slug:string):Draft|null{const p=shopProducts.find(p=>p.slug===slug);if(!p)return null;return {...defaultDraft,category:p.service,product:p.name,color:p.service==='apparel'?'White':'Natural / original',size:p.collections.includes('youth-baby')?'Please confirm size':p.service==='apparel'?'M':'Not applicable',placement:p.service==='apparel'?'Front':'Tell us in notes'}}
