<script lang="ts">
	export let fullwidth = false;
</script>

<div class="w-full flex justify-center items-center px-12 xl:px-4 max-w-full" {...$$props}>
	<div class="flex flex-col w-full {fullwidth ? '' : 'max-w-6xl'}">
		<slot />
	</div>
</div>
