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
        Canvas.registerFont(path.join(__dirname, "../Fonts/", "PatrickHandSC-Regular.ttf"), { family: "PatrickHandSC"});
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        // var PatrickHandSCRegular = Font ? new Font('PatrickHandSCRegular', path.join(__dirname,'../Imagenes/PatrickHandSC-Regular.ttf')) : null;
        
        //Construccion de la imagen de perfil del usuario que acaba de entrar
        const profilePic = await Canvas.loadImage(member.user.displayAvatarURL({format: 'png'}));  // Fuente custom descargada
        let x = canvas.width / 2 - 50; //300
        let y = 25 //25
        ctx.drawImage(profilePic, x - 24, y + 2, 150, 150);

        //Construccion del fondo del canvas
        const background = await Canvas.loadImage(
            path.join(__dirname, '../Imagenes/WelcomeBackground/customBackgroundEric.png')
          );
           x = 0;
           y = 0;

          ctx.drawImage(background, x, y);
        
        // Display user text
        // ctx.fillStyle = '#d40000'; //Color del texto
        let gradiente = ctx.createLinearGradient(500, 250, 150, 100);
        gradiente.addColorStop(0, "rgb(0, 0, 0)");
        gradiente.addColorStop(1, "rgb(255, 0, 0)");
        ctx.fillStyle = gradiente;
        ctx.shadowBlur = 1; //Blur de la sombra
        ctx.shadowOffsetX = 4; 
        ctx.shadowOffsetY = 5;
        ctx.shadowColor = '#000000'; //Color de la sombra
        ctx.font = '30px PatrickHandSC';
        ctx.textAlign = "center";
        let text = `Bienvenido ${member.user.tag}!`;
        x = canvas.width / 2;
        y = 25 + 180;
        // ctx.fillText(text, 150, 170);
        ctx.fillText(text, x, y);

        // Display member count
        ctx.font = '25px PatrickHandSC';
        ctx.textAlign = "center";
        text = `Miembro #${member.guild.memberCount}`
        x = canvas.width / 2;
        y = 25 + 210;
        ctx.fillText(text, x, y);

        //Attach de los elementos al canvas
        const attachment = new MessageAttachment(canvas.toBuffer());

        //Enviar el mensaje
        welcomeChannel.send(message, attachment);
    });

}

