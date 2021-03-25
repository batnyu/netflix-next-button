<script lang="ts">
  import { interpret } from "xstate";
  import { createNextButtonMachine } from "./machine";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const DELAY = 5000;

  const nextButtonMachine = createNextButtonMachine(DELAY, () => {
    console.log("SUCCESS!");
    dispatch("success");
  });
  const nextButtonService = interpret(nextButtonMachine, {
    devTools: true,
  }).start();
</script>

<svelte:window on:mousemove={() => nextButtonService.send("MOUSE_MOVE")} />
<button
  class={`rounded-md ${
    $nextButtonService.matches("manual") ||
    $nextButtonService.matches("success")
      ? "bg-white"
      : "bg-gray-400"
  } px-4 py-2 font-semibold relative overflow-hidden z-0`}
  on:click={() => nextButtonService.send("CLICK")}
>
  <div>Next episode</div>
  <div
    id="inner"
    class="absolute w-full top-0 bottom-0 right-full bg-white"
    style={$nextButtonService.matches("auto") &&
      `transition: ${DELAY}ms linear 0s; transform: translate(100%)`}
  />
</button>

<style>
  #inner {
    z-index: -1;
  }
</style>
