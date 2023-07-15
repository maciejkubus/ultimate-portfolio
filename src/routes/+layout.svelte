<script lang="ts">
	import { Drawer, Toast, drawerStore, Modal, AppShell } from '@skeletonlabs/skeleton';
	import '../style/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../style/app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Modal />
<Toast position="tr" />
<Drawer />
<AppShell class="transition-transform" regionPage="variant-ringed-surface">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<main class="py-12">
		<slot />
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
