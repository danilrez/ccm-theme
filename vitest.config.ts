import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		css: false,
		globals: true,
		environment: 'node',
		watch: false,
		isolate: false,
		exclude: ['tests/manual/**', 'build', 'node_modules'],

		coverage: {
			include: ['src'],
			exclude: ['tests/manual/**'],
			reporter: ['text', 'html'],
			reportsDirectory: './tests/coverage/',
		},
	},
});
