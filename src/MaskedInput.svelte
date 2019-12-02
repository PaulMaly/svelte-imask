<input
	use:imask={options}
	{...attrs}
	on:click
	on:keydown
	on:input
	on:change
	on:search
	on:focus
	on:blur
	on:invalid
	on:accept={accept}
	on:accept
	on:complete
>

<script>
	import { tick } from 'svelte';
	import imask from './action.js';

	export let value;

	$: ({ options, ...attrs } = $$props);

	function accept({ detail: imask }) {
		value = imask.unmaskedValue;
		tick().then(() => {
			imask.typedValue = value;
		});
	}
</script>
