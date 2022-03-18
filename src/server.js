import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

app.use(morgan("dev"));
app.get("/", (request, response) => {
  return response.send("this is response");
});

app.get("/protected", (req, res) => {
  return res.send("welcome to the private lounge");
});

app.listen(PORT, () =>
  console.log(`✅ server listening on port http://localhost:${PORT} 👍`)
);
