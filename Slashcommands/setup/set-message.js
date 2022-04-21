const db = require("pro.db")
module.exports = {
  name:"set-message",
  description:"Welcome message",
  cooldown:10,
  userPerms:["ADMINISTRATOR"],
  options:[
    {
      name:"message",
      description:"The message",
      type:"STRING",
      required:true
    },
  ],
  run: async(interaction, client, args) => {
    await interaction.deferReply()

    let Msg = interaction.options.getString("message")

    

    

    await db.set(`msg_${interaction.guild.id}`,Msg)

    await interaction.editReply({content:`✅ | Done\n📄 | Message : ${Msg}`})
  }
}
