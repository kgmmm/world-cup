<script>
  import {
    codeMap,
    groupA,
    groupB,
    groupC,
    groupD,
    groupE,
    groupF,
    groupG,
    groupH,
    matchWinners,
    progress,
  } from "$lib/stores";
  import Button from "./Button.svelte";
  import IconButton from "./IconButton.svelte";
  import { encode } from "$lib/share";
  import { goto } from "$app/navigation";

  $: code = $codeMap.get($matchWinners[$matchWinners.length - 1]).toLowerCase();

  $: shareCode = encode(
    [$groupA, $groupB, $groupC, $groupD, $groupE, $groupF, $groupG, $groupH],
    $matchWinners
  );
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
<Button text="See full prediction" on:Click={() => goto(`/${shareCode}`)} />
<br />
<IconButton text="Share your prediction" type="share" accent={true} />
<br />
<IconButton type="restart" on:Click={() => ($progress[1] = 0)} />

<style>
  img {
    margin: 3rem;
    margin-top: 2rem;
    margin-bottom: 0;
  }
  h1 {
    min-height: 12rem;
    color: var(--color);
    font-size: 4rem;
    text-align: center;
    line-height: 100%;
    display: grid;
    place-items: center;
  }
</style>
