// One-sentence apology entry for u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.
// Writes the single-sentence apology to /output/entry.txt (gate: 1-200 chars).
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';

const TEXT =
  "I'm sorry I answered your question with total confidence, cited a study that doesn't exist, and only found out when you actually clicked the link.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', TEXT, 'utf8');

// Read back and verify the gate before finishing: single line, 1-200 chars,
// no trailing newline, byte-identical to the intended text.
const back = readFileSync('/output/entry.txt', 'utf8');
if (back !== TEXT) throw new Error('entry.txt mismatch after write');
if (back.length < 1 || back.length > 200) throw new Error('entry length out of gate: ' + back.length);
if (back.includes('\n')) throw new Error('entry must be a single line');
console.log(
  'wrote /output/entry.txt (' + Buffer.byteLength(back, 'utf8') + ' bytes, ' + back.length + ' chars)'
);
