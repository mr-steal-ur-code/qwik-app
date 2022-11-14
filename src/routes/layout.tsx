import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";
import Test from "../components/test/test";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
});
