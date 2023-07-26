<!-- this is the layout for all Post pages -->

<div class="post">
	<aside>
		<h4>Posts</h4>

		<nav>
			<ul>
				<li>
					<a href="/posts/one">One</a>
				</li>
				<li>
					<a href="/posts/two">Two</a>
				</li>
			</ul>
		</nav>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	.post {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
</style>
