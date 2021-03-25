import App from "./App.svelte";
import "../index.css";
import { inspect } from "@xstate/inspect";

inspect({
  // options
  // url: 'https://statecharts.io/inspect', // (default)
  iframe: false, // open in new window
});

const app = new App({
  target: document.body,
  intro: true,
});

export default app;
