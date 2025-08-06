<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import Button from './ui/Button.svelte';
</script>

<section class="relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent py-20 md:py-28">
	<div class="container px-4 md:px-6 relative z-10">
		<div class="flex flex-col items-center text-center space-y-6">
			<h1 class="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
				{$language === 'id' ? t('hero.headline', 'id') : t('hero.headline', 'en')}
			</h1>

			<p class="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
				{$language === 'id' ? t('hero.subheadline', 'id') : t('hero.subheadline', 'en')}
			</p>

			<div class="flex flex-col sm:flex-row gap-4 mt-8">
				<Button variant="primary" size="lg" href="#services">
					{$language === 'id' ? t('hero.viewServices', 'id') : t('hero.viewServices', 'en')}
				</Button>
				<Button variant="outline" size="lg" href="#contact">
					{$language === 'id' ? t('hero.consultNow', 'id') : t('hero.consultNow', 'en')}
				</Button>
			</div>
		</div>
	</div>

	<!-- Animated background elements -->
	<div class="absolute top-0 left-0 w-full h-full overflow-hidden">
		<div class="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-pulse"></div>
		<div class="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
	</div>
</section>

<style>
	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	:global(.animate-float) {
		animation: float 6s ease-in-out infinite;
	}
</style>