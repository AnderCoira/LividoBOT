const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./welcome');
const channelID = '781106068264058890';

//Comando de llamada al bot
const botCall = 'puto ';


bot.once('ready', () => {
    console.log('Estoy listo -- COMPILAME OTRA VEZ CUANDO HAGAS CAMBIOS PEDAZO MONGUER');
    welcome(bot);
});

bot.login('NzgxMjQ1NDMxNzc4MjQ2NzE2.X761gQ.3mSEpsIA90VxPpGBvQHbiuLvsgo');