module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
	ignorePatterns: ['lib', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/ban-ts-comment': ['warn', { 'ts-expect-error': 'allow-with-description' }],
		'@typescript-eslint/no-explicit-any': ['warn'],
		'@typescript-eslint/no-unused-vars': ['warn'],
		'no-prototype-builtins': ['warn'],
	},
};
