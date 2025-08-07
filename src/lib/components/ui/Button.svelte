<script lang="ts">
	type ButtonVariant = 'primary' | 'secondary' | 'outline';
	type ButtonSize = 'sm' | 'md' | 'lg';

	let {
		variant = 'primary',
		size = 'md',
		loading = false,
		href,
		class: customClass = '',
		disabled = false,
		children,
		...restProps
	}: {
		variant?: ButtonVariant;
		size?: ButtonSize;
		loading?: boolean;
		href?: string;
		class?: string;
		disabled?: boolean;
		children: import('svelte').Snippet;
		[key: string]: any;
	} = $props();

	// Base classes
	let baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none scale-in hover:scale-105';

	// Variant classes
	let variantClasses = {
		primary: 'bg-gradient-to-r from-purple-500 to-teal-500 text-white hover:from-purple-600 hover:to-teal-600 shadow-md hover:shadow-lg',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
	}[variant];

	// Size classes
	let sizeClasses = {
		sm: 'text-xs px-3 py-1.5',
		md: 'text-sm px-4 py-2',
		lg: 'text-base px-6 py-3'
	}[size];

	// Loading classes
	let loadingClasses = loading ? 'opacity-75 cursor-not-allowed' : '';

	// Combine all classes
	let classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${loadingClasses} ${customClass}`;
</script>

{#if href}
	<a href={href} class={classes} {...restProps}>
		{#if loading}
			<svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
		{/if}
		{@render children?.()}
	</a>
{:else}
	<button
		class={classes}
		disabled={disabled || loading}
		{...restProps}
	>
		{#if loading}
			<svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
		{/if}
		{@render children?.()}
	</button>
{/if}

<style>
	a, button {
		transition: all 0.2s ease-in-out;
		text-decoration: none;
		transform: scale(1);
	}

	a:hover, button:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	a:active, button:active {
		transform: scale(0.98);
	}
</style>