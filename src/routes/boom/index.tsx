import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import styles from "./boom.css?inline";
import { collection, addDoc, setDoc, doc, Timestamp } from "firebase/firestore";

export const docData = {
  stringExample: "Hello world!",
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
  arrayExample: [5, true, "hello"],
  nullExample: null,
  objectExample: {
    a: 5,
    b: {
      nested: "foo",
    },
  },
};

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });
  return (
    <>
      <div id="hero">
        <div class="header">
          <h1>Firebase Form</h1>
          <form id="firebaseForm">
            <input placeholder="string example" />
            <input placeholder="boolean example" />
            <input placeholder="number example" />
            <input placeholder="date example" />
            <input placeholder="array example" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Boom Page",
};
