<script>
  import { progress } from "$lib/stores";
  import Splash from "$lib/components/Splash.svelte";

  function stepForward() {
    $progress[1] = $progress[1] + 1;
  }
  function stepBackward() {
    $progress[1] = $progress[1] - 1;
  }
</script>

{#if $progress[1] === 0}
  <Splash on:Click={stepForward} />
{/if}
