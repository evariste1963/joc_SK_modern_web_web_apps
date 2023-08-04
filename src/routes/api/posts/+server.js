import db from '$lib/database.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
/*
//sveltekit (or any framework 'state anagement)
export const GET = async (event) => {
	const posts = await db.post.findMany({
		take: Math.round(Math.random() * 30)
	});

	event.setHeaders({
		'Cache-Control': 'max-age=60'
	});

	return json(posts);
};
*/

//Alternative (old way) JS URL 'state management' used without js framework
export const GET = async ({ url }) => {
	const limit = +(url.searchParams.get('limit') ?? 30);
	const order = url.searchParams.get('order') ?? 'asc';

	const posts = await db.post.findMany({
		orderBy: { id: order },
		take: limit
	});

	return json(posts);
};
