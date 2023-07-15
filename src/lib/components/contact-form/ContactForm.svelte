<script lang="ts">
	let email = '';
	let message = '';
	let sent = false;
	let checked = false;

	const submit = () => {
		fetch('/api/contact/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, message })
		});
		sent = true;
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="flex flex-col gap-8 w-full">
		<input
			type="email"
			bind:value={email}
			placeholder="Wpisz swój email"
			class="w-full text-lg text-primary-500 bg-transparent border-0 border-b-2 border-primary-500 focus:outline-0 focus:border-primary-500 placeholder:text-primary-400"
			disabled={sent}
		/>
		<textarea
			bind:value={message}
			placeholder="Wpisz swoją wiadomość"
			class="w-full text-lg text-primary-500 bg-transparent border-0 border-b-2 border-primary-500 focus:outline-0 focus:border-primary-500 placeholder:text-primary-400 resize-y"
			disabled={sent}
		/>
		<label>
			<input type="checkbox" bind:checked class="mr-1 -mt-1" required disabled={sent} />
			<span class="text-primary-600 text-md"
				>Wyrażam zgodę na przetwarzanie danych oraz akceptuję postanowienia Polityki Prywatności.</span
			>
		</label>
		<div class="w-full flex justify-end">
			<button disabled={sent} class="px-8 py-2 text-lg bg-secondary-500">
				{sent ? 'Wysłano' : 'Wyślij'}
			</button>
		</div>
	</div>
</form>
