export type ValidOrder = {category:string;product:string;quantity:number;color:string;size:string;placement:string;text:string;notes:string;neededBy:string;purpose:string};
const products:Record<string,readonly string[]>={apparel:['Essential T-shirt','Long-sleeve T-shirt','Sweatshirt','Apron','My own garment'],embroidery:['Cap','Polo shirt','Sweatshirt','My own item'],engraving:['Wood gift','Metal gift','Glassware','Jewelry or dog tag','My own item'],drinkware:['11 oz ceramic mug','Tumbler','Water bottle','My own drinkware']};
export function validateOrder(value:unknown):ValidOrder{
 if(!value||typeof value!=='object')throw new Error('Please complete your project details.');
 const d=value as Record<string,unknown>;const str=(key:string,max:number)=>{const v=d[key];if(typeof v!=='string'||v.length>max)throw new Error('Please check your '+key+'.');return v.trim()};
 const category=str('category',30),product=str('product',100);
 if(!Object.hasOwn(products,category)||!products[category].includes(product))throw new Error('Choose a valid service and product.');
 const quantity=d.quantity;if(typeof quantity!=='number'||!Number.isInteger(quantity)||quantity<1||quantity>5000)throw new Error('Quantity must be from 1 to 5,000.');
 const color=str('color',60),size=str('size',40),placement=str('placement',80),purpose=str('purpose',80);
 if(!['White','Black','Navy','Royal blue','Red','Natural / original','Other / not sure'].includes(color)||!['S','M','L','XL','2XL','3XL','4XL','Mixed sizes','Not applicable'].includes(size)||!['Front','Back','Front & back','Tell us in notes'].includes(placement)||!['Personal / gift','Business / team','Event / celebration'].includes(purpose))throw new Error('Please check your product options.');
 const neededBy=str('neededBy',10);if(neededBy&&(!/^\d{4}-\d{2}-\d{2}$/.test(neededBy)||!Number.isFinite(Date.parse(neededBy))||new Date(neededBy).toISOString().slice(0,10)!==neededBy))throw new Error('Choose a valid pickup date.');
 return {category,product,quantity,color,size,placement,purpose,text:str('text',500),notes:str('notes',2000),neededBy};
}
export function validateContact(name:unknown,email:unknown,phone:unknown){if(typeof name!=='string'||name.trim().length<2||name.length>100)throw new Error('Please enter your name.');if(typeof email!=='string'||email.length>254||!/^\S+@\S+\.\S+$/.test(email))throw new Error('Please enter a valid email address.');if(typeof phone!=='string'||phone.length>30||!/^[+()\d\s.\-]*$/.test(phone))throw new Error('Please check your phone number.');return {name:name.trim(),email:email.trim().toLowerCase(),phone:phone.trim()}}
