import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
      <span style={{ display: "block" }}>
        <Link style={{ "text-decoration": "none" }} href="/boom">
          My boom page
        </Link>
      </span>
      <span style={{ display: "block" }}>
        <Link style={{ "text-decoration": "none" }} href="/user">
          My user page
        </Link>
      </span>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
