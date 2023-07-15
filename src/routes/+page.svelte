<script lang="ts">
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Banner from '$lib/components/banner/Banner.svelte';
	import Section from '$lib/components/section/Section.svelte';
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
						Odwiedź również moje social media aby być na bieżąco z moimi poczynaniami.
					</p>
					<div class="mt-4 flex gap-2">
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
					</div>
				</div>
			</Banner>
		</Section>
	</div>
</div>
