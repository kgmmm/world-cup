<script>
  export let type = "leftArrow";
  export let text = "";
</script>

<button class:text={text != ""} class:accent={type === "rightArrowAccent"}>
  {#if type === "leftArrow"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-left-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
      />
    </svg>
  {:else if type === "rightArrow" || type === "rightArrowAccent"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-right-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
      />
    </svg>
  {:else if type === "share"}
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
  {/if}
  {#if text != ""}
    {text}
  {/if}
</button>

<style>
  button {
    width: auto;
    min-width: 50px;
    height: 50px;
    color: var(--color);
    background: var(--background);
    border: solid 1px var(--border);
    font-weight: 400;
    font-size: var(--font-size-5);
    line-height: 100%;
    border-radius: 50vw;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  button:hover {
    border-color: var(--color);
  }

  button svg {
    width: 1em;
    height: 1em;
    font-size: 24px;
    fill: currentColor;
  }

  button.text {
    padding-inline: var(--font-size-4);
    grid-template-columns: auto 1fr;
    gap: var(--font-size-5);
  }

  button.accent {
    border-color: var(--accent);
    color: var(--accent);
  }
  button.accent:hover {
    background: var(--accent);
    color: var(--background);
    border: none;
  }
</style>
