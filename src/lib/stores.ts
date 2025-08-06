import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize store with value from localStorage or default
function createLocalStorageStore<T>(key: string, defaultValue: T) {
	const stored = browser ? localStorage.getItem(key) : null;
	const initial = stored ? JSON.parse(stored) : defaultValue;
	const store = writable<T>(initial);

	if (browser) {
		store.subscribe(value => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	}

	return store;
}

// Language store - defaults to Indonesian
export const language = createLocalStorageStore<'id' | 'en'>('language', 'id');

// Theme store - defaults to system preference or light
export const theme = createLocalStorageStore<'light' | 'dark'>('theme', 'light');

// Toggle language between Indonesian and English
export function toggleLanguage() {
	language.update(current => current === 'id' ? 'en' : 'id');
}

// Toggle theme between light and dark
export function toggleTheme() {
	theme.update(current => current === 'light' ? 'dark' : 'light');
}

// Set theme class on html element
if (browser) {
	// Initialize theme on client side
	const storedTheme = localStorage.getItem('theme');
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

	// Set initial theme class
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add(initialTheme);

	// Subscribe to theme changes
	theme.subscribe(current => {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(current);
	});
}