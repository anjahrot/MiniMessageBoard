const { Router } = require("express");

const indexRouter = Router();

const { messages } = require('../database/db');
const { postNewMessage, getMessageDetails } = require('../controllers/messageController');


indexRouter.get("/new", (req,res) => 
  res.render("form", {title: 'Form'})
);

indexRouter.post("/new", postNewMessage);

indexRouter.get("/", (req,res) => 
  res.render("index", {messages: messages})
);

indexRouter.get("/details/:messageId", getMessageDetails);




module.exports = indexRouter;