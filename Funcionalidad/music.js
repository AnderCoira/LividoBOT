const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');
const ytdl = require('ytdl-core');

//Comando de llamada al bot
const botCall = '?';
const streamOptions = { seek: 0, volume: 1 };

module.exports = music => {

    let musicUrls = [];

    music.on('message', async message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'play'){
            let urlSplit = message.content.split(" ");
            let url = urlSplit[1];
            const voiceChannel = message.member.voice.channel;

            if(ytdl.validateURL(url)){
                console.log('URL valida');
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
                    }
                }
            }
        }else if(command === 'stop'){
            const voiceChannel = message.member.voice.channel;
            voiceChannel.leave();
        }

    });

    async function playSong(messageChannel, voiceConnection, voiceChannel){
        const stream = ytdl(musicUrls[0], { filter: 'audioonly', highWaterMark: 1<<25 });
        const dispatcher = voiceConnection.play(stream, streamOptions);

        dispatcher.on('finish', () => {
            musicUrls.shift();

            if(musicUrls.length === 0){
                voiceChannel.leave();
            }else{
                setTimeout(() => {
                    playSong(messageChannel, voiceConnection, voiceChannel);
                }, 4000);
            }
        });
    }

}