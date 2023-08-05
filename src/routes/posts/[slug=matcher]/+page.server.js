import db from '$lib/database';
import { error } from '@sveltejs/kit';

//load function will run each time the params change
export const load = async ({ params, parent }) => {
	const parentData = await parent(); // ONLY WORKS IF THE CALL IS MADE IN A LAYOUT
	//in this instance it will get the posts from the parent route/posts/+layout./server.js
	// console.log(parentData);

	const post = await db.post.findUnique({
		where: { slug: params.slug }
	});
	// parent load function should run after the page call to prevent blocking
	//HOWEVER if page call ect depends on the parent data, then the parent data call should come 1st
	// ie const data = await getdata(parentData)

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post, parentData };
};
