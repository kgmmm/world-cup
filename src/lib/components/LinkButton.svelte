<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let type = "normal";
  export let text = "Button";
  export let href = "";
  export let reload = false;

  function handleClick() {
    dispatch("Click");
  }
</script>

{#if reload}
  <a {href} sveltekit:reload class={type} on:click={handleClick}>
    {text}
  </a>
{:else}
  <a {href} sveltekit:prefetch class={type} on:click={handleClick}>
    {text}
  </a>
{/if}

<style>
  a {
    width: auto;
    height: 50px;
    padding-inline: var(--font-size-4);
    font-size: var(--font-size-5);
    line-height: 100%;
    text-decoration: none;
    border-radius: 50vw;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  a.normal {
    color: var(--color);
    background: var(--background);
    border: solid 1px var(--border);
    font-weight: 400;
  }
  a.normal:hover {
    border-color: var(--color);
  }

  a.cta {
    background: var(--accent);
    color: var(--background);
    font-weight: 500;
    border: none;
  }
</style>
