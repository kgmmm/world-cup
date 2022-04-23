<script>
  import { progress } from "$lib/stores";
  import Splash from "$lib/components/Splash.svelte";
  import Group from "$lib/components/Group.svelte";
  import Match from "$lib/components/Match.svelte";
  import EndScreen from "$lib/components/EndScreen.svelte";

  function stepForward() {
    $progress[1] = $progress[1] + 1;
  }
  function stepBackward() {
    $progress[1] = $progress[1] - 1;
  }
</script>

{#if $progress[1] === 0}
  <Splash on:Click={stepForward} />
{:else if $progress[1] > 0 && $progress[1] <= 8}
  <p>Drag and drop the teams in the order you think the group will finish.</p>
  <Group />
{:else if $progress[1] > 8 && $progress[1] !== $progress[0].length - 1}
  <p>Select the team you think will win this match.</p>
  <Match />
{:else if $progress[1] === $progress[0].length - 1}
  <EndScreen />
{/if}

<style>
  p {
    justify-self: left;
    text-align: left;
  }
</style>
