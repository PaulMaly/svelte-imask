<input
	use:mask={opts}
	{...attrs}
	{value}
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
	import mask from './action.js';

	export let value;

	let opts, attrs;
	$: {
		let	{ value, options, ...other } = $$props;
		attrs = other;
		opts = options;
	}

	function accept({ detail: mask }) {
		value = mask.unmaskedValue;
		mask.updateValue()
	}
</script>
