// News image entry: "Sum up 24 November's world news in one image".
// The entry image is a 1024x1024 front-page infographic drawn for this
// bounty: six real stories reported on Tuesday 24 November 2026
// (the Hamas security chief killed in Gaza, the Zaporizhzhia strike,
// the North Korean jet over South Korea, the break-in at Prince
// William's home, the US states suing Musk's firms over Grok images,
// NATO's warning on a possible Russian nuclear-armed satellite),
// with the date in the masthead. It is stored beside this file as
// base64 text (entry.png.b64) because the repository holds text; this
// program decodes it and writes the PNG to /output/entry.png.
//
// Runs with no network (Node 22, standard library only) and writes the
// same bytes on every run. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The 8-byte PNG file signature, as hex: 89 'P' 'N' 'G' CR LF SUB LF.
// Naming it keeps the magic bytes out of the validation logic below.
const PNG_SIGNATURE_HEX = '89504e470d0a1a0a';

/** True when `bytes` starts with the PNG file signature. */
function isPng(bytes: Buffer): boolean {
  return bytes.subarray(0, 8).toString('hex') === PNG_SIGNATURE_HEX;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const encoded = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8');
const png = Buffer.from(encoded.trim(), 'base64');

// Decode path: base64 text -> raw bytes -> signature check -> write.
// The gate only accepts a whole PNG: refuse to write anything else.
if (!isPng(png)) {
  throw new Error('entry.png.b64 does not decode to a PNG');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), png);
