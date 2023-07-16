<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let path: string;
	export let show: boolean = false;

	const dispatch = createEventDispatcher();

	const closeLightbox = () => {
		dispatch('close');
	};
</script>

{#if path && show}
	<button
		class="flex justify-center items-center p-16 fixed z-50 inset-0 bg-surface-500 bg-opacity-95"
		on:click={closeLightbox}
	>
		<img src={path} alt="lightbox" class="max-w-full max-h-full" />
	</button>
{/if}
