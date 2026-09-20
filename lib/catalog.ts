export const categories = [
 { id:'apparel', name:'Custom apparel', tagline:'Wear your idea.', products:['Essential T-shirt','Long-sleeve T-shirt','Sweatshirt','Apron','My own garment'], methods:'Print', description:'Text, photos or your own artwork on everyday favorites.' },
 { id:'embroidery', name:'Embroidery', tagline:'Make your mark.', products:['Cap','Polo shirt','Sweatshirt','My own item'], methods:'Embroidery', description:'Business logos, names and designs, stitched with care.' },
 { id:'engraving', name:'Engraved gifts', tagline:'Make it meaningful.', products:['Wood gift','Metal gift','Glassware','Jewelry or dog tag','My own item'], methods:'Engraving', description:'Names, dates, logos and silhouettes on a gift worth keeping.' },
 { id:'drinkware', name:'Mugs & drinkware', tagline:'Personalize the everyday.', products:['11 oz ceramic mug','Tumbler','Water bottle','My own drinkware'], methods:'Print or engraving', description:'A favorite photo, a good line or your business logo.' },
] as const;
export const sizes=['S','M','L','XL','2XL','3XL','4XL','Mixed sizes','Not applicable'];
export const colors=['White','Black','Navy','Royal blue','Red','Natural / original','Other / not sure'];
export type Draft = { category:string; product:string; quantity:number; color:string; size:string; placement:string; text:string; notes:string; neededBy:string; purpose:string };
export const defaultDraft:Draft={category:'apparel',product:'Essential T-shirt',quantity:1,color:'White',size:'M',placement:'Front',text:'',notes:'',neededBy:'',purpose:'Personal / gift'};
