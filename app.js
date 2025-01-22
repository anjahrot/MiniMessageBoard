const express = require("express");
const app = express();

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

app.use('/new', newMessageRouter);
app.use('/', indexRouter);

app.listen(8080, () => {
    console.log(`My Mini Message Board app - listening on port 8080!`);
  });