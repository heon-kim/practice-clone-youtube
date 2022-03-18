import express from "express";

const PORT = 4000;
const app = express();

app.use((request, response, next) => {
  console.log("this is middleware");
  console.log(`we are going to: ${request.url}`);
  next();
});

app.use((req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed!");
  next();
});

app.get("/", (request, response) => {
  return response.send("this is response");
});

app.get("/protected", (req, res) => {
  return res.send("welcome to the private lounge");
});

app.listen(PORT, () =>
  console.log(`✅ server listening on port http://localhost:${PORT} 👍`)
);
