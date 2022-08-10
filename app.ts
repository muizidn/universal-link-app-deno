#!/usr/bin/env -S deno run --allow-net=:8080 --allow-env=PORT

const DEFAULT_PORT = 8080;
const envPort = Deno.env.get("PORT");
const port = envPort ? Number(envPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

import { Application, helpers, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router.get("/users", (ctx) => {
  ctx.response.body = "GET HTTP method on user resource";
});

router.post("/users", (ctx) => {
  ctx.response.body = "POST HTTP method on user resource";
});

router.put("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `PUT HTTP method on user/${userId} resource`;
});

router.delete("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `PUT DELETE method on user/${userId} resource`;
});

router.get("/hello-world", (ctx) => {
    ctx.response.body = "This is my hello world";
});

router.get("/", (ctx) => {
  ctx.response.body = "This is Root";
});

app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port });
