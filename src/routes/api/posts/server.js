import db from '../../../lib/database.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	const posts = await db.post.findMany();

	return json(posts);
};
