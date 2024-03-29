<script lang="ts">
	import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';
	import Banner from '$lib/components/banner/Banner.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import { goto } from '$app/navigation';
	import NewsletterForm from '$lib/components/newsletter-form/NewsletterForm.svelte';
	import SocialWidget from '$lib/components/social-widget/SocialWidget.svelte';
	import TechnologyPin from '$lib/components/technology-pin/TechnologyPin.svelte';
	import PortfolioItem from '$lib/components/portfolio-item/PortfolioItem.svelte';
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import ContactForm from '$lib/components/contact-form/ContactForm.svelte';
</script>

<svelte:head>
	<title>Maciej Kubus</title>
</svelte:head>

<Section>
	<Banner>
		<img slot="image" alt="banner" src="/assets/intro.svg" />
		<span slot="title"> Maciej Kubus </span>
		<span slot="subtitle"> Web developer </span>
		<div slot="content">
			<p>
				Zajmuję się tworzeniem stron internetowych od 7 lat. Posiadam również 3 lata doświadczenia
				zawodowego. Interesuje mnie głównie kodowanie ale samo projektowanie jest dla mnie też
				bardzo ciekawe.
			</p>
			<p class="mt-4">
				Piszę strony customowo od zera ale również mam bardzo dużo doświadczenia z wordpressem.
			</p>
		</div>
	</Banner>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Czym się zajmuje?</h2>
	</div>
	<div class="w-full flex flex-col xl:flex-row gap-8">
		<Card card="flex-1 text-primary-500 bg-secondary-600" footer="w-full flex justify-end">
			<span slot="header">Strony internetowe</span>
			<div class="xl:h-24">
				Tworzę strony internetowe, wizytówkowe, portfolia, landing page czy też portale.
			</div>
		</Card>
		<Card card="flex-1 text-primary-500 bg-secondary-700" footer="w-full flex justify-end">
			<span slot="header">Sklepy internetowe</span>
			<div class="xl:h-24">
				Dla każdego kto chce sprzedawać swoje produkty w internecie. Wykorzystuje do tego głównie
				woocommerce.
			</div>
		</Card>
		<Card card="flex-1 text-primary-500 bg-secondary-500" footer="w-full flex justify-end">
			<span slot="header">Programowanie</span>
			<div class="xl:h-24">
				Autorskie projekty i aplikacje, które wymagają indywidualnego podejścia.
			</div>
		</Card>
	</div>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Moje umiejętności</h2>
	</div>
	<div class="w-full flex flex-row gap-4 flex-wrap">
		<TechnologyPin variant="variant-filled-primary">Wordpress</TechnologyPin>
		<TechnologyPin variant="variant-filled-secondary">Woocommerce</TechnologyPin>
		<TechnologyPin variant="variant-filled-success">Elementor</TechnologyPin>
		<TechnologyPin variant="variant-filled-error">PHP</TechnologyPin>
		<TechnologyPin variant="variant-filled-success">JavaScript</TechnologyPin>
		<TechnologyPin variant="variant-filled-warning">TypeScript</TechnologyPin>
		<TechnologyPin variant="variant-filled-primary">Git</TechnologyPin>
		<TechnologyPin variant="variant-filled-secondary">SvelteKit</TechnologyPin>
		<TechnologyPin variant="variant-filled-success">NestJS</TechnologyPin>
		<TechnologyPin variant="variant-filled-error">Tailwind</TechnologyPin>
		<TechnologyPin variant="variant-filled-warning">HTML</TechnologyPin>
		<TechnologyPin variant="variant-filled-primary">CSS</TechnologyPin>
		<TechnologyPin variant="variant-filled-secondary">SCSS</TechnologyPin>
		<TechnologyPin variant="variant-filled-success">TypeORM</TechnologyPin>
		<TechnologyPin variant="variant-filled-error">Design</TechnologyPin>
		<TechnologyPin variant="variant-filled-success">UI/UX</TechnologyPin>
	</div>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Doświadczenie zawodowe</h2>
	</div>
	<div class="w-full flex flex-col xl:flex-row gap-8 flex-wrap">
		<Card card="flex-1 text-primary-500 bg-secondary-600" footer="w-full flex justify-end">
			<span slot="header">Viral Code</span>
			<div class="xl:h-24">
				<div class="font-semibold mb-2">Styczeń 2021 - Styczeń 2024</div>
				Praca w Viral Code bardzo wiele mnie nauczyła. Pracowałem tam jako full-stack developer. Stworzyłem
				tam wiele stron i sklepów wykorzystując do tego wordpressa.
			</div>
			<a
				slot="footer"
				href="https://viralcode.pl/"
				target="_blank"
				class="text-primary-500 transition-transform hover:translate-x-2"
			>
				<ArrowRight size={32} />
			</a>
		</Card>
		<Card card="flex-1 text-primary-500 bg-secondary-700" footer="w-full flex justify-end">
			<span slot="header">Freelance</span>
			<div class="xl:h-24">
				<div class="font-semibold mb-2">Styczeń 2024 - teraz</div>
				Teraz zajmuję się freelancem. Bardzo mi to odpowiada i mam wiele elastyczności, która sprawia,
				że czuję się wolny i niezależny.
			</div>
			<a
				slot="footer"
				href="https://useme.com/pl/roles/contractor/maciej-kubus,349467/"
				target="_blank"
				class="text-primary-500 transition-transform hover:translate-x-2"
			>
				<ArrowRight size={32} />
			</a>
		</Card>
	</div>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Moje portfolio</h2>
	</div>
	<div class="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
		<div class="space-y-8">
			<PortfolioItem>
				<img src="/assets/apps/portfolio.png" alt="portfolio" slot="image" />
				<span slot="title">Moje portfolio</span>
				<span>Moje portfolio pozwala szybko zapoznać się ze mną i z moją twórczością.</span>
			</PortfolioItem>
			<PortfolioItem url="https://viralcode.maciejkubus.usermd.net/">
				<img src="/assets/apps/viralcode.png" alt="karate" slot="image" />
				<span slot="title">Viral Code - Remake</span>
				<span>
					Remake strony Viral Code. Pokaz moich umiejętności z animacjami. Była to firma, która dała
					mi 3 lata doświadczenia zawodowego.
				</span>
			</PortfolioItem>
			<PortfolioItem url="https://shop.maciejkubus.usermd.net/">
				<img src="/assets/apps/shop.png" alt="shop" slot="image" />
				<span slot="title">Sklep - Design</span>
				<span>
					Design przykładowego sklepu. Trochę takie demo bez możliwości zakupów. Ten design jest
					zaprezentowaniem moim umiejętności projektowania.
				</span>
			</PortfolioItem>
			<PortfolioItem url="https://ogrody.lodz.pl/">
				<img src="/assets/apps/gama.png" alt="gama" slot="image" />
				<span slot="title">Gama Ogrody</span>
				<span>
					Projekt z mojej pracy gdzie pełniłem rolę project managera. Designem i kodowaniem zajmował
					się ktoś inny. Jednak aktywanie uczestniczyłem w projekcie i go nadzorowałem.
				</span>
			</PortfolioItem>
			<PortfolioItem url="https://manufakturapizzyichleba.pl/">
				<img src="/assets/apps/manu.jpg" alt="manu" slot="image" />
				<span slot="title">Manufaktura pizzy i chleba</span>
				<span>
					Wordpress z WooCommerce. Sklep internetowy dla restauracji z autorską wtyczką do
					ustawiania ram czasowych zamówień,
				</span>
			</PortfolioItem>
		</div>
		<div class="space-y-8">
			<PortfolioItem url="https://karate.maciejkubus.usermd.net/">
				<img src="/assets/apps/karate.png" alt="karate" slot="image" />
				<span slot="title">Klub sportowy karate</span>
				<span>
					Projekt strony dla klubu sportowego karate, który robiłem dla mojej siostry. Jednak
					niestety z powodów prywatnych projekt został anulowany. Włożyłem w niego sporo pracy
					dlatego mimo wszystko chce się nim pochwalić.
				</span>
			</PortfolioItem>
			<PortfolioItem url="https://storage.maciejkubus.usermd.net/">
				<img src="/assets/apps/ultimate-storage-web.png" alt="storage" slot="image" />
				<span slot="title">Ultimate Cloud Storage</span>
				<span> Własna chmura, która jest hostingiem plików. </span>
			</PortfolioItem>
			<PortfolioItem url="https://blog.maciejkubus.usermd.net/">
				<img src="/assets/apps/blog.png" alt="blog" slot="image" />
				<span slot="title">Blog - Design</span>
				<span>
					Design przykładowego demo blogu. Ten design jest zaprezentowaniem moim umiejętności
					projektowania.
				</span>
			</PortfolioItem>
			<PortfolioItem url="https://www.nowesady53.pl/">
				<img src="/assets/apps/beehives.png" alt="beehives" slot="image" />
				<span slot="title">Nowe Sady 53</span>
				<span>
					Jest to pierwszy projekt, który dostałem do wykonania w Viral Code. Designem zajmowałem
					się ktoś inny. Jednak ja zająłem się kodowaniem.
				</span>
			</PortfolioItem>
			<PortfolioItem url="https://perfectmoodboard.pl/">
				<img src="/assets/apps/pmb.jpg" alt="pmb" slot="image" />
				<span slot="title">Perfect Mood Board</span>
				<span> WordPress + WooCommerce. Sklep internetowy z możliwością umówienia spotkań. </span>
			</PortfolioItem>
		</div>
	</div>
