const express = require("express");
const app = express();

const fallback = require("express-history-api-fallback");

const root = __dirname + "/public";

app.use(express.static(root));
app.use(fallback("index.html", { root: root }));

app.listen("8090", () => {
  console.log("Server start at 8090");
});
