const express = require("express");
const { webhookCallback } = require("grammy");
const bot = require("./bot.js");


const app = express(); // or whatever you're using
app.use(express.json()); // parse the JSON request body

// "express" is also used as default if no argument is given.
app.use(webhookCallback(bot, "express"));


app.listen(4444, ()=>
{
  console.log("Server running on port 4444")
})