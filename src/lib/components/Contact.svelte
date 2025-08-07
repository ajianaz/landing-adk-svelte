<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import Button from './ui/Button.svelte';

	function handleWhatsAppClick() {
		const phoneNumber = '+628976002206'; // Replace with actual phone number
		const text = $language === 'id'
			? 'Halo, saya ingin berkonsultasi tentang layanan IT Anda.'
			: 'Hello, I would like to consult about your IT services.';

		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}
</script>

<section id="contact" class="py-20 bg-gradient-to-br from-teal-50 to-purple-50">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
				{$language === 'id' ? t('contact.title', 'id') : t('contact.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
		</div>

		<div class="flex justify-center">
			<div class="bg-white rounded-lg p-8 shadow-lg border border-purple-100 max-w-2xl w-full">
				<h3 class="text-2xl font-semibold mb-6 text-foreground text-center">
					{$language === 'id' ? 'Hubungi kami langsung' : 'Contact us directly'}
				</h3>

				<div class="space-y-6">
					<Button
						variant="primary"
						size="lg"
						onclick={handleWhatsAppClick}
						class="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600"
					>
						{$language === 'id' ? t('contact.whatsapp', 'id') : t('contact.whatsapp', 'en')}
					</Button>

					<div class="space-y-4">
						<div class="flex items-center justify-center">
													<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
													</svg>
													<span class="text-foreground">contact@azfirazka.com</span>
												</div>

						<div class="flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span class="text-foreground">+62 89 7600 2206</span>
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