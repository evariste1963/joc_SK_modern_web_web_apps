//api/newsletter GET
export const GET = async () => {
	const options = {
		status: 418,
		headers: {
			X: 'gon give it to ya'
		}
	};

	return new Response('hello', options);
};

//api/newsletter POST
export const POST = async (event) => {
	const data = await event.request.formData();

	const email = data.get('email');

	console.log(email);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
