import {env} from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('Request storage is unavailable. Please try again later.');return env.DB}
export function files(){if(!env.FILES)throw new Error('Artwork storage is unavailable.');return env.FILES}
export function identity(headers:Headers){return {id:headers.get('oai-authenticated-user-id'),admin:Boolean(env.ADMIN_EMAIL&&headers.get('oai-authenticated-user-email')?.toLowerCase()===env.ADMIN_EMAIL.toLowerCase())}}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return !origin||origin===new URL(request.url).origin}
export function json(value:unknown,status=200){return Response.json(value,{status,headers:{'Cache-Control':'no-store'}})}
