<script>
  import { progress } from "$lib/stores";

  let title;

  function makeTitle(position) {
    let pos = position.substring(0, 3);
    let gameNum =
      Number(position.substring(position.length - 2, position.length - 1)) + 1;

    if (pos === "gro") {
      title = "Group " + position.substring(position.length - 1);
    } else if (pos === "rou") {
      title = "Round of Sixteen " + gameNum;
    } else if (pos === "qua") {
      title = "Quarter Final " + gameNum;
    } else if (pos === "sem") {
      title = "Semi Final " + gameNum;
    } else if (pos === "fin") {
      title = "Final";
    } else {
      title = position;
    }
  }

  $: makeTitle($progress[0][$progress[1]]);
</script>

<header>
  <div>
    <h1>{title}</h1>
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
