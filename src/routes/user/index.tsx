import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export interface userProps {
  step: number;
}

export default component$((props: userProps) => {
  const state = useStore({
    count: 0,
  });

  return (
    <>
      <span>Hello, {state.count}</span>
      <div>Times: {state.count}</div>
      <button
        onClick$={() => {
          // This will update the local state and cause a re-render.
          // Reactivity is at Qwik's core!
          state.count++;
        }}
      >
        Increment
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: "User Page",
};
