const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const path = require('path');

module.exports = welcome => {
    const welcomeChannelID = '781106068264058890';
    const ruleChannelID = '781143942262554644';
    // 781247183789228072 //ID test channel
    // 781106068264058890 // ID welcome channel

    welcome.on('guildMemberAdd', async (member) => {
        //Los canales del server
        const welcomeChannel = member.guild.channels.cache.get(welcomeChannelID);
        const ruleChannel = member.guild.channels.cache.get(ruleChannelID);

        //Construccion del mensaje
        const message = `🏳️‍🌈 Bienvenido a ˗ˏˋ ɢᴏᴏᴅ ᴠɪʙᴇꜱ ´ˎ˗ ${member.user} ! Puedes ver las reglas en ${ruleChannel.toString()} 🏳️‍🌈`;

        //Construccion del canvas
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        
        //Construccion de la imagen de perfil del usuario que acaba de entrar
        const profilePic = await Canvas.loadImage(member.user.displayAvatarURL({format: 'png'}));
        let x = canvas.width / 2 - 50; //300
        let y = 25 //25
        ctx.drawImage(profilePic, x, y, 100, 100);

        //Construccion del fondo del canvas
        const background = await Canvas.loadImage(
            path.join(__dirname, './welcomeBack.png')
          );
           x = 0;
           y = 0;

          ctx.drawImage(background, x, y);
        
        // Display user text
        ctx.fillStyle = '#ffffff'; // White text
        ctx.font = '35px sans-serif';
        ctx.textAlign = "center";
        let text = `Bienvenido ${member.user.tag}!`;
        x = canvas.width / 2;
        y = 25 + 150;
        // ctx.fillText(text, 150, 170);
        ctx.fillText(text, x, y);

        // Display member count
        ctx.font = '25px sans-serif';
        ctx.textAlign = "center";
        text = `Miembro #${member.guild.memberCount}`
        x = canvas.width / 2;
        y = 25 + 180;
        ctx.fillText(text, x, y);

        //Attach de los elementos al canvas
        const attachment = new MessageAttachment(canvas.toBuffer());

        //Enviar el mensaje
        welcomeChannel.send(message, attachment);
    });
}

