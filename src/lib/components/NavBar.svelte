<script>
  import { progress } from "$lib/stores";
</script>

<header>
  <div>
    <h1>{$progress[0][$progress[1]]}</h1>
  </div>
</header>

<style>
  header {
    width: 100%;
    background: var(--accent);
    box-shadow: var(--shadow-small);
  }

  div {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: 100%;
    max-width: 475px;
    height: 100%;
    display: grid;
    align-items: center;
  }

  div h1 {
    color: var(--background);
    font-size: var(--font-size-2);
    font-weight: 500;
  }
</style>
