const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.log("req", req);
    return new Response("Hello World");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
