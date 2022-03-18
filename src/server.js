import express from "express";

const PORT = 4000;
const app = express();

app.use((request, response, next) => {
  console.log("this is middleware");
  console.log(`we are going to: ${request.url}`);
  next();
});

app.get("/", (request, response) => {
  return response.send("this is response");
});

app.listen(PORT, () =>
  console.log(`✅ server listening on port http://localhost:${PORT} 👍`)
);
