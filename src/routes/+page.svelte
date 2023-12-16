<script>
	import Person from '$lib/Person.svelte';
</script>

<main class="relative flex min-h-screen w-screen justify-center lg:items-center">
	<div class="left-0 top-0 hidden h-full w-1/3 bg-primary-750 lg:absolute lg:block" />

	<div
		class="z-10 flex w-full max-w-screen-xl flex-col gap-16 lg:flex-row lg:justify-between lg:gap-0 lg:px-8"
	>
		<div class="flex flex-col gap-8">
			<h1
				class="bg-primary-750 p-8 text-8xl font-black text-orange-500 md:text-[12rem] lg:bg-transparent lg:p-0 lg:leading-[12rem]"
			>
				Volli
			</h1>

			<div class="flex max-w-2xl flex-col gap-8 px-8 lg:p-0">
				<h2 class="text-4xl font-bold text-peach-500">Managing and discovering community sports</h2>
				<p class="text-xl text-neutral-100">
					Hang tight! Our team is creating the best new management system for your sporting
					communities.
				</p>
				<p class="text-xl text-neutral-100">Sign up to know when you can start using Volli.</p>

				<div class="relative w-full rounded-lg bg-primary-600">
					<input
						type="email"
						placeholder="Email address"
						class="w-full rounded-lg bg-transparent px-4 py-6 text-xl text-neutral-100 outline-none placeholder:text-neutral-100 focus:outline focus:outline-orange-500"
					/>
					<div class="absolute right-0 top-0 flex h-full items-center pr-3">
						<button class=" rounded bg-orange-500 px-4 py-3 font-semibold text-primary-900">
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-start justify-center px-8 lg:p-0">
			<div class="relative max-w-md rounded-lg bg-primary-600 p-6">
				<div
					class="absolute bottom-0 right-16 h-6 w-8 translate-y-full rounded-bl-[24px] rounded-br-[4px] bg-primary-600"
				/>

				<p class="text-center text-xl text-neutral-100">
					“Great for creating draws and keeping track of player details and payment info.”
				</p>
			</div>
		</div>

		<div
			class="bottom-0 right-0 flex h-[400px] flex-grow items-end justify-center gap-8 px-8 pb-2 md:px-16 lg:absolute lg:justify-end"
		>
			<div class="hidden h-2/5 w-16 xl:block">
				<Person />
			</div>

			<div class="h-full w-24">
				<Person />
			</div>

			<div class="h-3/5 w-16">
				<Person />
			</div>

			<div class="hidden h-5/6 w-24 xl:block">
				<Person />
			</div>

			<div class="h-3/4 w-20">
				<Person />
			</div>
		</div>
	</div>
</main>
