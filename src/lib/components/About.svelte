<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
</script>

<section id="about" class="py-20 bg-background">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
				{$language === 'id' ? t('about.title', 'id') : t('about.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-primary mx-auto"></div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h3 class="text-2xl font-semibold mb-4 text-foreground">
					{$language === 'id' ? t('about.bio', 'id') : t('about.bio', 'en')}
				</h3>
				<p class="text-foreground/80 mb-6">
					{$language === 'id' ? t('about.vision', 'id') : t('about.vision', 'en')}
				</p>
				<p class="text-foreground/80 mb-6">
					{$language === 'id' ? t('about.mission', 'id') : t('about.mission', 'en')}
				</p>
				<p class="text-foreground/80">
					{$language === 'id' ? t('about.approach', 'id') : t('about.approach', 'en')}
				</p>
			</div>

			<div class="flex justify-center">
				<div class="relative">
					<div class="w-64 h-64 bg-primary/10 rounded-lg"></div>
					<div class="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/20 rounded-lg"></div>
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