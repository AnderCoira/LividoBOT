const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const path = require('path');

module.exports = welcome => {
    const welcomeChannelID = '781247183789228072'; //Cambiar este ID esta puesto el del canal de test
    const ruleChannelID = '781143942262554644';
    // 781247183789228072 //ID test channel
    // 781106068264058890 // ID welcome channel

    welcome.on('guildMemberAdd', async (member) => {
        //Los canales del server
        const welcomeChannel = member.guild.channels.cache.get(welcomeChannelID);
        const ruleChannel = member.guild.channels.cache.get(ruleChannelID);

        //Construccion del mensaje
        const message = `Bienvenido a ˗ˏˋ ɢᴏᴏᴅ ᴠɪʙᴇꜱ ´ˎ˗ ${member.user} ! Puedes ver las reglas en ${ruleChannel.toString()}`;

        //Construccion del canvas
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        
        //Construccion del fondo del canvas
        const background = await Canvas.loadImage(
            path.join(__dirname, './welcomeBack.png')
          );
          let x = 0;
          let y = 0;

          ctx.drawImage(background, x, y);

        //Construccion de la imagen de perfil del usuario que acaba de entrar
        const profilePic = await Canvas.loadImage(member.user.displayAvatarURL({format: 'png'}));
        x = 300;
        y = 25;
        ctx.drawImage(profilePic, x, y, 100, 100);
        
        // Display user text
        ctx.fillStyle = '#ffffff' // White text
        ctx.font = '35px sans-serif'
        let text = `Bienvenido ${member.user.tag}!`
        ctx.fillText(text, 150, 170);

        // Display member count
        ctx.font = '25px sans-serif'
        text = `Miembro #${member.guild.memberCount}`
        ctx.fillText(text, 285, 220);

        //Attach de los elementos al canvas
        const attachment = new MessageAttachment(canvas.toBuffer());

        //Enviar el mensaje
        welcomeChannel.send(message, attachment);
    });
}

