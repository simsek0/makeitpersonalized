import Customize from './customize';import {initialRequestDraft} from '@/lib/order-flow';
export const metadata={robots:{index:false,follow:false},title:'Request a Personal Quote | Make it Personalized'};
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Customize initialDraft={initialRequestDraft(await searchParams)}/>;}
