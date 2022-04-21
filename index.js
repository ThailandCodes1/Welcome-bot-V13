const Discord = require("discord.js");



const { Client, MessageEmbed, MessageButton , MessageActionRow, Collection } = require("discord.js")

const client = new Client({intents:32767});




const prefix = "+"


require("./handler")(client);
module.exports = client;

client.slashCommands = new Collection();
  
client.login(process.env.token)
