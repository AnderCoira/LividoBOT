const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./Funcionalidad/welcome.js');

//Comando de llamada al bot
const botCall = 'puto ';


bot.once('ready', () => {
    console.log('Estoy listo -- COMPILAME OTRA VEZ CUANDO HAGAS CAMBIOS PEDAZO MONGUER');
    welcome(bot);
});

bot.login('NzgxMjQ1NDMxNzc4MjQ2NzE2.X761gQ.gC-wLXQYpqOA7o65kf1QaV9kKpA');