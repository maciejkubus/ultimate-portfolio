<script lang="ts">
	import ImageLightbox from '$lib/components/image-lightbox/ImageLightbox.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import { drawingsList } from './drawing-list';

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
	<title>Maciej Kubus | Drawings</title>
</svelte:head>

<ImageLightbox path={imageLightBox} show={showLightBox} on:close={closeLightbox} />

<Section>
	<div class="my-16">
		<h2 class="text-6xl">My Drawings</h2>
	</div>
</Section>
<Section>
	<div class="mb-8">
		<h2 class="text-4xl">My best artworks!</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each drawingsList.best as drawing}
			<button on:click={() => openLightBox('/assets/drawings/best/' + drawing)}>
				<img
					src="/assets/drawings/best/{drawing.replace('.', '-thumbnail.')}"
					alt="Łódź"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>
<Section>
	<div class="mb-8 mt-24">
		<h2 class="text-4xl">Psychedelic art</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each drawingsList.psycho as drawing}
			<button on:click={() => openLightBox('/assets/drawings/psycho/' + drawing)}>
				<img
					src="/assets/drawings/psycho/{drawing.replace('.', '-thumbnail.')}"
					alt="Łódź"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>
<Section>
	<div class="mb-8 mt-24">
		<h2 class="text-4xl">Psychiatric hospital</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each drawingsList.hospital as drawing}
			<button on:click={() => openLightBox('/assets/drawings/hospital/' + drawing)}>
				<img
					src="/assets/drawings/hospital/{drawing.replace('.', '-thumbnail.')}"
					alt="Łódź"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>
<Section>
	<div class="mb-8 mt-24">
		<h2 class="text-4xl">Trees and flowers</h2>
	</div>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each drawingsList.nature as drawing}
			<button on:click={() => openLightBox('/assets/drawings/nature/' + drawing)}>
				<img
					src="/assets/drawings/nature/{drawing.replace('.', '-thumbnail.')}"
					alt="Łódź"
					class="aspect-square object-cover"
				/>
			</button>
		{/each}
	</div>
</Section>
