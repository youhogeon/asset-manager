import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, platform }) => {
	if (!platform) {
		throw new Error("T.T")
	}

	let result = await platform.env.DB.prepare(
		"SELECT * FROM users LIMIT 5"
	).run();
	return new Response(JSON.stringify(result));


};
