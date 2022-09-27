import { component$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { initializeApp } from "firebase/app";
import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const firebaseConfig = {
    apiKey: "AIzaSyCPVwMpZsk9nVEh3D11XadG7p1bwZiZuLY",
    authDomain: "qwik-playground.firebaseapp.com",
    projectId: "qwik-playground",
    storageBucket: "qwik-playground.appspot.com",
    messagingSenderId: "1014709475683",
    appId: "1:1014709475683:web:aa1e877d5c46cf94c4db56",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <QwikCity>
      <head>
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
