<script>
	import '../app.css';
	import { page } from '$app/stores';

	let lang;
</script>

<!-- dynamically change page header based on post *** also degfault value if none exists -->
<svelte:head>
	<title>{$page.data.post?.title ?? 'this.me'}</title>
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/media/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/30/20">Rest Parameters</a>
		</li>
		<li>
			<a href="/{(lang = 'french')}/about">About</a>
		</li>
		<li>
			<a href="/image/200x200">Image</a>
		</li>
	</ul>
</nav>

<slot />
