<script>
	async function subscribe(event) {
		const form = event.target;
		const data = new FormData(form);

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
	}
</script>

<h1>Home page</h1>

<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>subscribe</button>
</form>
