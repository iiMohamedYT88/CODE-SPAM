﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527817484313821185")
setInterval(function() {
channel.send(`احب البطاطس احب البطاطس احب البطاطس`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
