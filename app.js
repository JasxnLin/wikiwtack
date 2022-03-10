const express = require("express");
const morgan = require("morgan");
const routes = require('./routes/wiki');
const app = express();
const {db, pages, users} = require("./models")
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
// parses json bodies
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use('/wiki', routes);

app.get("/", (req, res) => {
  res.redirect(`/wiki`);
})

const PORT = 1338;
app.listen(PORT, async () => {
  await db.sync({force: true})
});
