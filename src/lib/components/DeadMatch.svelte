<script>
  import { codeMap, progress, matches, matchWinners } from "$lib/stores";

  export let teams = [];
  export let winner = "";

  $: teamOneCode = $codeMap.get(teams[0]).toLowerCase();
  $: teamTwoCode = $codeMap.get(teams[1]).toLowerCase();
</script>

<div class="match">
  <div class="team" class:winner={teams[0] === winner}>
    {#if teamOneCode === "tbd"}
      <img
        src={`https://flagcdn.com/60x45/eu.png`}
        srcset={`https://flagcdn.com/120x90/eu.png 2x,
        https://flagcdn.com/180x135/eu.png 3x`}
        width="60"
        height="45"
        alt={teams[0]}
      />
    {:else}
      <img
        src={`https://flagcdn.com/60x45/${teamOneCode}.png`}
        srcset={`https://flagcdn.com/120x90/${teamOneCode}.png 2x,
        https://flagcdn.com/180x135/${teamOneCode}.png 3x`}
        width="60"
        height="45"
        alt={teams[0]}
      />
    {/if}
    <p>{teams[0]}</p>
  </div>

  <div class="team" class:winner={teams[1] === winner}>
    {#if teamTwoCode === "tbd"}
      <img
        src={`https://flagcdn.com/60x45/eu.png`}
        srcset={`https://flagcdn.com/120x90/eu.png 2x,
        https://flagcdn.com/180x135/eu.png 3x`}
        width="60"
        height="45"
        alt={teams[1]}
      />
    {:else}
      <img
        src={`https://flagcdn.com/60x45/${teamTwoCode}.png`}
        srcset={`https://flagcdn.com/120x90/${teamTwoCode}.png 2x,
        https://flagcdn.com/180x135/${teamTwoCode}.png 3x`}
        width="60"
        height="45"
        alt={teams[1]}
      />
    {/if}
    <p>{teams[1]}</p>
  </div>
</div>

<style>
  div.match {
    margin: 1rem 0.5rem;
    padding: 0;
    width: 300px;
    list-style-type: none;
    border: solid 1px var(--border);
    border-radius: 3px;
    box-shadow: var(--shadow-large);
    overflow: hidden;
  }

  div.team {
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
  div.team:last-of-type {
    border: none;
  }

  div.team.winner {
    background: var(--group-first);
  }

  div.team img {
    place-self: center;
    pointer-events: none;
    width: auto;
    height: var(--font-size-2);
  }

  div.team p {
    padding-left: 0.5rem;
  }
</style>
