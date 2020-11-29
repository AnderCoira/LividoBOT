const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./Funcionalidad/welcome.js');

//Comando de llamada al bot
const botCall = 'puto ';


bot.once('ready', () => {
    console.log('Estoy listo -- COMPILAME OTRA VEZ CUANDO HAGAS CAMBIOS PEDAZO MONGUER');
    welcome(bot);
});

bot.login('');