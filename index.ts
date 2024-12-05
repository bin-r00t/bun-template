import figlet from "figlet";
import fs from "fs";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.log("req", req);

    // push image
    if (req.url === "http://localhost:3000/image") {
      // i have an avatar.png in the same directory as this file
      const avatar = fs.readFileSync("./avatar.png");
      return new Response(avatar, {
        headers: {
          "content-type": "image/png",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // push text
    const bunchofText = `
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    Bun executes the script command in a subshell. It checks for the following shells in order, using the first one it finds: bash, sh, zsh.
    `
    if (req.url === "http://localhost:3000/text") {
      return new Response(bunchofText, {
        headers: {
          "content-type": "text/plain",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // original demo push
    const body = figlet.textSync("Bun!");

    // return response with no-cors setting:
    return new Response(body, {
      headers: {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
    });

    // return new Response(body, {
    //     headers: {
    //         "content-type": "text/plain",

    //     }
    // });
    // return new Response(fs.readdirSync('./', { withFileTypes: true }).map(d => d.name).join('\n'), {});
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
