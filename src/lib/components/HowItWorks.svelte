<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';

	// Steps data
	let steps = $derived([
		{
			id: 1,
			title: $language === 'id' ? t('howItWorks.steps.step1', 'id') : t('howItWorks.steps.step1', 'en'),
			icon: '1'
		},
		{
			id: 2,
			title: $language === 'id' ? t('howItWorks.steps.step2', 'id') : t('howItWorks.steps.step2', 'en'),
			icon: '2'
		},
		{
			id: 3,
			title: $language === 'id' ? t('howItWorks.steps.step3', 'id') : t('howItWorks.steps.step3', 'en'),
			icon: '3'
		},
		{
			id: 4,
			title: $language === 'id' ? t('howItWorks.steps.step4', 'id') : t('howItWorks.steps.step4', 'en'),
			icon: '4'
		},
		{
			id: 5,
			title: $language === 'id' ? t('howItWorks.steps.step5', 'id') : t('howItWorks.steps.step5', 'en'),
			icon: '5'
		}
	]);
</script>

<section id="how-it-works" class="py-20 bg-muted">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
				{$language === 'id' ? t('howItWorks.title', 'id') : t('howItWorks.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-primary mx-auto"></div>
		</div>

		<div class="relative">
			<!-- Progress line -->
			<div class="absolute left-1/2 top-12 transform -translate-x-1/2 h-[calc(100%-3rem)] w-1 bg-primary/20 hidden md:block"></div>

			<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
				{#each steps as step}
					<div class="relative flex flex-col items-center text-center md:text-left md:flex-row md:space-x-4 md:space-y-0">
						<!-- Step number circle -->
						<div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10">
							{step.icon}
						</div>

						<!-- Step content -->
						<div class="mt-4 md:mt-0">
							<h3 class="text-lg font-semibold text-foreground">{step.title}</h3>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		scroll-margin-top: 4rem;
	}
</style>