<script lang="ts">
	import { language } from '../stores.js';
	import { t } from '../translations.js';
	import Card from './ui/Card.svelte';

	// Testimonials data
	let testimonials = $derived([
		{
			id: 1,
			name: 'Budi Santoso',
			company: 'CEO, TechStartup',
			content: $language === 'id'
				? 'Layanan mereka luar biasa! Membantu kami mengembangkan platform e-commerce yang skalabel dalam waktu singkat.'
				: 'Their service is exceptional! Helped us develop a scalable e-commerce platform in a short time.',
			avatar: 'https://placehold.co/100x100',
			rating: 5
		},
		{
			id: 2,
			name: 'Siti Rahmawati',
			company: 'CTO, FinTech Solutions',
			content: $language === 'id'
				? 'Integrasi sistem yang mereka lakukan sangat mempercepat proses bisnis kami. Sangat direkomendasikan!'
				: 'The system integration they performed greatly accelerated our business processes. Highly recommended!',
			avatar: 'https://placehold.co/100x100',
			rating: 5
		},
		{
			id: 3,
			name: 'Ahmad Prasetyo',
			company: 'Founder, E-Commerce Plus',
			content: $language === 'id'
				? 'Solusi AI yang mereka implementasikan meningkatkan efisiensi tim kami sebesar 40%. Luar biasa!'
				: 'The AI solution they implemented increased our team\'s efficiency by 40%. Amazing!',
			avatar: 'https://placehold.co/100x100',
			rating: 5
		}
	]);

	let currentTestimonial = $state(0);

	function nextTestimonial() {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section id="testimonials" class="py-20 bg-muted">
	<div class="container px-4 md:px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
				{$language === 'id' ? t('testimonials.title', 'id') : t('testimonials.title', 'en')}
			</h2>
			<div class="w-20 h-1 bg-primary mx-auto"></div>
		</div>

		<div class="max-w-4xl mx-auto">
			{#if testimonials.length > 0}
				<Card class="p-8 md:p-12 text-center">
					<div class="flex justify-center mb-6">
						<img
							src={testimonials[currentTestimonial].avatar}
							alt={testimonials[currentTestimonial].name}
							class="w-20 h-20 rounded-full object-cover"
						/>
					</div>

					<div class="flex justify-center mb-4">
						{#each Array(testimonials[currentTestimonial].rating) as _, i}
							<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						{/each}
					</div>

					<blockquote class="text-xl md:text-2xl font-medium mb-6 text-foreground">
						"{testimonials[currentTestimonial].content}"
					</blockquote>

					<div class="font-semibold text-lg text-foreground">
						{testimonials[currentTestimonial].name}
					</div>
					<div class="text-foreground/80">
						{testimonials[currentTestimonial].company}
					</div>
				</Card>

				<div class="flex justify-center mt-8 space-x-4">
					<button
						class="p-2 rounded-full bg-card shadow-md hover:bg-accent transition-colors border border-border"
						onclick={prevTestimonial}
						aria-label="Previous testimonial"
					>
						<svg class="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<div class="flex items-center">
						{#each testimonials as _, index}
							<button
								class={`w-3 h-3 mx-1 rounded-full ${
									index === currentTestimonial
										? 'bg-primary'
										: 'bg-muted-foreground/20'
								}`}
								onclick={() => currentTestimonial = index}
								aria-label={`View testimonial ${index + 1}`}
							></button>
						{/each}
					</div>

					<button
						class="p-2 rounded-full bg-card shadow-md hover:bg-accent transition-colors border border-border"
						onclick={nextTestimonial}
						aria-label="Next testimonial"
					>
						<svg class="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		scroll-margin-top: 4rem;
	}
</style>