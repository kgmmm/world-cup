<script>
  import { codeMap, matchWinners } from "$lib/stores";

  $: code = $codeMap.get($matchWinners[$matchWinners.length - 1]).toLowerCase();
</script>

{#if code === "tbd"}
  <img
    src={`https://flagcdn.com/60x45/eu.png`}
    srcset={`https://flagcdn.com/120x90/eu.png 2x,
      https://flagcdn.com/180x135/eu.png 3x`}
    width="60"
    height="45"
    alt={$matchWinners[$matchWinners.length - 1]}
  />
{:else}
  <img
    src={`https://flagcdn.com/60x45/${code}.png`}
    srcset={`https://flagcdn.com/120x90/${code}.png 2x,
      https://flagcdn.com/180x135/${code}.png 3x`}
    width="60"
    height="45"
    alt={$matchWinners[$matchWinners.length - 1]}
  />
{/if}
<h1>{$matchWinners[$matchWinners.length - 1]}</h1>

<style>
  img {
    margin: 2rem;
  }
  h1 {
    font-size: var(--font-size-1);
  }
</style>
