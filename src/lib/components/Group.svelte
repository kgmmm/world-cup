<script>
  import { get } from "svelte/store";
  import { codeMap, progress, groups, matchWinners } from "$lib/stores";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";

  $: teams = get(groups[$progress[1] - 1]);

  $: items = [
    { id: 1, title: teams[0][0] },
    { id: 2, title: teams[1][0] },
    { id: 3, title: teams[2][0] },
    { id: 4, title: teams[3][0] },
  ];

  const flipDurationMs = 200;

  function handleSort(e) {
    items = e.detail.items;
  }

  function handleFinal(e) {
    items = e.detail.items;
    groups[$progress[1] - 1].set([
      [e.detail.items[0].title, e.detail.items[0].id],
      [e.detail.items[1].title, e.detail.items[1].id],
      [e.detail.items[2].title, e.detail.items[2].id],
      [e.detail.items[3].title, e.detail.items[3].id],
    ]);
    matchWinners.set([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
  }
</script>

<section
  in:fly={{ x: 50, duration: 300 }}
  use:dndzone={{ items, flipDurationMs }}
  on:consider={handleSort}
  on:finalize={handleFinal}
>
  {#each items as team, index (team)}
    {@const code = $codeMap.get(team.title).toLowerCase()}
    <div animate:flip={{ duration: flipDurationMs }}>
      {#if code === "tbd"}
        <img
          src={`https://flagcdn.com/60x45/eu.png`}
          srcset={`https://flagcdn.com/120x90/eu.png 2x,
            https://flagcdn.com/180x135/eu.png 3x`}
          width="60"
          height="45"
          alt={team.title}
        />
      {:else}
        <img
          src={`https://flagcdn.com/60x45/${code}.png`}
          srcset={`https://flagcdn.com/120x90/${code}.png 2x,
            https://flagcdn.com/180x135/${code}.png 3x`}
          width="60"
          height="45"
          alt={team.title}
        />
      {/if}
      <p>{team.title}</p>
    </div>
  {/each}
</section>

<style>
  section {
    margin: 1rem 0.5rem;
    padding: 0;
    width: 300px;
    border: solid 1px var(--border);
    border-radius: 3px;
    box-shadow: var(--shadow-large);
    overflow: hidden;
  }

  div {
    padding: 1rem 0.5rem;
    border-bottom: solid 1px var(--border);
    background: var(--background);
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-template-columns: 4rem 1fr;
    font-size: var(--font-size-5);
    user-select: none;
    cursor: pointer;
    position: relative;
  }
  div:last-of-type {
    border: none;
  }
  div:nth-child(1) {
    background: var(--group-first);
  }
  div:nth-child(2) {
    background: var(--group-second);
  }

  div img {
    place-self: center;
    pointer-events: none;
    width: auto;
    height: var(--font-size-2);
  }

  div p {
    padding-left: 0.5rem;
  }
</style>
