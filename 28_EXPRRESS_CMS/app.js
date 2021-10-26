// 别的我们先不管, 我们先把路由给搞好

const express = require("express");
const app = express();

const ejs = require("ejs");
app.engine("html", ejs.__express);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("static"));


const admin = require("./routes/admin");
const index = require('./routes/index');
const api = require("./routes/api");

app.get("/", (req, res) => {
  res.send("这是首页")
});

app.use("/admin", admin);
app.use("/index", index);
app.use("/api", api);



app.listen(8081);
console.log("http://127.0.0.1:8081");
