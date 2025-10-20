// src/index.ts
import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
var app = new Elysia({ adapter: node(), prefix: "/api" }).get("/", () => "Hello Elysia").listen(3e3, ({ hostname, port }) => {
  console.log(`\u{1F98A} Elysia is running at ${hostname}:${port}`);
});
var index_default = app;
export {
  index_default as default
};
//# sourceMappingURL=index.js.map