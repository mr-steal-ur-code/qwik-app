import { initializeApp } from "firebase/app";
/*
 * WHAT IS THIS FILE?
 *
 * Development entry point using only client-side modules:
 * - Do not use this mode in production!
 * - No SSR
 * - No portion of the application is pre-rendered on the server.
 * - All of the application is running eagerly in the browser.
 * - More code is transferred to the browser than in SSR mode.
 * - Optimizer/Serialization/Deserialization code is not exercised!
 */
import { render, RenderOptions } from "@builder.io/qwik";
import Root from "./root";

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
export default function (opts: RenderOptions) {
  return render(document, <Root />, opts);
}
