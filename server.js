const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "homepage.html"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


console.log(process.env.PORT)
app.listen(process.env.PORT || 4000, () => console.log("Server running..."));