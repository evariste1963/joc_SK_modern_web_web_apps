const limit = Math.round(Math.random() * 29) + 1; //min amount of post will always be 1

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts?limit=${limit}&order=desc`); //see below for other params
	const posts = await response.json();
	return { posts };
};

//in order to change number of posts and limit
//you can define the searchParams once they are set up as api/+server.js variables -> eg
//const response = await fetch('/api/posts?limit=10&order=desc');

//limit and order (orderBy) are standard db query params
