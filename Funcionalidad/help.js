const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');

//Comando de llamada al bot
const botCall = '-';

module.exports = help => {
    help.on('message', message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        const helpOption = message.content.split('-help ')[1];

        if(command === 'help'){

            let subHelp = message.content.split('help ')[1];
            let embedMessage = {};

            switch (subHelp) {
                case undefined:
                    embedMessage = {
                        "embed": {
                          "title": "Comandos de ayuda - GENERAL",
                          "color": 16076624,
                          "fields": [
                            {
                              "name": "1️⃣ -help < riot >",
                              "value":  "Ayuda sobre los comandos de League of legends",
                            },
                            {
                              "name": "2️⃣ -help < bullying >",
                              "value":  "Ayuda sobre los comandos de bullying",
                            },
                            {
                              "name": "3️⃣ -help < musica >",
                              "value":  "Ayuda sobre los comandos para añadir musica",
                            }
                          ]
                        }
                    }
                    message.channel.send(embedMessage);
                    break;
            
                case 'riot':
                    embedMessage = {
                        "embed": {
                          "title": "Comandos de ayuda - RIOT",
                          "color": 16076624,
                          "fields": [
                            {
                              "name": "1️⃣ -summoner < summoner name >",
                              "value":  "Ver las estadisticas de un summoner",
                            },
                            {
                              "name": "2️⃣ -serverstatus",
                              "value":  "Ver el estado del servdiro de riot EUW",
                            }
                          ]
                        }
                    }
                    message.channel.send(embedMessage);
                    break;
                  case 'bullying':
                      embedMessage = {
                          "embed": {
                            "title": "Comandos de ayuda - BULLYING",
                            "color": 16076624,
                            "fields": [
                              {
                                "name": "1️⃣ -bullying < nombre >",
                                "value":  "Hacer bullying a personas como main katarinas",
                              }
                            ]
                          }
                      }
                      message.channel.send(embedMessage);
                      break;
                  case 'musica':
                      embedMessage = {
                          "embed": {
                            "title": "Comandos de ayuda - MUSICA",
                            "color": 16076624,
                            "fields": [
                              {
                                "name": "1️⃣ -play < Link de la cancion de YouTube >",
                                "value":  "Empezar a escuchar una canción",
                              },
                              {
                                "name": "2️⃣ -add < Link de la cancion de YouTube >",
                                "value":  "Añadir una canción a la cola",
                              },
                              {
                                "name": "3️⃣ -skip",
                                "value":  "Saltar la canción que esta sonando",
                              },
                              {
                                "name": "4️⃣ -stop",
                                "value":  "Parar la reproducción de las canciones",
                              }
                            ]
                          }
                      }
                      message.channel.send(embedMessage);
                      break;
            }
        }

    });
}