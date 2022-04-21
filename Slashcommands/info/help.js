const { MessageEmbed } = require("discord.js")
module.exports = {
  name:"help",
  description:"help command 🙂",
  options:[
    {
      name:"command",
      description:"ThailandCodes / Th | N A S S E R ♕︎",
      type:"STRING",
      choices:[
        {
          name:"set-message",
          value:"sm"
        },
      ],
    },
  ],

  run : async(interaction, client,args) => {
    await interaction.deferReply()


    let choice = interaction.options.getString("command")

    if (choice === "sm") {
      interaction.editReply({content:">>> \`•\` Usage : /set-message [join message]\n\`•\` Join message : The message bot should send when a member join server\n\`•\` The Available Variables You Can Used in The Message :\n \`\`\`\n[inviter] : Mention the inviter\n[inviterUsername] : Get the inviter username only\n[invites] : Get the invites count for inviter \n[user] : Mention the user \n[userUsername] : Get the user username only\n[memberCount] : Get the guild members count \n[guildName] : Get the guild name \n[createdAt] : Get the user created at time \n\`\`\`"})
    }

    if (!choice) {
    let embed = new MessageEmbed()
    .setDescription(`/set-channel : To select the welcome channel\n/set-message : To select the message of welcome\n/ping : pong!`)
      .setAuthor({
        name: interaction.member.user.tag, iconURL: interaction.member.user.displayAvatarURL({dynamic:true})
                 })
      .setThumbnail(interaction.guild.iconURL({dynamic:true}))
        .setFooter({
          text:"ThailandCodes © / Th | N A S S E R",
          iconURL: interaction.guild.iconURL({dynamic:true})
        })
      .setColor("#4453F5")

    interaction.editReply({embeds:[embed]})
    }
  }
}
