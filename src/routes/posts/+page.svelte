<script>
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Post page'));
	onDestroy(() => console.log('destroyed Post page'));
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
	</ul>
</nav>

<h1>Posts</h1>

<style>
	H1 {
		color: aqua;
	}
</style>
