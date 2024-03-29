<script lang="ts">
	import { ArrowRight } from 'carbon-icons-svelte';

	export let url = '';
</script>

<div class="variant-filled-secondary p-4 shadow-xl rounded-lg">
	<div class="rounded-lg overflow-hidden">
		<slot name="image" />
	</div>
	<div class="py-4 font-bold text-xl">
		<slot name="title" />
	</div>
	<div class="text-lg">
		<slot />
	</div>
	{#if url}
		<div class="py-4 pr-4 flex justify-end">
			<a href={url} target="_blank" class="text-primary-500">
				<ArrowRight size={32} />
			</a>
		</div>
	{/if}
</div>
