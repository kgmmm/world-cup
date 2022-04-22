<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let type = "normal";
  export let text = "Button";

  function handleClick() {
    dispatch("Click");
  }
</script>

<button class={type} on:click={handleClick}>
  {text}
</button>

<style>
  button {
    width: auto;
    height: 50px;
    padding-inline: var(--font-size-4);
    font-size: var(--font-size-5);
    line-height: 100%;
    border-radius: 50vw;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  button.normal {
    color: var(--color);
    background: var(--background);
    border: solid 1px var(--border);
    font-weight: 400;
  }
  button.normal:hover {
    border-color: var(--color);
  }

  button.cta {
    background: var(--accent);
    color: var(--background);
    font-weight: 500;
    border: none;
  }
</style>
