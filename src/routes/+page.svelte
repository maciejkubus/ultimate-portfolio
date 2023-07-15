<script lang="ts">
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Banner from '$lib/components/banner/Banner.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Ultimate Portfolio</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<Section>
			<Banner>
				<img slot="image" alt="banner" src="/assets/intro.svg" />
				<span slot="title"> Maciej Kubus </span>
				<span slot="subtitle"> Król życia </span>
				<div slot="content">
					<p>
						Poznaj mnie i moje królestwo. Udaj się w jego głąb aby poznać moje pasje i
						zainteresowania. Zapoznaj się również z moimi realizacjami aby poznać również moją
						delikatną duszę.
					</p>
					<p class="mt-4">
						Znajdziesz na tej stronie najważniejsze informacje o mnie i o moich projektach.
					</p>
				</div>
			</Banner>
		</Section>
		<Section>
			<div class="my-12">
				<h2 class="text-5xl">Czym się zajmuję?</h2>
			</div>
			<div class="w-full flex gap-8">
				<Card card="flex-1 text-primary-500 bg-secondary-600" footer="w-full flex justify-end">
					<span slot="header">Programowaniem</span>
					<span>
						Programowaniem zajmuję się zawodowo. Zawsze było ono świetną formą spędzania czasu.
					</span>
					<a
						slot="footer"
						href="/aplikacje"
						on:click|preventDefault={() => goto('aplikacje')}
						class="text-primary-500 transition-transform hover:translate-x-2"
					>
						<ArrowRight size={32} />
					</a>
				</Card>
				<Card card="flex-1 text-primary-500 bg-secondary-700" footer="w-full flex justify-end">
					<span slot="header">Rysowaniem</span>
					<span> Rysowaniem zajmuję się w wolnym czasie. Dla czystej przyjemności tworzenia. </span>
					<a
						slot="footer"
						href="/rysunki"
						on:click|preventDefault={() => goto('rysunki')}
						class="text-primary-500 transition-transform hover:translate-x-2"
					>
						<ArrowRight size={32} />
					</a>
				</Card>
				<Card card="flex-1 text-primary-500 bg-secondary-500" footer="w-full flex justify-end">
					<span slot="header">Fotografowaniem</span>
					<span>
						Fotografią zazwyczaj zajmuję się gdy na przykład czekam na pociąg i nie mam ochoty
						czekać.
					</span>
					<a
						slot="footer"
						href="/fotografie"
						on:click|preventDefault={() => goto('fotografie')}
						class="text-primary-500 transition-transform hover:translate-x-2"
					>
						<ArrowRight size={32} />
					</a>
				</Card>
			</div>
		</Section>
	</div>
</div>
