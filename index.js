const { createServer } = require("vite");
const server = require("express")();
const fs = require("fs");
const path = require("path");

async function main() {
  const vite = await createServer({ server: { middlewareMode: true } });
  server.use(vite.middlewares);

  server.get("*", async (req, res) => {
    let html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

    const { render } = await vite.ssrLoadModule("/src/entry-server.js");

    const appContent = await render();

    html = html.replace("<!-- ssr -->", appContent);

    res.end(html);
  });

  server.listen(8080);
}

main();
