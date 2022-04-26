<script>
  import { codeMap } from "$lib/stores";

  export let teams = [];
</script>

<ul>
  {#each teams as team, index (team)}
    {@const code = $codeMap.get(team[0]).toLowerCase()}
    <li>
      {#if code === "tbd"}
        <img
          src={`https://flagcdn.com/60x45/eu.png`}
          srcset={`https://flagcdn.com/120x90/eu.png 2x,
            https://flagcdn.com/180x135/eu.png 3x`}
          width="60"
          height="45"
          alt={team[0]}
        />
      {:else}
        <img
          src={`https://flagcdn.com/60x45/${code}.png`}
          srcset={`https://flagcdn.com/120x90/${code}.png 2x,
            https://flagcdn.com/180x135/${code}.png 3x`}
          width="60"
          height="45"
          alt={team[0]}
        />
      {/if}
      <p>{team[0]}</p>
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
