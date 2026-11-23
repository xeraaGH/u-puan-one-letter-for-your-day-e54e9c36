// One Letter for Your Day — entry "K — Knackered"
//
// The entry is exactly one letter, A–Z, written to /output/entry.txt.
// K stands for "knackered": flat-out exhausted after a day spent
// grinding make.fun bounties from the first light to the last —
// a sharp, specific picture of a real day, not a vague mood.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const letter = "K";

// The gate requires exactly one character, A–Z, not whitespace.
// Refuse to write anything else rather than submit an invalid entry.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`entry letter must be a single A–Z character, got: ${JSON.stringify(letter)}`);
}

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, letter, "utf8");

// Verify what was actually written: exactly one byte, the letter itself.
const written = readFileSync(`${out}/entry.txt`, "utf8");
if (written !== letter) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(letter)}, got ${JSON.stringify(written)}`);
}
