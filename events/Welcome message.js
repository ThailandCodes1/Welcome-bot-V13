const client = require("../index.js")
const db = require("pro.db")
var { inviteTracker } = require("discord-inviter")
  tracker = new inviteTracker(client);



tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
    

  if (!invite.count) invite.count = 0; 

  let channel = member.guild.channels.cache.get(await db.get(`ch_${member.guild.id}`))
  
    let Msg = await db.get(`msg_${member.guild.id}`) 

  if (!Msg) Msg = `
>>> \`•\` Welcome ${member} To **${member.guild.name}**\n\`•\` Members Count : __**${member.guild.memberCount}**__\n\`•\` Invited By : ${inviter}\n\`•\` invites : ${invite.count}
`


  
  // send welcome message
  setTimeout(()=> {
    
  
  if (channel) {
   Msg = Msg.replace("[inviter]",`${inviter}`)
   Msg = Msg.replace("[user]",`${member}`)
   Msg = Msg.replace("[userUsername]",`${member.user.username}`)
   Msg = Msg.replace("[inviterUsername]",`${inviter.username}`)
   Msg = Msg.replace("[invites]",`${invite.count}`)
   Msg = Msg.replace("[memberCount]",`${member.guild.memberCount}`)
   Msg = Msg.replace("[guildName]",`${member.guild.name}`)
   Msg = Msg.replace("[createdAt]",`<t:${parseInt(member.user.createdAt / 1000)}:R>`, true)
channel.send({content:Msg});
  }
  },2000)
});  

tracker.on("error", (g,err) => { console.log(err) })

