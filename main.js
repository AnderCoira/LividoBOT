const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./Funcionalidad/welcome.js');
const ayuda = require('./Funcionalidad/ayuda.js');

//Comando de llamada al bot
const botCall = 'puto ';


bot.once('ready', () => {
    console.log('Estoy listo -- COMPILAME OTRA VEZ CUANDO HAGAS CAMBIOS PEDAZO MONGUER');
    welcome(bot);
    ayuda(bot);
});

bot.login('');