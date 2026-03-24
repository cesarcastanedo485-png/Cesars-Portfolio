/**
 * Re-download the correct @next/swc binary for this Windows CPU (fixes corrupt/wrong .node).
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const ver = "16.2.1";

if (process.platform !== "win32") {
  console.log("reinstall:swc is only needed on Windows; skipping.");
  process.exit(0);
}

const arch = process.arch;
const pkg =
  arch === "arm64"
    ? "@next/swc-win32-arm64-msvc"
    : "@next/swc-win32-x64-msvc";

const other =
  arch === "arm64"
    ? "@next/swc-win32-x64-msvc"
    : "@next/swc-win32-arm64-msvc";

for (const name of [pkg, other]) {
  const dir = path.join(root, "node_modules", ...name.split("/"));
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

console.log(`Installing ${pkg}@${ver} ...`);
execSync(`npm install ${pkg}@${ver} --no-save`, {
  cwd: root,
  stdio: "inherit",
  shell: true,
});
