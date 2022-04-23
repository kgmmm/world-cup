<script>
  import { codeMap, matchWinners, progress } from "$lib/stores";
  import Button from "./Button.svelte";
  import IconButton from "./IconButton.svelte";

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
<Button text="See full prediction" />
<br />
<IconButton text="Share your prediction" type="share" accent={true} />
<br />
<IconButton type="restart" on:Click={() => ($progress[1] = 0)} />

<style>
  img {
    margin: 3rem;
    margin-top: 2rem;
  }
  h1 {
    margin-bottom: 4rem;
    color: var(--color);
    font-size: 4rem;
    text-align: center;
    line-height: 100%;
  }
</style>
