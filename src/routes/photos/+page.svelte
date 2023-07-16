<script lang="ts">
	import ImageLightbox from '$lib/components/image-lightbox/ImageLightbox.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import { photosList } from './photos-list';

	let imageLightBox = '';
	let showLightBox = false;

	const openLightBox = (image: string) => {
		imageLightBox = image;
		showLightBox = true;
	};

	const closeLightbox = () => {
		showLightBox = false;
	};
</script>

<svelte:head>
	<title>Maciej Kubus | Photos</title>
</svelte:head>

<ImageLightbox path={imageLightBox} show={showLightBox} on:close={closeLightbox} />

<Section>
	<div class="my-16">
		<h2 class="text-6xl">My Photos</h2>
	</div>
</Section>
<Section>
	<div class="mb-8">
		<h2 class="text-4xl">City of Łódź</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each photosList.lodz as photo}
			<button on:click={() => openLightBox('/assets/photos/lodz/' + photo)}>
				<img
					src="/assets/photos/lodz/{photo.replace('.', '-thumbnail.')}"
					alt="Łódź"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>
<Section>
	<div class="mb-8 mt-24">
		<h2 class="text-4xl">My Right eye</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each photosList.eyes as photo}
			<button on:click={() => openLightBox('/assets/photos/eyes/' + photo)}>
				<img
					src="/assets/photos/eyes/{photo.replace('.', '-thumbnail.')}"
					alt="Eye"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>

<Section>
	<div class="mb-8 mt-24">
		<h2 class="text-4xl">Spring</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each photosList.spring as photo}
			<button on:click={() => openLightBox('/assets/photos/spring/' + photo)}>
				<img
					src="/assets/photos/spring/{photo.replace('.', '-thumbnail.')}"
					alt="Spring"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>
