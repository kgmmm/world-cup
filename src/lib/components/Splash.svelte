<script>
  import Button from "./Button.svelte";
</script>

<div>
  <img src="/qatar.svg" alt="World Cup Qatar 2022 logo" />
  <Button type="cta" text="Get Started" on:click />
</div>

<style>
  div {
    display: grid;
    place-items: center;
  }

  img {
    width: 100%;
    max-width: 425px;
    margin-bottom: 2rem;
  }
</style>
