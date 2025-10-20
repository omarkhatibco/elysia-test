import { Elysia } from "elysia";
import { node } from "@elysiajs/node";

const app = new Elysia({ adapter: node() }).get("/", () => "Hello Elysia");

export default app;
