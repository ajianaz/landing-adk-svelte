<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import LanguageToggle from './ui/LanguageToggle.svelte';
	import ThemeToggle from './ui/ThemeToggle.svelte';
	import Button from './ui/Button.svelte';

	let mobileMenuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
	<div class="container flex h-16 items-center justify-between px-4 sm:px-6">
		<!-- Logo -->
		<div class="flex items-center space-x-2">
			<div class="h-8 w-8 rounded-full bg-blue-600"></div>
			<span class="text-xl font-bold">TechSolutions</span>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center space-x-6">
			<a href="#services" class="text-sm font-medium transition-colors hover:text-blue-600">
				{$language === 'id' ? t('nav.services', 'id') : t('nav.services', 'en')}
			</a>
			<a href="#portfolio" class="text-sm font-medium transition-colors hover:text-blue-600">
				{$language === 'id' ? t('nav.portfolio', 'id') : t('nav.portfolio', 'en')}
			</a>
			<a href="#about" class="text-sm font-medium transition-colors hover:text-blue-600">
				{$language === 'id' ? t('nav.about', 'id') : t('nav.about', 'en')}
			</a>
			<a href="#contact" class="text-sm font-medium transition-colors hover:text-blue-600">
				{$language === 'id' ? t('nav.consultation', 'id') : t('nav.consultation', 'en')}
			</a>
		</nav>

		<!-- Right side controls -->
		<div class="flex items-center space-x-2">
			<LanguageToggle />
			<ThemeToggle />

			<!-- Desktop CTA Button -->
			<Button variant="primary" size="sm" class="hidden md:inline-flex">
				{$language === 'id' ? t('hero.freeConsultation', 'id') : t('hero.freeConsultation', 'en')}
			</Button>

			<!-- Mobile menu button -->
			<button
				class="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t bg-background/95 backdrop-blur">
			<div class="container px-4 py-4 flex flex-col space-y-3">
				<a href="#services" class="text-sm font-medium py-2 transition-colors hover:text-blue-600" onclick={() => mobileMenuOpen = false}>
					{$language === 'id' ? t('nav.services', 'id') : t('nav.services', 'en')}
				</a>
				<a href="#portfolio" class="text-sm font-medium py-2 transition-colors hover:text-blue-600" onclick={() => mobileMenuOpen = false}>
					{$language === 'id' ? t('nav.portfolio', 'id') : t('nav.portfolio', 'en')}
				</a>
				<a href="#about" class="text-sm font-medium py-2 transition-colors hover:text-blue-600" onclick={() => mobileMenuOpen = false}>
					{$language === 'id' ? t('nav.about', 'id') : t('nav.about', 'en')}
				</a>
				<a href="#contact" class="text-sm font-medium py-2 transition-colors hover:text-blue-600" onclick={() => mobileMenuOpen = false}>
					{$language === 'id' ? t('nav.consultation', 'id') : t('nav.consultation', 'en')}
				</a>
				<Button variant="primary" size="sm" class="w-full mt-2" onclick={() => mobileMenuOpen = false}>
					{$language === 'id' ? t('hero.freeConsultation', 'id') : t('hero.freeConsultation', 'en')}
				</Button>
			</div>
		</div>
	{/if}
</header>

<style>
	header {
		transition: all 0.3s ease;
	}
</style>