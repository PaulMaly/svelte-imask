# svelte-imask

IMask input component and action for [Svelte 3](https://svelte.dev).

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-imask
```

## Parameters

Any options of imask can be passed to action as options or MaskedComponent via `options` prop.

Then import `MaskedInput` component to your Svelte app. `options` prop will be passed to `imask` action. Any other props will be assigned to input element itself.

```html
<label>
	<MaskedInput name="phone" type="tel" options={{ mask }} on:accept={accept} />
</label>
 
<script>
  import { MaskedInput } from 'svelte-imask';

  let mask = '+{7}(000)000-00-00';

  function accept() {
    console.log('accepted');
  }
</script>
```

OR import `imask` action to get full control.

```html
<label>
	<input use:imask={{ mask }} name="phone" type="tel" on:accept={accept}>
</label>
 
<script>
  import { imask } from 'svelte-imask';

  let mask = '+{7}(000)000-00-00';

  function accept() {
    console.log('accepted');
  }
</script>
```

## Events

- `accept` - event fired on input when mask value has changed
- `complete` - event fired when the value is completely filled

## License

MIT &copy; [PaulMaly](https://github.com/PaulMaly)