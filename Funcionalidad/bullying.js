const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');

//Comando de llamada al bot
const botCall = '-';

module.exports = bullying => {
    bullying.on('message', message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        
        switch (command) {
            case 'eric':
                message.channel.send('Un main kata de mierda >:(');
                break;
            case 'maik':
                message.channel.send('Un ladrón maravillosa persona de mierda >:(');
                break;
            case 'dante':
                message.channel.send('Un ciego de mierda >:(');
                break;
        }

    });
}