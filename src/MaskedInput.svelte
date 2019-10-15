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
    on:accept={e => value = e.detail.unmaskedValue}
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
</script>
