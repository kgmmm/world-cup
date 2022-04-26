<script>
  import { progress, matchWinners } from "$lib/stores";
  import IconButton from "./IconButton.svelte";
  import { fly } from "svelte/transition";

  function stepForward() {
    $progress[1] = $progress[1] + 1;
  }
  function stepBackward() {
    $progress[1] = $progress[1] - 1;
  }
</script>

<div in:fly={{ y: 20, duration: 250 }}>
  <IconButton type="leftArrow" on:click={stepBackward} />
  <IconButton
    type="rightArrow"
    accent={true}
    on:click={stepForward}
    disabled={$progress[1] > 8 &&
      $progress[1] !== $progress[0].length &&
      $matchWinners[$progress[1] - 9] === ""}
  />
  <p>{$progress[1]}/{$progress[0].length - 2}</p>
</div>

<style>
  div {
    margin-block: 1rem;
    width: 100%;
    max-width: 475px;
    padding-inline: 1rem;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    position: relative;
  }

  p {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 50%);
    user-select: none;
  }
</style>
