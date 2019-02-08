import svelte from 'rollup-plugin-svelte';
import pkg from './package.json';

const name = pkg.name
                .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
                .replace(/^\w/, m => m.toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
		svelte()
	]
};