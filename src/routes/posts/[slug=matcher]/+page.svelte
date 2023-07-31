<script>
	/* matching url slug using Matcher & regex  [[slug=matcher]] which in this instance uses matcher.js file in src dir -- lowercase a-z and 0-9  and - allowed here
--> folder/file names are arbitry*/

	// 	import { page } from '$app/stores';
	// 	const titleFromSlug = $page.params.slug.split('-').join(' ');
	//
	export let data;

	const { title, createAt, content } = data.post;

	function formatDate(date) {
		return new Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(date);
	}
</script>

<hgroup>
	<h1>{title}</h1>
	<h2>{formatDate(createAt)}</h2>
</hgroup>

<div class="content">
	{@html content}
</div>
