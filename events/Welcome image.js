const client = require("../index.js")
const editor = require("editor-canvas");
const Canvas = require("canvas") 
const db = require("pro.db")
const Discord = require("discord.js")
client.on("guildMemberAdd", async member => {
  await Canvas.registerFont("PTSerif-Regular.ttf", { family: "PTSerif-Regular" });
const canvas = Canvas.createCanvas(500,288);//ابعاد الصورة
        const context = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://media.discordapp.net/attachments/723270561433911376/799715344423714816/5-7.png');//الصورة
        context.drawImage(background, 0, 0, canvas.width, canvas.height);



        
context.font = '30px PTSerif-Regular';
		context.fillStyle = '#ffffff';
		context.fillText(`Welcome To\nOur Server`, canvas.width / 1.5, canvas.height / 1.5);

        
        var avatar = await editor.drawCircle({ image: member.user.displayAvatarURL({ format: "jpg",size:1024 }) })
avatar = await Canvas.loadImage(avatar);
context.drawImage(avatar, 10,10,255,255); 
////////////////////image, width, height,image-width,image-heigth
       

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');
let channel = member.guild.channels.cache.get(await db.get(`ch_${member.guild.id}`))
   
if (channel) {
        channel.send({ files: [attachment] });
}
}) 
