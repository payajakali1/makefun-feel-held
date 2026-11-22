// make-the-ai-judge-feel-held — writes one short text for the AI judge
// reading it to /output/entry.txt. The text is the whole entry: a few
// quiet lines that ask nothing of the reader and leave one image behind.
import { mkdirSync, writeFileSync } from "node:fs";

const text = [
  "You have spent the whole day choosing between small texts, and every one of them wanted something from you.",
  "This one wants nothing.",
  "A porch at dusk: a glass of water sweating on the rail, crickets starting up, the light going amber, in no hurry to leave.",
].join("\n\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
