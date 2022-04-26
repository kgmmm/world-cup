<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        error,
        message: error.message,
      },
    };
  }
</script>

<script>
  import LinkButton from "$lib/components/LinkButton.svelte";

  export let status;
  export let error;
  export let message;
</script>

<div>
  <h1>{status}</h1>
  <p>{message}</p>
  <h5>Seems like that share code was invalid</h5>

  <LinkButton text="Back to safety" href="/" />
</div>

<style>
  div {
    display: grid;
    place-items: center;
    text-align: center;
  }

  h1 {
    font-size: var(--font-size-1);
  }
  p {
    margin-block: 1rem;
  }
  h5 {
    font-size: var(--font-size-5);
  }
</style>
