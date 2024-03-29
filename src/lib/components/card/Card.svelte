<script lang="ts">
	export let card = 'bg-primary-500 text-surface-500';
	export let header = '';
	export let content = '';
	export let footer = '';
</script>

<div class="p-4 shadow-xl rounded-lg {card}">
	{#if $$slots.header}
		<header class="p-4 font-semibold text-xl {header}">
			<slot name="header" />
		</header>
	{/if}
	<section class="px-4 py-2 {content}">
		<slot />
	</section>
	{#if $$slots.footer}
		<footer class="p-4 {footer}">
			<slot name="footer" />
		</footer>
	{/if}
</div>
