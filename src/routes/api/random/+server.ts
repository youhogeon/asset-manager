import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
  } // 함수정의


export const GET: RequestHandler = async ({ url }) => {
	// const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=2000&count=5")

	const value = Math.random() * 100

	await sleep(value)

	return new Response(String(value));
};
