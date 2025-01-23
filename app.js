const express = require("express");
const app = express();

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static middleware, stylesheet
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);

//404 page
app.use((req,res) => {
  res.status(404).render('404');
})

app.listen(8080, () => {
    console.log(`My Mini Message Board app - listening on port 8080!`);
  });