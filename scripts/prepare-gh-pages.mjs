import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rootDir = process.cwd();
const distDir = join(rootDir, "dist");
const assetsDir = join(distDir, "assets");
const basePath = process.env.VERCEL ? "/" : process.env.GH_PAGES_BASE_PATH || "/Cervejaria/";

const assets = readdirSync(assetsDir);
const jsFile =
  assets.find((name) => /^index-[A-Za-z0-9_-]+\.js$/.test(name)) ??
  assets.find((name) => /^main-[A-Za-z0-9_-]+\.js$/.test(name));
const cssFile = assets.find((name) => /^styles-[A-Za-z0-9_-]+\.css$/.test(name));

if (!jsFile) {
  throw new Error("Could not find the production JS bundle in dist/assets");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rei do Malte</title>
    ${cssFile ? `<link rel="stylesheet" href="${basePath}assets/${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="${basePath}assets/${jsFile}"></script>
  </body>
</html>
`;

writeFileSync(join(distDir, "index.html"), html);
