import db from '../../../lib/database.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async (event) => {
	const posts = await db.post.findMany({
		take: Math.round(Math.random() * 30)
	});

	event.setHeaders({
		'Cache-Control': 'max-age=60'
	});

	return json(posts);
};
