import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import styles from "./boom.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });
  return (
    <>
      <h1 class="header">BOOM</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Boom Page",
};
