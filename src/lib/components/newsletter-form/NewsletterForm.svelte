<script lang="ts">
	import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';
	let email = '';
	let sent = false;

	const send = () => {
		fetch('/api/newsletter/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		});
		sent = true;
	};
</script>

<div class="w-full h-full flex justify-end items-center text-center mt-8 xl:mt-0">
	<input
		type="email"
		bind:value={email}
		placeholder="Enter your E-mail"
		class="w-full xl:max-w-xs text-lg text-primary-500 bg-transparent border-0 border-b-2 border-primary-500 focus:outline-0 focus:border-primary-500 placeholder:text-primary-400"
		disabled={sent}
	/>
	<button
		class="ml-4 text-primary-500 cursor-pointer hover:scale-110"
		on:click={send}
		disabled={sent}
	>
		<Checkmark size={32} />
	</button>
</div>
