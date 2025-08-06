<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import Button from './ui/Button.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let submitSuccess = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		isSubmitting = false;
		submitSuccess = true;

		// Reset form after 3 seconds
		setTimeout(() => {
			name = '';
			email = '';
			message = '';
			submitSuccess = false;
		}, 3000);
	}

	function handleWhatsAppClick() {
		const phoneNumber = '+6281234567890'; // Replace with actual phone number
		const text = $language === 'id'
			? 'Halo, saya ingin berkonsultasi tentang layanan IT Anda.'
			: 'Hello, I would like to consult about your IT services.';

		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}
</script>

<section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				{$language === 'id' ? t('contact.title', 'id') : t('contact.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-blue-600 mx-auto"></div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div>
				<form onsubmit={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium mb-2">
							{$language === 'id' ? t('contact.name', 'id') : t('contact.name', 'en')}
						</label>
						<input
							id="name"
							type="text"
							bind:value={name}
							required
							class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
							placeholder={$language === 'id' ? 'Nama Anda' : 'Your Name'}
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium mb-2">
							{$language === 'id' ? t('contact.email', 'id') : t('contact.email', 'en')}
						</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							required
							class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
							placeholder={$language === 'id' ? 'email@contoh.com' : 'email@example.com'}
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium mb-2">
							{$language === 'id' ? t('contact.message', 'id') : t('contact.message', 'en')}
						</label>
						<textarea
							id="message"
							rows="5"
							bind:value={message}
							required
							class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
							placeholder={$language === 'id' ? 'Pesan Anda' : 'Your Message'}
						></textarea>
					</div>

					<Button type="submit" variant="primary" size="lg" loading={isSubmitting} disabled={isSubmitting}>
						{submitSuccess
							? ($language === 'id' ? 'Terkirim!' : 'Sent!')
							: ($language === 'id' ? t('contact.send', 'id') : t('contact.send', 'en'))}
					</Button>
				</form>
			</div>

			<div class="flex flex-col justify-center">
				<div class="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
					<h3 class="text-2xl font-semibold mb-6">
						{$language === 'id' ? 'Atau hubungi kami langsung' : 'Or contact us directly'}
					</h3>

					<Button
						variant="primary"
						size="lg"
						onclick={handleWhatsAppClick}
						class="w-full mb-6"
					>
						{$language === 'id' ? t('contact.whatsapp', 'id') : t('contact.whatsapp', 'en')}
					</Button>

					<div class="space-y-4">
						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span>contact@techsolutions.com</span>
						</div>

						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span>+62 812 3456 7890</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		scroll-margin-top: 4rem;
	}
</style>