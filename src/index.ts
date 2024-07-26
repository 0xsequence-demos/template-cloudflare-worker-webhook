export interface Env {
	WEBHOOK_UUID: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const slug = url.pathname.split('/').filter(part => part.length > 0)[0];
		
		if(env.WEBHOOK_UUID == slug){
			const rawData = await request.arrayBuffer();
			const rawText = new TextDecoder("utf-8").decode(rawData);
			console.log('test')
			// console.log(`transferring tokenID: ${JSON.parse(rawText)[0].log.transferEvent.tokenIds[0]}`)
	
			return new Response(`true`, { status: 200 });
		} else {
			return new Response(`false`, { status: 200 });
		}
	}
}