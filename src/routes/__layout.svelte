<script>
  import { progress } from "$lib/stores";
  import NavBar from "$lib/components/NavBar.svelte";
  import Arrows from "$lib/components/Arrows.svelte";
</script>

<NavBar />
<div class="container">
  <slot />
  {#if $progress[1] > 0 && $progress[1] <= 23}
    <Arrows />
  {/if}
</div>

<style>
  div.container {
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 475px;
    display: grid;
    place-items: center;
  }
</style>
