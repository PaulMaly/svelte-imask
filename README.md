# svelte-imask

IMask input component and action for [Svelte 3](https://svelte.dev). [demo](https://svelte.dev/repl/de6a6dcc92ee43d19ad2274599ba34c8?version=3.12.1)

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
  <MaskedInput 
    bind:value={tel} 
    options={options} 
    on:complete={complete} 
    name="phone" 
    type="tel"
  />
</label>
 
<script>
  import { MaskedInput } from 'svelte-imask';

  const options = {
		mask: '+{7}(000)000-00-00'
  };
  
  let tel;

  function complete({ detail: imask }) {
    console.log('completed', imask);
  }
</script>
```

OR import `imask` action to get full control.

```html
<label>
  <input 
    use:imask={options} 
    on:accept={accept} 
    on:complete={complete} 
    name="phone" 
    type="tel"
  >
</label>
 
<script>
  import { imask } from 'svelte-imask';

  const options = {
		mask: '+{7}(000)000-00-00'
  };

  function accept({ detail: imask }) {
    console.log('accepted', imask);
  }

  function complete({ detail: imask }) {
    console.log('completed', imask);
  }
</script>
```

## Events

- `accept` - event fires on input when the value has changed (imask instance in `event.detail`)
- `complete` - event fires when the value is completely filled (imask instance in `event.detail`)

## License

MIT &copy; [PaulMaly](https://github.com/PaulMaly)
