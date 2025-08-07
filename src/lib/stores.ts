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

// Language store - defaults to English
export const language = createLocalStorageStore<'id' | 'en'>('language', 'en');

// Toggle language between Indonesian and English
export function toggleLanguage() {
	language.update(current => current === 'id' ? 'en' : 'id');
}