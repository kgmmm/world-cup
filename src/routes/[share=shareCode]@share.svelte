<script context="module">
  import { decode } from "$lib/share";

  export async function load({ url }) {
    let shareCode = url.pathname.substring(1, url.pathname.length);

    let data = decode(shareCode);

    return {
      props: {
        groups: data[0],
        matchWinners: data[1],
      },
    };
  }
</script>

<script>
  import LinkButton from "$lib/components/LinkButton.svelte";
  import DeadGroup from "$lib/components/DeadGroup.svelte";
  import DeadMatch from "$lib/components/DeadMatch.svelte";
  import ShareButton from "$lib/components/ShareButton.svelte";
  import { codeMap } from "$lib/stores";

  export let groups = [];
  export let matchWinners = [];

  let finalWinner = matchWinners[14];

  let finalMatch = [[matchWinners[12], matchWinners[13]]];

  let semiFinals = [
    [matchWinners[8], matchWinners[9]],
    [matchWinners[10], matchWinners[11]],
  ];

  let quarterFinals = [
    [matchWinners[4], matchWinners[5]],
    [matchWinners[0], matchWinners[1]],
    [matchWinners[6], matchWinners[7]],
    [matchWinners[2], matchWinners[3]],
  ];

  let roundSixteen = [
    [groups[0][0][0], groups[1][1][0]],
    [groups[2][0][0], groups[3][1][0]],
    [groups[3][0][0], groups[2][1][0]],
    [groups[1][0][0], groups[0][1][0]],
    [groups[4][0][0], groups[5][1][0]],
    [groups[6][0][0], groups[7][1][0]],
    [groups[5][0][0], groups[4][1][0]],
    [groups[7][0][0], groups[6][1][0]],
  ];
</script>

<svelte:head>
  <title>World Cup Prediction</title>

  <meta property="og:title" content="World Cup Prediction" />
  <meta name="description" content="See the full World Cup prediction!" />
  <meta
    property="og:description"
    content="See the full World Cup prediction!"
  />

  <meta
    property="og:image"
    content={`https://wcpredictor.vercel.app/og/${$codeMap
      .get(finalWinner)
      .toLowerCase()}.png`}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:image"
    content={`https://wcpredictor.vercel.app/og/${$codeMap
      .get(finalWinner)
      .toLowerCase()}.png`}
  />

  <meta name="twitter:creator" content="@_kgmmm" />
  <meta name="twitter:title" content="World Cup Prediction" />
  <meta
    name="twitter:description"
    content="See the full World Cup prediction! Think you know better? Make your own prediction!"
  />
</svelte:head>

<main>
  <h1>Group Stage</h1>
  <section class="groups">
    {#each groups as group, index}
      {@const letter = String.fromCharCode(97 + index)}
      <div class="group">
        <h2>Group {letter}</h2>
        <DeadGroup teams={group} />
      </div>
    {/each}
  </section>

  <h1>Round of Sixteen</h1>
  <section class="roundSixteen">
    {#each roundSixteen as match, index}
      {@const winner = matchWinners[index]}
      <DeadMatch teams={match} {winner} />
    {/each}
  </section>

  <h1>Quarter Finals</h1>
  <section class="quarters">
    {#each quarterFinals as match, index}
      {@const winner = matchWinners[index + 8]}
      <DeadMatch teams={match} {winner} />
    {/each}
  </section>

  <h1>Semi Finals</h1>
  <section class="semis">
    {#each semiFinals as match, index}
      {@const winner = matchWinners[index + 12]}
      <DeadMatch teams={match} {winner} />
    {/each}
  </section>

  <h1>Final</h1>
  <section class="final">
    {#each finalMatch as match, index}
      {@const winner = matchWinners[index + 14]}
      <DeadMatch teams={match} {winner} />
    {/each}
  </section>

  <section class="cta">
    <ShareButton />
    <p>Think you know better?</p>
    <LinkButton text="Make a prediction" type="cta" href="/" reload={true} />
  </section>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0rem 1rem;
    width: 100%;
    max-width: calc(316px * 4 + 2rem);
  }

  h1 {
    margin-top: 2rem;
    font-size: var(--font-size-2);
    min-height: calc(var(--font-size-1) * 2);
    text-align: center;
  }

  h2 {
    text-transform: capitalize;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  section.cta {
    margin: 4rem auto;
    display: grid;
    place-items: center;
  }
  section.cta p {
    margin-top: 1rem;
  }

  div.group h2 {
    margin-left: 1rem;
    font-weight: 400;
    line-height: 100%;
    color: var(--color);
    opacity: 50%;
  }
</style>
