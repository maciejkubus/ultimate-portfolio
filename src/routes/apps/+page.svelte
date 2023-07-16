<script lang="ts">
	import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';
	import Code from 'carbon-icons-svelte/lib/Code.svelte';
	import IbmOpenEnterpriseLanguages from 'carbon-icons-svelte/lib/IbmOpenEnterpriseLanguages.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import WaveHeight from 'carbon-icons-svelte/lib/WaveHeight.svelte';
	import CicsSystemGroup from 'carbon-icons-svelte/lib/CicsSystemGroup.svelte';
	import AppCard from '$lib/components/app-card/AppCard.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import ImageLightbox from '$lib/components/image-lightbox/ImageLightbox.svelte';
	import DataBase from 'carbon-icons-svelte/lib/DataBase.svelte';
	import Document from 'carbon-icons-svelte/lib/Document.svelte';

	let imageLightBox = '';
	let showLightBox = false;

	const openLightBox = (image: string) => {
		imageLightBox = image;
		showLightBox = true;
	};

	const closeLightbox = () => {
		showLightBox = false;
	};
</script>

<svelte:head>
	<title>Maciej Kubus | Applications</title>
</svelte:head>

<ImageLightbox path={imageLightBox} show={showLightBox} on:close={closeLightbox} />

<Section>
	<div class="my-16">
		<h2 class="text-6xl">My Applications</h2>
	</div>
</Section>
<Section>
	<div class="flex flex-col gap-16">
		<AppCard>
			<button
				slot="image"
				on:click={() => openLightBox('/assets/apps/ultimate-storage-server.png')}
				class="h-full"
			>
				<img
					src="/assets/apps/ultimate-storage-server.png"
					alt="karate"
					class="h-full object-cover"
				/>
			</button>
			<span slot="name">Ultimate storage - api server</span>
			<span slot="description">
				Api server of Ultimate Storage project designed to be my private cloud service.
			</span>
			<div slot="left">
				<p class="font-bold">Highlighted functionalities:</p>
				<ul class="mt-2">
					<li class="align-middle">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Safe file storage.
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Authentications
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Albums for files
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Functional guards
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Well designed database
					</li>
				</ul>
			</div>
			<div slot="right">
				<p class="font-bold">Main technologies:</p>
				<ul class="mt-2">
					<li class="align-middle">
						<Code size={24} class="inline mr-2 text-surface-500" /> NestJS
					</li>
					<li class="align-middle mt-1">
						<IbmOpenEnterpriseLanguages size={24} class="inline mr-2 text-surface-500" /> Typescript
					</li>
					<li class="align-middle mt-1">
						<DataBase size={24} class="inline mr-2 text-surface-500" /> MySQL / SQLite
					</li>
					<li class="align-middle mt-1">
						<Document size={24} class="inline mr-2 text-surface-500" /> Swagger
					</li>
				</ul>
			</div>
			<div slot="links">
				<a href="https://github.com/maciejkubus/ultimate-cloud-storage">
					<LogoGithub size={32} class="text-surface-500" />
				</a>
			</div>
		</AppCard>
		<AppCard>
			<button
				slot="image"
				on:click={() => openLightBox('/assets/apps/ultimate-storage-web.png')}
				class="h-full"
			>
				<img src="/assets/apps/ultimate-storage-web.png" alt="karate" class="h-full object-cover" />
			</button>
			<span slot="name">Ultimate storage - web client</span>
			<span slot="description">
				Web client to access ultimate storage. It is designed to be a clean and simple dashboard.
			</span>
			<div slot="left">
				<p class="font-bold">Highlighted functionalities:</p>
				<ul class="mt-2">
					<li class="align-middle">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Toast notifications
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> File list
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Album list
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> User settings
					</li>
				</ul>
			</div>
			<div slot="right">
				<p class="font-bold">Main technologies:</p>
				<ul class="mt-2">
					<li class="align-middle">
						<Code size={24} class="inline mr-2 text-surface-500" /> Sveltekit
					</li>
					<li class="align-middle mt-1">
						<CicsSystemGroup size={24} class="inline mr-2 text-surface-500" /> Sveltekit Skeleton
					</li>
					<li class="align-middle mt-1">
						<IbmOpenEnterpriseLanguages size={24} class="inline mr-2 text-surface-500" /> Typescript
					</li>
					<li class="align-middle mt-1">
						<WaveHeight size={24} class="inline mr-2 text-surface-500" /> Tailwind.
					</li>
				</ul>
			</div>
			<div slot="links">
				<a href="https://github.com/maciejkubus/ultimate-cloud-storage">
					<LogoGithub size={32} class="text-surface-500" />
				</a>
			</div>
		</AppCard>
		<AppCard>
			<button slot="image" on:click={() => openLightBox('/assets/apps/karate.png')} class="h-full">
				<img src="/assets/apps/karate.png" alt="karate" class="h-full object-cover" />
			</button>
			<span slot="name">Karate Club</span>
			<span slot="description">
				The website was created for a karate club, which mainly operates in primary schools.
			</span>
			<div slot="left">
				<p class="font-bold">Highlighted elements:</p>
				<ul class="mt-2">
					<li class="align-middle">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Colorful and fun design.
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Carousel
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Animated timeline
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Pricing table and meeting calendar
					</li>
					<li class="align-middle mt-1">
						<Checkmark size={24} class="inline mr-2 text-surface-500" /> Contact form
					</li>
				</ul>
			</div>
			<div slot="right">
				<p class="font-bold">Main technologies:</p>
				<ul class="mt-2">
					<li class="align-middle">
						<Code size={24} class="inline mr-2 text-surface-500" /> Sveltekit
					</li>
					<li class="align-middle mt-1">
						<IbmOpenEnterpriseLanguages size={24} class="inline mr-2 text-surface-500" /> Typescript
					</li>
					<li class="align-middle mt-1">
						<WaveHeight size={24} class="inline mr-2 text-surface-500" /> Tailwind.
					</li>
				</ul>
			</div>
			<div slot="links">
				<a href="https://github.com/Macylion/mirai-karate-club">
					<LogoGithub size={32} class="text-surface-500" />
				</a>
			</div>
		</AppCard>
	</div>
</Section>