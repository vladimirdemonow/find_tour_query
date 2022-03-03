const express = require("express");
const tourRouter = require("./routes/tour-routes");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use("/api", tourRouter);

app.get("/", (req, res) => {
  res.send("NODEMON WORKS");
});

app.listen(PORT, () => {
  console.log("server: " + PORT);
});
