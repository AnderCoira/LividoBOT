const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');

//Comando de llamada al bot
const botCall = '-';

module.exports = help => {
    help.on('message', message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'help'){
            message.channel.send('Te helpeo');
        }

    });
}