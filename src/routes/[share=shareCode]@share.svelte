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
  export let groups = [];
  export let matchWinners = [];

  $: console.log(groups);
  $: console.log(matchWinners);
</script>
