<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import Services from '../lib/components/Services.svelte';
	import HowItWorks from '../lib/components/HowItWorks.svelte';
	import Portfolio from '../lib/components/Portfolio.svelte';
	import Testimonials from '../lib/components/Testimonials.svelte';
	import About from '../lib/components/About.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Header />
<div class="fade-in">
	<Hero />
</div>
<div class="fade-in delay-100">
	<Services />
</div>
<div class="fade-in delay-200">
	<HowItWorks />
</div>
<div class="fade-in delay-300">
	<Portfolio />
</div>
<div class="fade-in delay-400">
	<Testimonials />
</div>
<div class="fade-in delay-500">
	<About />
</div>
<div class="fade-in delay-600">
	<Contact />
</div>
<div class="fade-in delay-700">
	<Footer />
</div>

<style>
	/* Add any page-specific styles here */
</style>
