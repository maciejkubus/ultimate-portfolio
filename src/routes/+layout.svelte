<script lang="ts">
	import { Drawer, Toast, drawerStore, Modal, AppShell } from '@skeletonlabs/skeleton';
	import '../style/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../style/app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import PopupCookies from '$lib/components/popup-cookies/PopupCookies.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<PopupCookies />
<Modal />
<Toast position="tr" />
<Drawer />
<AppShell class="transition-transform" regionPage="variant-ringed-surface ring-0">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<main class="py-12">
		<div class="h-full mx-auto flex flex-col justify-center items-center">
			<div class="xl:space-y-5 w-full">
				<slot />
			</div>
		</div>
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
