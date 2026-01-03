const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 BODY PARSER (MOST IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", require("./routes/taskRoutes"));

module.exports = app;