</Section>
<Section>
	<div class="my-16">
		<h2 class="text-5xl">Contact</h2>
	</div>
</Section>
<Section>
	<div class="my-16 w-full flex flex-col xl:flex-row gap-12">
		<div class="flex-1">
			<h2 class="text-4xl leading-snug">Contact me<br /> on your favorite platform.</h2>
			<div class="flex flex-col gap-6 mt-8 text-xl">
				<a
					href="https://www.instagram.com/maciekkubus/"
					target="_blank"
					class="text-primary-500 hover:text-tertiary-500"
				>
					<LogoInstagram size={32} class="inline mr-2" /> @maciekkubus
				</a>
				<a
					href="https://github.com/maciejkubus/"
					target="_blank"
					class="text-primary-500 hover:text-tertiary-500"
				>
					<LogoGithub size={32} class="inline mr-2" /> @maciejkubus
				</a>
				<a
					href="mailto:maciekkubus@gmail.com"
					target="_blank"
					class="text-primary-500 hover:text-tertiary-500"
				>
					<Email size={32} class="inline mr-2" /> maciekkubus@gmail.com
				</a>
			</div>
		</div>
		<div class="flex-1">
			<h2 class="text-4xl leading-snug mb-8">Send me a message</h2>
			<ContactForm />
		</div>
	</div>
</Section>
