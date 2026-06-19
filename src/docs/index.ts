import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const docsDir = __dirname;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadYamlFile(filename: string): any {
  const filePath = path.join(docsDir, filename);
  return yaml.load(fs.readFileSync(filePath, "utf-8"));
}

const openapi = loadYamlFile("openapi.yaml");

const routeFiles = ["auth.yaml", "rating.yaml", "user.yaml", "outing.yaml"];

for (const file of routeFiles) {
  const doc = loadYamlFile(file);
  if (doc.paths) {
    Object.assign(openapi.paths, doc.paths);
  }
}

export { openapi };
