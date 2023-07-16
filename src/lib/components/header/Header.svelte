<script lang="ts">
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	interface MenuItem {
		title: string;
		href: string;
	}
	const menuItems: MenuItem[] = [
		{ title: 'Home', href: '/' },
		{ title: 'Aplikacje', href: '/aplikacje' },
		{ title: 'Rysunki', href: '/rysunki' },
		{ title: 'Fotografie', href: '/fotografie' },
		{ title: 'Kontakt', href: '/kontakt' }
	];

	let path = '';
	$: path = $page.url.pathname;

	let open = false;
</script>

<button
	class="fixed z-30 p-4 right-2 top-2 cursor-pointer text-primary-500 xl:hidden {open
		? ''
		: 'bg-tertiary-500'}"
	on:click={() => (open = !open)}
>
	{#if open}
		<Close size={32} class="scale-105" />
	{:else}
		<Menu size={32} />
	{/if}
</button>

<header
	class="w-100 fixed z-20 bg-surface-900 inset-0 xl:inset-auto xl:sticky p-8 pt-16 xl:pt-8 xl:border-b-2 border-secondary-500 {open
		? 'flex'
		: 'hidden'} xl:flex flex-col xl:flex-row justify-between items-center"
>
	<div>
		<span class="font-bold text-4xl xl:text-lg">Maciej&nbsp;Kubus</span>
	</div>
	<nav>
		<ul class="flex gap-6 flex-col xl:flex-row text-center">
			{#each menuItems as menuItem}
				<li class="text-lg font-semibold">
					<a
						href={menuItem.href}
						on:click|preventDefault={() => {
							goto(menuItem.href);
							open = false;
						}}
						class={path === menuItem.href ? 'text-tertiary-500 font-bold' : 'text-primary-600'}
					>
						{menuItem.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex gap-6">
		<a
			href="https://www.instagram.com/maciekkubus/"
			target="_blank"
			class="text-primary-500 hover:text-tertiary-500"
		>
			<LogoInstagram size={32} />
		</a>
		<a
			href="https://github.com/maciejkubus/"
			target="_blank"
			class="text-primary-500 hover:text-tertiary-500"
		>
			<LogoGithub size={32} />
		</a>
		<a
			href="mailto:maciekkubus@gmail.com"
			target="_blank"
			class="text-primary-500 hover:text-tertiary-500"
		>
			<Email size={32} />
		</a>
	</div>
</header>
