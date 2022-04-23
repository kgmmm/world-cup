<script>
  import { get } from "svelte/store";
  import { codeMap, progress, groups, matchWinners } from "$lib/stores";
  import { flip } from "svelte/animate";

  $: teams = get(groups[$progress[1] - 1]);

  let hovering;

  function drop(event, target) {
    event.dataTransfer.dropEffect = "move";
    const start = parseInt(event.dataTransfer.getData("text/plain"));
    const newTracklist = teams;

    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }
    groups[$progress[1] - 1].set(newTracklist);
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
    hovering = null;
  }

  function dragStart(event, i) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    const start = i;
    event.dataTransfer.setData("text/plain", start);
  }
</script>

<ul>
  {#each teams as team, index (team)}
    {@const code = $codeMap.get(team).toLowerCase()}
    <li
      animate:flip={{ duration: 300 }}
      draggable={true}
      class:is-active={hovering === index}
      on:dragstart={(event) => dragStart(event, index)}
      on:drop|preventDefault={(event) => drop(event, index)}
      ondragover="return false"
      on:dragenter={() => (hovering = index)}
      on:dragend={() => (hovering = null)}
    >
      {#if code === "tbd"}
        <img
          src={`https://flagcdn.com/60x45/eu.png`}
          srcset={`https://flagcdn.com/120x90/eu.png 2x,
            https://flagcdn.com/180x135/eu.png 3x`}
          width="60"
          height="45"
          alt={team}
        />
      {:else}
        <img
          src={`https://flagcdn.com/60x45/${code}.png`}
          srcset={`https://flagcdn.com/120x90/${code}.png 2x,
            https://flagcdn.com/180x135/${code}.png 3x`}
          width="60"
          height="45"
          alt={team}
        />
      {/if}
      <p>{team}</p>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 1rem 0.5rem;
    padding: 0;
    width: 300px;
    list-style-type: none;
    border: solid 1px var(--border);
    border-radius: 3px;
    box-shadow: var(--shadow-large);
    overflow: hidden;
  }

  li {
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
  li:last-of-type {
    border: none;
  }
  li:nth-child(1) {
    background: var(--group-first);
  }
  li:nth-child(2) {
    background: var(--group-second);
  }

  li.is-active {
    color: var(--background);
    background: var(--accent);
  }

  li img {
    place-self: center;
    pointer-events: none;
    width: auto;
    height: var(--font-size-2);
  }

  li p {
    padding-left: 0.5rem;
  }
</style>
