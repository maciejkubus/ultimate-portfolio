<script lang="ts">
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';

	import Banner from '$lib/components/banner/Banner.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import { goto } from '$app/navigation';
	import NewsletterForm from '$lib/components/newsletter-form/NewsletterForm.svelte';
	import SocialWidget from '$lib/components/social-widget/SocialWidget.svelte';
</script>

<svelte:head>
	<title>Ultimate Portfolio</title>
</svelte:head>

<Section>
	<Banner>
		<img slot="image" alt="banner" src="/assets/intro.svg" />
		<span slot="title"> Maciej Kubus </span>
		<span slot="subtitle"> Król życia </span>
		<div slot="content">
			<p>
				Poznaj mnie i moje królestwo. Udaj się w jego głąb aby poznać moje pasje i zainteresowania.
				Zapoznaj się również z moimi realizacjami aby poznać również moją delikatną duszę.
			</p>
			<p class="mt-4">
				Znajdziesz na tej stronie najważniejsze informacje o mnie i o moich projektach.
			</p>
		</div>
	</Banner>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Czym się zajmuję?</h2>
	</div>
	<div class="w-full flex flex-col xl:flex-row gap-8">
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
			<span>
				Rysowaniem zajmuję się w wolnym czasie. Dla czystej zabawy ołówkiem na kartce papieru.
			</span>
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
				Fotografią zazwyczaj zajmuję się gdy na przykład czekam na pociąg i nie mam ochoty czekać.
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
<Section>
	<div class="w-full flex flex-col xl:flex-row gap-8 mt-36">
		<div class="flex-1 p-4">
			<img src="/assets/kaktus.jpg" alt="kaktus" />
		</div>
		<div class="flex-1 p-4 flex flex-col justify-center">
			<h3 class="text-5xl">Mój Kaktus</h3>
			<p class="mt-12">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam libero maxime quas atque
				nobis nostrum, optio quae magnam ratione officia maiores hic error cum deleniti veritatis
				eos fugiat mollitia, perferendis voluptas. Neque nihil earum repudiandae distinctio,
				adipisci quo blanditiis esse.
			</p>
			<p class="mt-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste blanditiis fuga
				autem natus aut reprehenderit quasi suscipit quisquam. Earum.
			</p>
			<ul class="mt-4">
				<li class="align-middle">
					<Checkmark size={24} class="inline mr-2 text-secondary-500" /> Podlewanie kaktusa jest mega
					ważne.
				</li>
				<li class="align-middle">
					<Checkmark size={24} class="inline mr-2 text-secondary-500" /> Nasz zespół podleje ci kaktusa
					teraz.
				</li>
				<li class="align-middle">
					<Checkmark size={24} class="inline mr-2 text-secondary-500" /> Kto nie ma kaktusa nie ma igieł
					z kaktusa.
				</li>
				<li class="align-middle">
					<Checkmark size={24} class="inline mr-2 text-secondary-500" /> Wytrzymałość kaktusa zależy
					od gleby.
				</li>
			</ul>
		</div>
	</div>
</Section>
<Section>
	<div class="my-16 px-8 py-12 bg-secondary-500 flex flex-col xl:flex-row gap-1">
		<div class="flex-1">
			<h2 class="text-4xl">Zapisz się do newslettera.</h2>
			<p class="mt-4 text-lg">Po co? bo go napisałem. Joł.</p>
		</div>
		<div class="flex-1">
			<NewsletterForm />
		</div>
	</div>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Gdzie mnie znajdziesz?</h2>
	</div>
	<div class="flex gap-8 flex-col md:flex-row">
		<div class="flex-1">
			<SocialWidget href="https://www.instagram.com/maciekkubus/">
				<img slot="image" src="/assets/kaktus.jpg" alt="kaktus" />
				<span slot="title">Instagram</span>
				<span slot="subtitle">@maciekkubus</span>
			</SocialWidget>
		</div>
		<div class="flex-1">
			<SocialWidget href="https://github.com/maciejkubus/">
				<img slot="image" src="/assets/kaktus.jpg" alt="kaktus" />
				<span slot="title">GitHub</span>
				<span slot="subtitle">@maciejkubus</span>
			</SocialWidget>
		</div>
	</div>
</Section>
