const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./Funcionalidad/welcome.js');
const ayuda = require('./Funcionalidad/ayuda.js');

bot.once('ready', () => {
    console.log('Estoy listo -- COMPILAME OTRA VEZ CUANDO HAGAS CAMBIOS PEDAZO MONGUER');
    welcome(bot);
    ayuda(bot);
});

bot.login('NzgxMjQ1NDMxNzc4MjQ2NzE2.X761gQ.1eCKFRouGsQgvm_jAt7keUcoONk');