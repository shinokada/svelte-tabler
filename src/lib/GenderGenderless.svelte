<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'gender genderless';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={$$props.class}
  width={size}
  height={size}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <desc>Download more icon variants from https://tabler-icons.io/i/gender-genderless</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <circle transform="matrix(1 0 0 -1 0 30)" cx="12" cy="15" r="5" />
  <path d="M12 10v-7" />
  <path d="M7 15h10" />
</svg>
