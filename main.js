const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./Funcionalidad/welcome.js');
const help = require('./Funcionalidad/help.js');
const riot = require('./Funcionalidad/riotAPI.js');
const bullying = require('./Funcionalidad/bullying.js');

bot.once('ready', () => {
    console.log('Estoy listo -- COMPILAME OTRA VEZ CUANDO HAGAS CAMBIOS PEDAZO MONGUER');
    welcome(bot);
    help(bot);
    riot(bot);
    bullying(bot);
});

bot.login('');