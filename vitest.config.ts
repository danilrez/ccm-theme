import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		css: false,
		globals: true,
		environment: 'node',
		watch: false,
		isolate: false,
		// Exclude the "manual" folder from being picked up as tests:
		exclude: ['tests/manual/**', 'build/tests/manual/**', 'node_modules/**/*'],

		coverage: {
			include: ['src/**'],
			exclude: ['tests/manual/**'], // this excludes them from coverage
			reporter: ['text', 'html'],
			reportsDirectory: './tests/coverage/',
		},
	},
});
