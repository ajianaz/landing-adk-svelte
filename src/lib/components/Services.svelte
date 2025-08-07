<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import Card from './ui/Card.svelte';

	// Service data
	let services = $derived([
		{
			id: 'webMobile',
			icon: '💻',
			title: $language === 'id' ? t('services.webMobile.title', 'id') : t('services.webMobile.title', 'en'),
			description: $language === 'id' ? t('services.webMobile.description', 'id') : t('services.webMobile.description', 'en')
		},
		{
			id: 'automation',
			icon: '⚙️',
			title: $language === 'id' ? t('services.automation.title', 'id') : t('services.automation.title', 'en'),
			description: $language === 'id' ? t('services.automation.description', 'id') : t('services.automation.description', 'en')
		},
		{
			id: 'integration',
			icon: '🔗',
			title: $language === 'id' ? t('services.integration.title', 'id') : t('services.integration.title', 'en'),
			description: $language === 'id' ? t('services.integration.description', 'id') : t('services.integration.description', 'en')
		},
		{
			id: 'devops',
			icon: '🚀',
			title: $language === 'id' ? t('services.devops.title', 'id') : t('services.devops.title', 'en'),
			description: $language === 'id' ? t('services.devops.description', 'id') : t('services.devops.description', 'en')
		},
		{
			id: 'database',
			icon: '🗄️',
			title: $language === 'id' ? t('services.database.title', 'id') : t('services.database.title', 'en'),
			description: $language === 'id' ? t('services.database.description', 'id') : t('services.database.description', 'en')
		},
		{
			id: 'ai',
			icon: '🤖',
			title: $language === 'id' ? t('services.ai.title', 'id') : t('services.ai.title', 'en'),
			description: $language === 'id' ? t('services.ai.description', 'id') : t('services.ai.description', 'en')
		}
	]);
</script>

<section id="services" class="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
				{$language === 'id' ? t('services.title', 'id') : t('services.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<Card class="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
					<div class="flex flex-col items-center text-center">
						<div class="text-4xl mb-4 text-purple-600">{service.icon}</div>
						<h3 class="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
						<p class="text-foreground/80">{service.description}</p>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		scroll-margin-top: 4rem;
	}
</style>