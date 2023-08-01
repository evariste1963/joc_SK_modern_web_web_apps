import db from '$lib/database';

export const load = async () => {
	const posts = await db.post.findMany({
		select: {
			title: true,
			slug: true
		},
		take: 6
	});
	return { posts };
};
