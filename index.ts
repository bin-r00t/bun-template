import dotenv from "dotenv";
dotenv.config();

const sparkApi = "https://spark-api-open.xf-yun.com/v1/chat/completions";
const { APISecret, APIKey, APIUrl, APIPassword } = process.env;

const sendMsg = (message: string) => {
  /** headers */
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${APIPassword}`,
  };
  /** payload */
  const payload = {
    user: "user_234fc3421",
    model: "generalv3",
    messages: [{ role: "user", content: message }],
    stream: true,
  };
  /** send request */
  return fetch(sparkApi, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  }).then((response) => {
    const decoder = new TextDecoder();
    const reader = response.body?.getReader();
    if (!reader) {
      return;
    }
    const handleReadStream: (
      value: Bun.ReadableStreamDefaultReadResult<Uint8Array>
    ) => void | PromiseLike<void> = ({ done, value }) => {
      if (done) {
        console.log("Stream complete");
        return;
      }
      const v = decoder.decode(value, { stream: true });
      console.log("[===>]", v);
      return reader.read().then(handleReadStream);
    };
    return reader.read().then(handleReadStream);
  });
};
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello World", {
      headers: {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
