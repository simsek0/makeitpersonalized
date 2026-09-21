import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import StructuredData from '@/components/structured-data';
import {seo,businessSchema} from '@/lib/seo';
import HomeShop from '@/components/home-shop';
export const metadata=seo('Custom T-Shirts, Embroidery & Gifts in Happy Valley','Personalize T-shirts, caps, mugs and engraved gifts at Make it Personalized, Clackamas Town Center. Family-owned since 2006. Single and bulk orders welcome.','/');
import HomeDetails from '@/components/home-details';
import { ArrowUpRight, MapPin, Shirt, Scissors, PencilRuler, Coffee } from 'lucide-react';
export default function Home() {
 return <>
 <SiteHeader/>
 <main>
 <HomeShop/>
 <div className="benefit-strip"><div className="wrap"><span>One item? Absolutely.</span><span>Family-owned since 2006</span><span>Your artwork, brought to life</span><span>Local pickup in Happy Valley <MapPin size={16}/></span></div></div>
 <section className="section wrap" id="create"><div className="section-heading" data-reveal><div><p className="eyebrow">Made for your everyday</p><h2>Personal touches, made here.</h2></div><p>Something thoughtful. Something useful.<br/>Something unmistakably you.</p></div><div className="category-grid">{[{name:'Custom apparel',description:'Your words. Your design. Your favorite new shirt.',icon:Shirt,id:'apparel',label:'WEAR YOUR IDEA'},{name:'Embroidery',description:'A lasting impression, one stitch at a time.',icon:Scissors,id:'embroidery',label:'MAKE YOUR MARK'},{name:'Engraved gifts',description:'Small details. A whole lot of meaning.',icon:PencilRuler,id:'engraving',label:'KEEP IT FOREVER'},{name:'Mugs & drinkware',description:'A personal touch for their daily ritual.',icon:Coffee,id:'drinkware',label:'MAKE EVERY DAY'}].map(({name,description,icon:Icon,id},index)=><a href={'/services/'+({apparel:'custom-printing',embroidery:'embroidery',engraving:'engraving',drinkware:'custom-drinkware'} as Record<string,string>)[id]} className={'category-card '+id} key={id} data-reveal data-delay={index*65}><div className="category-art"><Icon size={48} strokeWidth={1.2}/></div><div className="category-title"><h3>{name}</h3><ArrowUpRight size={22}/></div><p>{description}</p></a>)}</div></section>
 <section className="process section wrap" id="how"><p className="eyebrow">From idea to something real</p><h2>A personal touch.<br/>A simple process.</h2><div className="steps">{[['01','Choose your canvas','Pick apparel, drinkware, embroidery or an engraved gift.'],['02','Add your personal touch','Share your text, upload your artwork and tell us what you have in mind.'],['03','We’ll take it from here','We confirm the details, price and timing before anything is made.']].map(([n,t,d])=><div key={n} data-reveal><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
 <HomeDetails/><section id="visit" className="visit"><div className="wrap visit-inner"><div><p className="eyebrow">Your local creative studio</p><h2>Your neighborhood<br/>“can you make this?” shop.</h2><p>Find us at Clackamas Town Center in Happy Valley.<br/>Bring your idea. We’ll help with the rest.</p></div><div><p>12000 SE 82nd Ave, Suite 2024<br/>Happy Valley, OR 97086</p><a href="tel:5033038073">503-303-8073 <ArrowUpRight size={18}/></a><a href="mailto:sales@makeitpersonalized.com">sales@makeitpersonalized.com <ArrowUpRight size={18}/></a></div></div></section>
 <StructuredData data={businessSchema}/></main><SiteFooter/>
 </>;
}