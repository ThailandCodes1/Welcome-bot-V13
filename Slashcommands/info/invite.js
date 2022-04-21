const { MessageEmbed , MessageButton, MessageActionRow } = require("discord.js") 
const client = require("../../index.js")
module.exports = {
  name:"invite",
  description:"➕ Get invite link of bot",
  cooldown:10,
  run : async(interaction, client,args) => {

    await interaction.deferReply()

    let embed = new MessageEmbed()
    
    .setColor("#4453F5")
    .setDescription(`Thank you \`${interaction.user.username}\` for choosing \`${client.user.username}\`
Click the button to get invite [link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) of the bot`)
    .setFooter({
      text:"ThailandCodes / Th | N A S S E R ♕︎"
    })

    let but = new MessageButton()
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    .setLabel("Click here")
    .setStyle("LINK")
    .setEmoji("🔗")


    let row = new MessageActionRow()
    .addComponents([but])

    
    await interaction.editReply({embeds:[embed], components:[row]})
  }
}
