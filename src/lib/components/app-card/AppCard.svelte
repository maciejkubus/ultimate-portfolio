<script lang="ts">
</script>

<div class="flex flex-col xl:flex-row xl:gap-8">
	<div class="xl:w-1/3">
		<slot name="image" />
	</div>
	<div class="bg-tertiary-500 p-8 xl:w-2/3">
		<div class="flex xl:gap-8 justify-between">
			<h2 class="text-lg md:text-2xl font-bold mb-0 pr-8"><slot name="name" /></h2>
			<div>
				<slot name="links" />
			</div>
		</div>
		<p class="mt-2">
			<slot name="description" />
		</p>
		<div class="flex flex-col xl:flex-row gap-8 mt-8">
			<div class="flex-1"><slot name="left" /></div>
			<div class="flex-1">
				<slot name="right" />
			</div>
		</div>
	</div>
</div>
