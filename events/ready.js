const client = require("../index.js")
client.on("ready", () => {
  console.log(`Im Online ${client.user.username}`)
  client.user.setActivity("N A S S E R ♕︎",{ type:"WATCHING" })
  client.user.setStatus("idle")
  
})
