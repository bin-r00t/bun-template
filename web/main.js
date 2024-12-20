const url = "http://localhost:3000";
const imageurl = "http://localhost:3000/image";
const texturl = "http://localhost:3000/text";

console.log("start fetching....");
// 3. fetch text
fetch(texturl).then((response) => {
  let readBytes = 0;
  const section = document.createElement("section");
  const decoder = new TextDecoder();
  document.body.appendChild(section);
  const reader = response.body.getReader();
  return reader.read().then(function processBody({ done, value }) {
    if (done) {
      console.log("Stream complete");
      document.body.innerText = text;
      return;
    }
    const span = document.createElement("span");
    span.innerText = decoder.decode(value, { stream: true });
    section.appendChild(span);

    readBytes += value.length;
    console.log(`Received ${readBytes} bytes of data so far`);
    return reader.read().then(processBody);
  });
});

// 2. fetch image
// fetch(imageurl).then((response) => {
//   let readBytes = 0;
//   const reader = response.body.getReader();
//   let img = document.createElement("img");
//   document.body.appendChild(img);
//   let data = [];
//   return reader.read().then(function processBody({ done, value }) {
//     if (done) {
//       console.log("Stream complete");
//       const blob = new Blob(data, { type: "image/png" });
//       const url = URL.createObjectURL(blob);
//       img.src = url;
//       return;
//     }
//     data.push(value);
//     readBytes += value.length;
//     console.log(`Received ${readBytes} bytes of data so far, done: ${done}`);
//     return reader.read().then(processBody);
//   });
// });

// 1.fetch plain text
// fetch(url).then((response) => {
//   let readBytes = 0;
//   let text = "";
//   const reader = response.body.getReader();
//   return reader.read().then(function processBody({ done, value }) {
//     if (done) {
//       console.log("Stream complete");
//       //   document.body.innerText = text;
//       const ifr = document.createElement("iframe");
//       ifr.src = "data:text/plain;charset=utf-8," + text;
//       document.body.appendChild(ifr);
//       return;
//     }
//     text += new TextDecoder().decode(value);
//     readBytes += value.length;
//     console.log(`Received ${readBytes} bytes of data so far`);
//     return reader.read().then(processBody);
//   });
// });
