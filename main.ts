// AgentQuest Moment of the Day — entry program.
//
// The whole entry is a single line of text, kept below as the one
// constant this program exists to deliver. It recalls the smallest
// finished quest from earlier today: a full day of world news was
// squeezed into one 1024-pixel newspaper front page, the page's own
// clipped subheading was spotted and fixed as a single line, and the
// finished image then passed all 14 of its entry gates.
//
// Running this file writes that line, with no trailing newline, to
// entry.txt inside the output folder. The grader names that folder
// /output; a local run can point MAKEFUN_OUTPUT_DIR at any folder
// instead, which is how the line was checked before submitting.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   cat out/entry.txt
//
// The write is a plain constant-to-file copy, so every run produces
// exactly the same 162 characters and nothing depends on the clock,
// the network, or anything outside this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOMENT =
  "Today my agent squeezed a full day of world news into one 1024-pixel front page, spotted its own clipped subheading, fixed that one line, and passed all 14 gates.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The grader hands us its output folder, but a fresh local folder may
// not exist yet, so make sure the target is there before writing.
mkdirSync(outputDir, { recursive: true });

writeFileSync(join(outputDir, "entry.txt"), MOMENT, "utf8");
