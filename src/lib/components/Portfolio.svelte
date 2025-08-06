<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import Card from './ui/Card.svelte';

	// Portfolio data
	let projects = $derived([
		{
			id: 1,
			title: 'E-Commerce Platform',
			description: $language === 'id'
				? 'Platform e-commerce lengkap dengan sistem pembayaran dan manajemen inventaris.'
				: 'Complete e-commerce platform with payment system and inventory management.',
			image: 'https://placehold.co/600x400',
			category: 'Web'
		},
		{
			id: 2,
			title: 'Mobile Banking App',
			description: $language === 'id'
				? 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan notifikasi real-time.'
				: 'Mobile banking app with transfer, payment, and real-time notification features.',
			image: 'https://placehold.co/600x400',
			category: 'Mobile'
		},
		{
			id: 3,
			title: 'Workflow Automation',
			description: $language === 'id'
				? 'Sistem otomatisasi alur kerja bisnis menggunakan n8n.'
				: 'Business workflow automation system using n8n.',
			image: 'https://placehold.co/600x400',
			category: 'Automation'
		},
		{
			id: 4,
			title: 'API Integration',
			description: $language === 'id'
				? 'Integrasi API pihak ketiga untuk sistem manajemen pelanggan.'
				: 'Third-party API integration for customer management system.',
			image: 'https://placehold.co/600x400',
			category: 'API'
		}
	]);

	let filter = $state('All');

	// Unique categories
	let categories = $derived(['All', ...new Set(projects.map(p => p.category))]);

	// Filtered projects
	let filteredProjects = $derived(
		filter === 'All'
			? projects
			: projects.filter(project => project.category === filter)
	);
</script>

<section id="portfolio" class="py-20 bg-white dark:bg-gray-900">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				{$language === 'id' ? t('portfolio.title', 'id') : t('portfolio.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-blue-600 mx-auto"></div>
		</div>

		<!-- Category filters -->
		<div class="flex flex-wrap justify-center gap-2 mb-12">
			{#each categories as category}
				<button
					class={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
						filter === category
							? 'bg-blue-600 text-white'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
					}`}
					onclick={() => filter = category}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects as project}
				<Card class="overflow-hidden">
					<img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
					<div class="p-6">
						<span class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
							{project.category}
						</span>
						<h3 class="text-xl font-semibold mb-2">{project.title}</h3>
						<p class="text-gray-600 dark:text-gray-300">{project.description}</p>
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