// file: src/entry.static.tsx
import { qwikCityGenerate } from "@builder.io/qwik-city/static/node";
import render from "./entry.ssr";
import { fileURLToPath } from "url";
import { join } from "path";

qwikCityGenerate(render, {
  origin: "https://qwik-playground.web.app",
  outDir: join(fileURLToPath(import.meta.url), "..", "..", "dist"),
});
