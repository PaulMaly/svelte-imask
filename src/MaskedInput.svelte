<input 
	use:mask={opts} 
	{...attrs} 
	on:input 
	on:change 
	on:search 
	on:focus 
	on:blur 
	on:invalid 
	on:accept 
	on:complete 
>

<script>
	import mask from './action.js';

	let opts, attrs;
	$: {
		let	{ options, ...other } = $$props;
		attrs = other;
		opts = options;
	}
</script>