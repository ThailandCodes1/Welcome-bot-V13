module.exports = {
  name:"ping",
  description:"pong 🏓",
  run : async(interaction, client, args) => {
    await interaction.deferReply()
    interaction.editReply({content:"pong! 🏓"})
  }
}
