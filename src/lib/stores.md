# Global Stores for Language and Theme Management

## Language Store

- Default language: 'id' (Indonesian)
- Supported languages: 'id' and 'en'
- Reactive store that updates all components when language changes

## Theme Store

- Default theme: 'light'
- Supported themes: 'light' and 'dark'
- Reactive store that updates all components when theme changes

## Implementation Plan

1. Create a writable store for language with 'id' as default
2. Create a writable store for theme with 'light' as default
3. Add helper functions to toggle language and theme
4. Implement localStorage persistence for user preferences
