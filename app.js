const { createServer } = require("node:http");
const next = require("next");

const port = Number(process.env.PORT || 3000);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => {
    handle(request, response);
  }).listen(port);
});
