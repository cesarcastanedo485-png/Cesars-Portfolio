/**
 * Removes Next output dirs that often get EPERM-locked or stale on Windows
 * (Defender, interrupted installs, old .next vs new distDir).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
for (const name of [".next", "build", path.join("node_modules", ".cache")]) {
  const target = path.join(root, name);
  try {
    fs.rmSync(target, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}
console.log("Cleaned .next, build, and node_modules/.cache (if present).");
