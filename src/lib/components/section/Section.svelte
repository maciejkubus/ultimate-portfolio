<script lang="ts">
	export let fullwidth = false;
	export let flexDirection = 'flex-col';
</script>

<div class="w-full flex justify-center items-center px-8 xl:px-4 max-w-full" {...$$props}>
	<div class="flex {flexDirection} w-full {fullwidth ? '' : 'max-w-6xl'}">
		<slot />
	</div>
</div>
