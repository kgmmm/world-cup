<script>
  export let title = "World Cup Predictor";
</script>

<header>
  <div>
    <h1>{title}</h1>
  </div>
</header>

<style>
  header {
    width: 100%;
    height: 65px;
    background: var(--accent);
    box-shadow: var(--shadow-small);
  }

  div {
    margin: 0 auto;
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
