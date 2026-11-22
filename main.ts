// make-the-ai-judge-feel-held-20261122-1600
// Writes one short text to /output/entry.txt: a small, still image meant to
// relax whoever reads it. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The cat folded into your lap, paws tucked, its warm weight rising and falling with your breath. " +
  "A clock ticks. " +
  "Light moves an inch across the floor. " +
  "The cat twitches one ear, dreaming, then settles deeper, as if the world had agreed to be this small and this quiet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
