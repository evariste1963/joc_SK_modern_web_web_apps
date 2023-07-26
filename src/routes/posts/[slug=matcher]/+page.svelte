<script>
    /* matching url slug using Matcher & regex  [[slug=matcher]] which in this instance uses matcher.js file in src dir -- lowercase a-z and 0-9  and - allowed here
--> folder/file names are arbitry*/

	import { page } from '$app/stores';
</script>

<h1>Post {$page.params.slug}</h1>

<pre>
    {JSON.stringify($page, null, 2)}
</pre>
