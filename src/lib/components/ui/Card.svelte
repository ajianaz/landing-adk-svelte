<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface CardProps extends HTMLAttributes<HTMLElement> {
		// Add any additional props here
	}

	let {
		class: customClass = '',
		children,
		...restProps
	}: CardProps & { children: import('svelte').Snippet } = $props();

	// Base classes
	let baseClasses = 'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md scale-in';

	// Combine all classes
	let classes = `${baseClasses} ${customClass}`;
</script>

<article class={classes} {...restProps}>
	{@render children?.()}
</article>

<style>
	article {
		transform: translateY(0);
		transition: all 0.3s ease;
		border-color: var(--border);
		background-color: var(--card);
		color: var(--card-foreground);
	}

	article:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	}
</style>