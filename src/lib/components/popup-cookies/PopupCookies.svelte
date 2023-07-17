<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let cookiesAccepted = true;
	let loaded = false;

	onMount(() => {
		loaded = true;
		const accepted = window.localStorage.getItem('cookiesAccepted');
		if (!accepted) {
			cookiesAccepted = false;
		}
	});

	function acceptCookies() {
		window.localStorage.setItem('cookiesAccepted', 'true');
		cookiesAccepted = true;
	}
</script>

{#if loaded && !cookiesAccepted}
	<div
		class="fixed z-50 right-4 bottom-4 left-4 xl:left-auto xl:w-96 bg-primary-500 text-surface-500 p-8"
		in:scale={{ delay: 3000, easing: backOut }}
		out:scale={{ easing: backOut }}
	>
		<h4 class="text-lg font-bold mb-2">Cookies</h4>
		<p>
			This site is using cookies to enhance your browsing experience. By continuing to use this
			website, you consent to the use of cookies.
		</p>
		<div class="w-full flex justify-end">
			<button
				class="bg-surface-500 text-primary-500 hover:bg-tertiary-500 px-8 py-2"
				on:click={acceptCookies}
			>
				Accept
			</button>
		</div>
	</div>
{/if}
