<script>
	import { page } from '$app/stores';
</script>


<h1>About {#if $page.params.lang} ({$page.params.lang}) {/if}</h1>


<pre>
    {JSON.stringify($page, null, 2)}
</pre>
