import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5")

	return response;
};
