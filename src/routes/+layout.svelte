<script>
	import '../app.css';
</script>

export const prerender = true

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;600;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
