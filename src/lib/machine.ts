import { createMachine } from "xstate";

export const createNextButtonMachine = (delay, onSuccess) =>
  createMachine(
    {
      id: "nextMachine",
      initial: "idle",
      states: {
        //used to trigger the transition
        idle: {
          after: {
            0: "auto",
          },
        },
        auto: {
          after: {
            [delay]: "success",
          },
          on: {
            MOUSE_MOVE: "manual",
          },
        },
        manual: {
          on: {
            CLICK: "success",
          },
        },
        success: {
          entry: "onSuccess",
          on: {
            RESET: "idle",
          },
        },
      },
    },
    {
      actions: {
        onSuccess,
      },
    }
  );
