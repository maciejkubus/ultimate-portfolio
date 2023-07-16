<script lang="ts">
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import ContactForm from '$lib/components/contact-form/ContactForm.svelte';
</script>

<Section>
	<div class="my-16">
		<h2 class="text-6xl">Kontakt</h2>
	</div>
</Section>
<Section>
	<div class="my-16 w-full flex flex-col xl:flex-row gap-12">
		<div class="flex-1">
			<h2 class="text-4xl leading-snug">Skontaktuj się z nami<br /> używając dowolnej metody.</h2>
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
			<h2 class="text-4xl leading-snug mb-8">Wyślij nam wiadomość</h2>
			<ContactForm />
		</div>
	</div>
</Section>
<Section>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d518.7437260221171!2d19.384784245438627!3d51.79565486145095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1689422950779!5m2!1sen!2spl"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="google maps"
		class="w-100 h-96"
	/>
</Section>
