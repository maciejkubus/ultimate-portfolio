<script lang="ts">
	import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';

	import Banner from '$lib/components/banner/Banner.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import { goto } from '$app/navigation';
	import NewsletterForm from '$lib/components/newsletter-form/NewsletterForm.svelte';
	import SocialWidget from '$lib/components/social-widget/SocialWidget.svelte';
</script>

<svelte:head>
	<title>Maciej Kubus</title>
</svelte:head>

<Section>
	<Banner>
		<img slot="image" alt="banner" src="/assets/intro.svg" />
		<span slot="title"> Maciej Kubus </span>
		<span slot="subtitle"> King of Life </span>
		<div slot="content">
			<p>
				Get to know me and my kingdom. Go and explore, discover everything about me and my passions.
				Notice my soul in my projects and get a grasp of who I am really.
			</p>
			<p class="mt-4">You will find here everything you have to know about me and my projects.</p>
		</div>
	</Banner>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">What are my passions?</h2>
	</div>
	<div class="w-full flex flex-col xl:flex-row gap-8">
		<Card card="flex-1 text-primary-500 bg-secondary-600" footer="w-full flex justify-end">
			<span slot="header">Applications</span>
			<div class="xl:h-24">
				App development has always been important to me and I actually do a lot of fun with it.
			</div>
			<a
				slot="footer"
				href="/apps"
				on:click|preventDefault={() => goto('apps')}
				class="text-primary-500 transition-transform hover:translate-x-2"
			>
				<ArrowRight size={32} />
			</a>
		</Card>
		<Card card="flex-1 text-primary-500 bg-secondary-700" footer="w-full flex justify-end">
			<span slot="header">Drawings</span>
			<div class="xl:h-24">
				I draw in my spare time. I love how drawing things allows you to see the details of reality.
			</div>
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
			<span slot="header">Photos</span>
			<div class="xl:h-24">
				I am an amateur photographer. I take pictures, for example, while waiting for a train so
				that I don't waste any time waiting.
			</div>
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
			<img src="/assets/butterfly.jpg" alt="butterfly" />
		</div>
		<div class="flex-1 p-4 flex flex-col justify-center">
			<h3 class="text-5xl">My personality</h3>
			<p class="mt-12">
				I'm an calm, introverted individual who thrives in calm environments. With a natural ability
				to focus, I find joy in actively engaging with tasks rather than simply sitting idle.
				Constantly seeking opportunities to do things, I embrace the satisfaction of meaningful
				action.
			</p>
			<p class="mt-4">Here are a few things about me that i want to highlight:</p>
			<ul class="mt-4">
				<li class="align-middle mt-1">
					<StarFilled size={24} class="inline mr-2 text-secondary-500" /> Introvert.
				</li>
				<li class="align-middle mt-1">
					<StarFilled size={24} class="inline mr-2 text-secondary-500" /> I know how to focus.
				</li>
				<li class="align-middle mt-1">
					<StarFilled size={24} class="inline mr-2 text-secondary-500" /> Curious about the world.
				</li>
				<li class="align-middle mt-1">
					<StarFilled size={24} class="inline mr-2 text-secondary-500" /> I like to overcome challenges.
				</li>
			</ul>
		</div>
	</div>
</Section>
<Section>
	<div class="my-16 px-8 py-12 bg-secondary-500 flex flex-col xl:flex-row gap-1">
		<div class="flex-1">
			<h2 class="text-4xl">Leave me your Email.</h2>
			<p class="mt-4 text-lg">I will surely get back to you.</p>
		</div>
		<div class="flex-1">
			<NewsletterForm />
		</div>
	</div>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">You can also find me on</h2>
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
