<script>
	import { fly, scale } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Blob from '../blob/Blob.svelte';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

<div class="w-100 my-16 flex flex-col xl:flex-row gap-12 justify-stretch xl:min-h-[600px]">
	<div class="flex-1 flex justify-center flex-col">
		{#if loaded}
			<div
				in:fly={{
					delay: 250,
					y: 40,
					opacity: 0,
					easing: backOut
				}}
			>
				<h1 class="text-6xl font-bold font-heading-token">
					<slot name="title" />
				</h1>
				<p class="text-2xl text-primary-700 font-semibold pt-2">
					<slot name="subtitle" />
				</p>
				<div class="mt-8 text-lg leading-6">
					<slot name="content" />
				</div>
			</div>
		{/if}
	</div>
	<div class="flex-1 relative hidden xl:block">
		{#if loaded}
			<div in:scale={{ delay: 800, easing: backOut, duration: 700 }}>
				<div class="absolute z-10 inset-0 opacity-50">
					<Blob />
				</div>
				<div class="relative z-20">
					<slot name="image" />
				</div>
			</div>
		{/if}
	</div>
</div>
