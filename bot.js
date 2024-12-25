const { Bot } = require("grammy");
const token = "7981733970:AAGFcZR1GVV-K9cKwtNEcFPVV6IgKkyuEGQ";

const bot = new Bot(token); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

module.exports = bot;
