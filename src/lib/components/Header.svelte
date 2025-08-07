<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import LanguageToggle from './ui/LanguageToggle.svelte';
	import Button from './ui/Button.svelte';

	let mobileMenuOpen = $state(false);

	function handleWhatsAppClick() {
		const phoneNumber = '+628976002206'; // Replace with actual phone number
		const text = $language === 'id'
			? 'Halo, saya ingin berkonsultasi tentang layanan IT Anda.'
			: 'Hello, I would like to consult about your IT services.';

		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}
</script>

<header class="border-border bg-white/90 sticky top-0 z-50 w-full border-b backdrop-blur">
	<div class="container flex h-16 items-center justify-between px-4 sm:px-6">
		<!-- Logo -->
				<div class="flex items-center space-x-2">
									<div class="bg-gradient-to-br from-purple-500 to-teal-500 h-8 w-8 rounded-full"></div>
									<span class="text-foreground text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">Azfirazka Digital Kreatif</span>
								</div>

		<!-- Desktop Navigation -->
				<nav class="hidden items-center space-x-6 md:flex">
					<a
						href="#services"
						class="text-foreground/80 hover:text-purple-600 text-sm font-medium transition-all duration-300 hover:scale-105"
					>
						{$language === 'id' ? t('nav.services', 'id') : t('nav.services', 'en')}
					</a>
					<a
						href="#portfolio"
						class="text-foreground/80 hover:text-purple-600 text-sm font-medium transition-all duration-300 hover:scale-105"
					>
						{$language === 'id' ? t('nav.portfolio', 'id') : t('nav.portfolio', 'en')}
					</a>
					<a
						href="#about"
						class="text-foreground/80 hover:text-purple-600 text-sm font-medium transition-all duration-300 hover:scale-105"
					>
						{$language === 'id' ? t('nav.about', 'id') : t('nav.about', 'en')}
					</a>
					<a
						href="#contact"
						class="text-foreground/80 hover:text-purple-600 text-sm font-medium transition-all duration-300 hover:scale-105"
					>
						{$language === 'id' ? t('nav.consultation', 'id') : t('nav.consultation', 'en')}
					</a>
				</nav>

		<!-- Right side controls -->
		<div class="flex items-center space-x-2">
			<LanguageToggle />

			<!-- Desktop CTA Button -->
						<Button variant="primary" size="sm" class="hidden md:inline-flex" onclick={handleWhatsAppClick}>
							{$language === 'id' ? t('hero.freeConsultation', 'id') : t('hero.freeConsultation', 'en')}
						</Button>

			<!-- Mobile menu button -->
			<button
				class="hover:bg-accent focus:ring-primary rounded-md p-2 transition-colors focus:ring-2 focus:outline-none md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-foreground h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-foreground h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="border-border bg-white border-t backdrop-blur md:hidden">
				<div class="container flex flex-col space-y-3 px-4 py-4">
					<a
						href="#services"
						class="text-foreground/80 hover:text-purple-600 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
						onclick={() => (mobileMenuOpen = false)}
					>
						{$language === 'id' ? t('nav.services', 'id') : t('nav.services', 'en')}
					</a>
					<a
						href="#portfolio"
						class="text-foreground/80 hover:text-purple-600 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
						onclick={() => (mobileMenuOpen = false)}
					>
						{$language === 'id' ? t('nav.portfolio', 'id') : t('nav.portfolio', 'en')}
					</a>
					<a
						href="#about"
						class="text-foreground/80 hover:text-purple-600 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
						onclick={() => (mobileMenuOpen = false)}
					>
						{$language === 'id' ? t('nav.about', 'id') : t('nav.about', 'en')}
					</a>
					<a
											href="#contact"
											class="text-foreground/80 hover:text-purple-600 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
											onclick={() => (mobileMenuOpen = false)}
										>
											{$language === 'id' ? t('nav.consultation', 'id') : t('nav.consultation', 'en')}
										</a>
				</div>
			</div>
		{/if}
</header>

<style>
	header {
		transition: all 0.3s ease;
	}
</style>
