const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');

//Comando de llamada al bot
const botCall = '-';

module.exports = bullying => {
    bullying.on('message', message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'bullying'){

            let nameToBully = message.content.split('bullying ')[1];
            
            switch (nameToBully) {
                case undefined:
                    message.channel.send('Pon un nombre puto bobo');
                    break;
                case 'eric':
                    message.channel.send('Un main kata de mierda >:(');
                    break;
                case 'maik':
                    message.channel.send('Un ladrón maravillosa persona de mierda >:(');
                    break;
                case 'dante':
                    message.channel.send('Un ciego de mierda >:(');
                    break;
                case 'coira':
                    message.channel.send('Na, vlad no tiene daño, solo llega al late con medio item >:(');
                    break;
                case 'ruben':
                    message.channel.send('Si te gusta tokyo ghoul no eres mi amigo >:(');
                    break;
            }
        }

    });
}