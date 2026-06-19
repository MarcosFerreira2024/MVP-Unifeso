import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const srcDir = join(__dirname, "src");

function processFile(filePath) {
  let content = readFileSync(filePath, "utf8");
  const original = content;

  content = content.replace(
    /(from\s+['"])(\.\.?\/[^'"]+?)(['"])/g,
    (match, prefix, path, suffix) => {
      if (path.endsWith(".js") || path.endsWith(".json")) return match;
      return prefix + path + ".js" + suffix;
    }
  );

  content = content.replace(
    /(require\s*\(\s*['"])(\.\.?\/[^'"]+?)(['"]\s*\))/g,
    (match, prefix, path, suffix) => {
      if (path.endsWith(".js") || path.endsWith(".json")) return match;
      return prefix + path + ".js" + suffix;
    }
  );

  if (content !== original) {
    writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

function walkDir(dir) {
  let changed = 0;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== "generated") {
      changed += walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".ts") && !entry.name.endsWith(".d.ts")) {
      if (processFile(fullPath)) {
        console.log("  updated:", fullPath.slice(srcDir.length - 3));
        changed++;
      }
    }
  }
  return changed;
}

console.log("Adding .js extensions to relative imports...");
const count = walkDir(srcDir);
console.log(`Done. ${count} files updated.`);
