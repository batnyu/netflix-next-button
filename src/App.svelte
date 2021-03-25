<script lang="ts">
  import NextButton from "./lib/NextButton.svelte";
  let success = false;

  function handleSuccess(event) {
    success = true;
  }
</script>

<main class="bg-gray-800 h-screen flex flex-col items-center p-32">
  {#if !success}
    <NextButton delay={5000} on:success={handleSuccess} />
  {/if}
  {#if success}
    <div class="text-white font-semibold mt-4">Next episode launched!</div>
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
