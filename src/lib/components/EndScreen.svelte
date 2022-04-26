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
  import LinkButton from "./LinkButton.svelte";
  import IconButton from "./IconButton.svelte";
  import { encode } from "$lib/share";
  import ShareButton from "./ShareButton.svelte";
  import { scale, fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { ConfettiExplosion } from "svelte-confetti-explosion";

  $: code = $codeMap.get($matchWinners[$matchWinners.length - 1]).toLowerCase();

  $: shareCode = encode(
    [$groupA, $groupB, $groupC, $groupD, $groupE, $groupF, $groupG, $groupH],
    $matchWinners
  );
</script>

<ConfettiExplosion />
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
<h1 in:scale={{ duration: 550, easing: elasticOut }}>
  {$matchWinners[$matchWinners.length - 1]}
</h1>
<div in:fly={{ y: 20, duration: 250, delay: 350 }}>
  <LinkButton text="See full prediction" href={`/${shareCode}`} />
</div>
<br />
<div in:fly={{ y: 20, duration: 250, delay: 450 }}>
  <ShareButton />
</div>
<br />
<div in:fly={{ y: 20, duration: 250, delay: 550 }}>
  <IconButton type="restart" on:click={() => ($progress[1] = 0)} />
</div>

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
  div {
    display: grid;
    place-items: center;
    place-self: center;
  }
</style>
