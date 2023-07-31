<script>
	/* matching url slug using Matcher & regex  [[slug=matcher]] which in this instance uses matcher.js file in src dir -- lowercase a-z and 0-9  and - allowed here
--> folder/file names are arbitry*/

	// 	import { page } from '$app/stores';
	// 	const titleFromSlug = $page.params.slug.split('-').join(' ');
	//
	export let data;

	function formatDate(date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date);
	}
</script>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{formatDate(data.post.createAt)}</h2>
</hgroup>

<div class="content">
	{@html data.post.content}
</div>
