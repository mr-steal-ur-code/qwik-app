import { component$, useOnWindow, $ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "./global.css";
import config from "./config";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useOnWindow(
    "load",
    $((event) => {
      // Initialize Firebase
      const app = initializeApp(config.firebase);
      const db = getFirestore(app);
      document.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event);
      });
    })
  );

  return (
    <QwikCity>
      <head>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
        ></script>
        <script
          noModule
          src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
        />
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
