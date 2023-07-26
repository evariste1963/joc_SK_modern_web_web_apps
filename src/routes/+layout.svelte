<script>
    import '../app.css'

    let lang;
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
        <li>
			<a href="/media/r/30/20">Rest Parameters</a>
		</li>
        <li>
			<a href="/{lang='french'}/about">About</a>
		</li>
        <li>
			<a href="/image/200x200">Image</a>
		</li>
	</ul>
</nav>

<slot />
