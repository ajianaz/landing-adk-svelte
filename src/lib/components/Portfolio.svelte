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

<section id="portfolio" class="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
				{$language === 'id' ? t('portfolio.title', 'id') : t('portfolio.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
		</div>

		<!-- Category filters -->
		<div class="flex flex-wrap justify-center gap-2 mb-12">
			{#each categories as category}
				<button
					class={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
						filter === category
							? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
							: 'bg-white text-foreground/80 hover:bg-purple-100 hover:text-purple-700 shadow-sm'
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
				<Card class="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
					<img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
					<div class="p-6">
						<span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-3">
							{project.category}
						</span>
						<h3 class="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
						<p class="text-foreground/80">{project.description}</p>
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