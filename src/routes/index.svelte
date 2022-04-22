<script>
  import { progress, groups } from "$lib/stores";
  import Splash from "$lib/components/Splash.svelte";
  import Group from "$lib/components/Group.svelte";

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
  <Group teams={$groups[$progress[1] - 1]} />
{/if}
