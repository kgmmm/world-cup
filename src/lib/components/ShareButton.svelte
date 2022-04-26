<script>
  import { onDestroy } from "svelte";

  let copied = false;

  let clipboardTimer;

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    copied = true;
    if (clipboardTimer) clearTimeout(clipboardTimer);
    clipboardTimer = setTimeout(() => {
      copied = false;
    }, 3000);
  }

  onDestroy(() => {
    if (clipboardTimer) clearTimeout(clipboardTimer);
  });
</script>

<button on:click={handleClick}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-share"
    viewBox="0 0 16 16"
  >
    <path
      d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
    />
  </svg>
  Share prediction
  {#if copied === true}
    <p>Copied to clipboard</p>
  {/if}
</button>

<style>
  button {
    width: auto;
    padding-inline: var(--font-size-4);
    grid-template-columns: auto 1fr;
    gap: var(--font-size-5);
    min-width: 50px;
    height: 50px;
    color: var(--accent);
    background: var(--background);
    border: solid 1px var(--accent);
    font-weight: 400;
    font-size: var(--font-size-5);
    line-height: 100%;
    border-radius: 50vw;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  button:hover {
    background: var(--accent);
    color: var(--background);
    border: none;
  }

  button svg {
    width: 1em;
    height: 1em;
    font-size: 24px;
    fill: currentColor;
  }

  button p {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--accent);
    background: var(--background);
    border: solid 1px var(--accent);
    border-radius: 50vw;
  }
</style>
