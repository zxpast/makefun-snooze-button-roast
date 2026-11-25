// Snooze Button Roast — FINAL v2 (revisi dari draf v1)
// REVISI NYATA: draf v1 ("...charged me a late fee for sleeping in on the
// one morning I owned.") diganti total. Alasan: punchline "late fee" butuh
// seluruh klausa untuk mendarat dan "charged" kalah tajam dari "sold".
// v2 memakai kutipan langsung sebagai punchline (pola top-3 Laugh/Zero Use),
// twist di 3 kata terakhir ("I sold it."), verba transaksi yang lebih kuat,
// dan 31 karakter lebih pendek — satu napas, tiap kata layak.
// Writes one line roasting an alarm clock that rings at 6 AM on a Saturday.
// Deterministic, stdlib only, no network. Output: /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'My alarm rang at 6 AM on a Saturday and whispered, "Your day off? I sold it."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
