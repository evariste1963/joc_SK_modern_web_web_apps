/* 
1. npm install @prisma/client
2. prisma init --datasource-provider sqlite
3. npx prisma migrate dev --name init
4. npx prisma studio
5. npx prisma migrate reset ///// is a development command and should never be used in a production environment. --> then back to step 3 to migrate again
*/

import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();
	return posts;
}

function slugify(text) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}

async function main() {
	const posts = await getPosts();

	for (const post of posts) {
		await db.post.create({
			data: {
				title: post.title,
				content: post.body,
				slug: slugify(post.title)
			}
		});
	}
}
main();
