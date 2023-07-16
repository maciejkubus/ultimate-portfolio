<script lang="ts">
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import ContactForm from '$lib/components/contact-form/ContactForm.svelte';
</script>

<svelte:head>
	<title>Maciej Kubus | Contact</title>
</svelte:head>

<Section>
	<div class="my-16">
		<h2 class="text-6xl">Contact</h2>
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
<Section>
	<h2 class="text-3xl mb-2">My Photos</h2>
	<p class="text-xl text-primary-700 font-semibold mb-8">
		I don't know why but I have need to put a map on contact page.
	</p>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d151750.14080690907!2d-157.39696353262372!3d1.8705848441644446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1689528515761!5m2!1sen!2spl"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Kiribati"
		class="w-100 h-96 bg-primary-500"
	/>
</Section>
