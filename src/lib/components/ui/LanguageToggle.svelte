<script lang="ts">
	import { language, toggleLanguage } from '../../stores.js';
</script>

<button
	class="p-2 rounded-md hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary scale-in"
	on:click={toggleLanguage}
	aria-label="Toggle language"
>
	{#if $language === 'id'}
		<span class="text-lg">🇮🇩</span>
	{:else}
		<span class="text-lg">🇬🇧</span>
	{/if}
</button>

<style>
	button {
		transition: all 0.2s ease-in-out;
		transform: scale(1);
	}

	button:hover {
		transform: scale(1.1);
	}

	button:active {
		transform: scale(0.95);
	}
</style>