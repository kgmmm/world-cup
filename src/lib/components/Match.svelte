<script>
  import { codeMap, progress, matches, matchWinners } from "$lib/stores";
  import { fly } from "svelte/transition";

  $: teams = $matches[$progress[0][$progress[1]]];

  $: teamOneCode = $codeMap.get(teams[0]).toLowerCase();
  $: teamTwoCode = $codeMap.get(teams[1]).toLowerCase();

  function setWinner(team) {
    $matchWinners[$progress[1] - 9] = team;

    for (let i = $progress[1] - 8; i < $matchWinners.length; i++) {
      $matchWinners[i] = "";
    }
  }
</script>

<div in:fly={{ x: 50, duration: 300 }}>
  <input
    type="radio"
    id="teamOne"
    name="match"
    checked={$matchWinners[$progress[1] - 9] === teams[0]}
  />
  <label for="teamOne" on:click={() => setWinner(teams[0])}>
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
  </label>

  <input
    type="radio"
    id="teamTwo"
    name="match"
    checked={$matchWinners[$progress[1] - 9] === teams[1]}
  />
  <label for="teamTwo" on:click={() => setWinner(teams[1])}>
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
  </label>
</div>

<style>
  div {
    margin: 1rem 0.5rem;
    padding: 0;
    width: 300px;
    list-style-type: none;
    border: solid 1px var(--border);
    border-radius: 3px;
    box-shadow: var(--shadow-large);
    overflow: hidden;
  }

  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + label {
    color: var(--background);
    background: var(--accent);
  }

  label {
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
  label:last-of-type {
    border: none;
  }

  label img {
    place-self: center;
    pointer-events: none;
    width: auto;
    height: var(--font-size-2);
  }

  label p {
    padding-left: 0.5rem;
  }
</style>
