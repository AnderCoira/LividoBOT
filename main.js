const Discord = require('discord.js');
const bot = new Discord.Client();
const welcome = require('./Funcionalidad/welcome.js');
const help = require('./Funcionalidad/help.js');
const riot = require('./Funcionalidad/riotAPI.js');
const bullying = require('./Funcionalidad/bullying.js');
const music = require('./Funcionalidad/music.js');

bot.once('ready', () => {
    console.log('Listo');
    welcome(bot);
    help(bot);
    riot(bot);
    bullying(bot);
    music(bot);
});

bot.login('NzgxMjQ1NDMxNzc4MjQ2NzE2.X761gQ.qKEZ_J8mCwMAWLSwem1Ivai9WOU');