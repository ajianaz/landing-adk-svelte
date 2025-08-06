<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
</script>

<section id="about" class="py-20 bg-white dark:bg-gray-900">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				{$language === 'id' ? t('about.title', 'id') : t('about.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-blue-600 mx-auto"></div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h3 class="text-2xl font-semibold mb-4">
					{$language === 'id' ? t('about.bio', 'id') : t('about.bio', 'en')}
				</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-6">
					{$language === 'id' ? t('about.vision', 'id') : t('about.vision', 'en')}
				</p>
				<p class="text-gray-600 dark:text-gray-300 mb-6">
					{$language === 'id' ? t('about.mission', 'id') : t('about.mission', 'en')}
				</p>
				<p class="text-gray-600 dark:text-gray-300">
					{$language === 'id' ? t('about.approach', 'id') : t('about.approach', 'en')}
				</p>
			</div>

			<div class="flex justify-center">
				<div class="relative">
					<div class="w-64 h-64 bg-blue-600 rounded-lg"></div>
					<div class="absolute -bottom-4 -right-4 w-64 h-64 bg-indigo-600 rounded-lg"></div>
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