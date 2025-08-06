<script lang="ts">
	import { language, toggleLanguage } from '../../stores.js';
</script>

<button
	class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
	}

	button:hover {
		transform: scale(1.1);
	}
</style>