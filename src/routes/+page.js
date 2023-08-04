const limit = Math.round(Math.random() * 30);

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts?limit=${limit}`); //see below for other params
	const posts = await response.json();
	return { posts };
};

//in order to change number of posts and limit
//you can define the searchParams once they are set up as api/+server.js variables -> eg
//const response = await fetch('/api/posts?limit=10&order=desc');

//limit and order (orderBy) are standard db query params
