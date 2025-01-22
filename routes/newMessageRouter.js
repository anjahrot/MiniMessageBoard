const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req,res) => res.send("New message!"));
newMessageRouter.post("/", (req, res) => res.send("Message sent!"));

module.exports = newMessageRouter;