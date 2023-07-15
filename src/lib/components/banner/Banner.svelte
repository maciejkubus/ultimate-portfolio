<script>
	import Blob from '../blob/Blob.svelte';
</script>

<div class="w-100 flex flex-col xl:flex-row gap-12 justify-stretch xl:min-h-[700px]">
	<div class="flex-1 flex justify-center flex-col">
		<h1 class="text-6xl font-bold font-heading-token">
			<slot name="title" />
		</h1>
		<p class="text-2xl text-primary-700 font-semibold">
			<slot name="subtitle" />
		</p>
		<div class="mt-8 text-lg leading-6">
			<slot name="content" />
		</div>
	</div>
	<div class="flex-1 relative hidden xl:block">
		<div class="absolute z-10 inset-0 opacity-50">
			<Blob />
		</div>
		<div class="relative z-20">
			<slot name="image" />
		</div>
	</div>
</div>
