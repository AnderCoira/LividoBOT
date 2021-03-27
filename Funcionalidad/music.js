const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');
const ytdl = require('ytdl-core');

//Comando de llamada al bot
const botCall = '-';

//Opciones para el bot
const streamOptions = { seek: 0, volume: 1 };

module.exports = music => {

    let musicUrls = [];

    music.on('message', async (message) => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        
        if(command === 'play' && musicUrls.length <= 0){
            let urlSplit = message.content.split(" ");
            let url = urlSplit[1];
            const voiceChannel = message.member.voice.channel;

            if(ytdl.validateURL(url)){
                let existSong = musicUrls.some(song => song === url);
                if(!existSong){
                    musicUrls.push(url);
                    if(voiceChannel !== null){
                        if(voiceChannel.connection){
                            console.log('Existe la conexion');
                        }else{
                            try {
                                const voiceConnection = await voiceChannel.join();
                                await playSong(message.channel, voiceConnection, voiceChannel);
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }else{
                      musicUrls = [];
                      let embedMessage = {
                        "embed": {
                          "title": "",
                          "color": 16076624,
                          "fields": [
                            {
                              "name": "Canal de voz no encontrado",
                              "value":  "Debes estar en un canal de voz para poner música",
                            }
                          ]
                        }
                    }
                    message.channel.send(embedMessage);
                    }
                }
            }else{
                let embedMessage = {
                    "embed": {
                      "title": "",
                      "color": 16076624,
                      "fields": [
                        {
                          "name": "Error URL",
                          "value":  "La URL no existe",
                        }
                      ]
                    }
                }
                message.channel.send(embedMessage);
            }
        }else if(command === 'stop'){
            musicUrls = [];
            const voiceChannel = message.member.voice.channel;
            voiceChannel.leave();
        }else if(command === 'skip'){
            const voiceChannel = message.member.voice.channel;
            const voiceConnection = await voiceChannel.join();

            musicUrls.shift();

            if(musicUrls.length === 0){
                voiceChannel.leave();
            }else{

                let embedMessage = {
                    "embed": {
                      "title": "",
                      "color": 16076624,
                      "fields": [
                        {
                          "name": "⏭ Skip ⏭",
                          "value":  "Skipeando canción...",
                        }
                      ]
                    }
                }
                message.channel.send(embedMessage);

                setTimeout(() => {
                    playSong(message.channel, voiceConnection, voiceChannel);
                }, 1000);
            }
        }else if(command === 'add'){
            let urlSplit = message.content.split(" ");
            let url = urlSplit[1];

            if(ytdl.validateURL(url)){
                let existSong = musicUrls.some(song => song === url);
                if(!existSong){
                    if(musicUrls.length !== 0){
                        let embedMessage = {
                            "embed": {
                              "title": "",
                              "color": 16076624,
                              "fields": [
                                {
                                  "name": "✅ Canción añadida ✅",
                                  "value":  "Canción añadida con exito",
                                }
                              ]
                            }
                        }

                        musicUrls.push(url);
                        message.channel.send(embedMessage);
                    }else{
                        let embedMessage = {
                            "embed": {
                              "title": "",
                              "color": 16076624,
                              "fields": [
                                {
                                  "name": "💤 Bot dormido 💤",
                                  "value":  "Para añadir una canción primero tienes que despertar al bot con -play <canción>",
                                }
                              ]
                            }
                        }
                        message.channel.send(embedMessage);
                    }
                    
                }
            }else{
                let embedMessage = {
                    "embed": {
                      "title": "",
                      "color": 16076624,
                      "fields": [
                        {
                          "name": "❌ Error URL ❌",
                          "value":  "La URL no existe",
                        }
                      ]
                    }
                }
                message.channel.send(embedMessage);
            }
        }else if(command === 'play' && musicUrls.length > 0){
            let embedMessage = {
                "embed": {
                  "title": "",
                  "color": 16076624,
                  "fields": [
                    {
                      "name": "❗ Bot de música ya está en uso ❗",
                      "value":  "Si quieres añadir mas canciones usa el comando -add < canción >",
                    }
                  ]
                }
            }
            message.channel.send(embedMessage);
        }

    });

    async function playSong(messageChannel, voiceConnection, voiceChannel){
        const stream = ytdl(musicUrls[0], { filter: 'audioonly', highWaterMark: 1<<25 });
        const dispatcher = await voiceConnection.play(stream, streamOptions);

        dispatcher.on('finish', () => {
            musicUrls.shift();

            if(musicUrls.length === 0){
                voiceChannel.leave();
            }else{
                setTimeout(() => {
                    playSong(messageChannel, voiceConnection, voiceChannel);
                }, 1000);
            }
        });
    }

}