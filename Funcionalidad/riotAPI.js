const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');
const fetch = require("node-fetch");
const apiKey = '';
const botCall = '-';

module.exports = riot => {
    riot.on('message', message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'summoner'){
            //Guardamos el nombre del usuario y le hacemos un encode para caracteres especiales
            let summonerName = message.content.split('summoner ')[1];
            summonerName = encodeURI(summonerName);

            //Data
            let summonerData;
            let soloqData;
            let flexqData;

            //Wins/winrate
            let totalWins;
            let totalLosses;
            let totalGames;
            let totalWinrate;

            //Message
            let embedMessage;

            //Metodo para pillar los datos el summoner introducido en discord
            if(summonerName !== undefined){
                getSummonerByName(summonerName).then(
                    data => {
                        summonerData = data;
                        getSummonerAllData(data.id).then(
                            data => {
                                soloqData = data.filter(queue => queue.queueType === 'RANKED_SOLO_5x5');
                                flexqData = data.filter(queue => queue.queueType === 'RANKED_FLEX_SR');

                                if(soloqData.length > 0 && flexqData.length <= 0){
                                  totalWins = soloqData[0].wins;
                                  totalLosses = soloqData[0].losses;
                                  totalGames = totalWins + totalLosses;
                                  totalWinrate = Math.round((totalWins + 0.5) / totalGames * 100);

                                  embedMessage = {
                                    "embed": {
                                      "title": "Nivel " + summonerData.summonerLevel,
                                      "description": `🎉 Victorias →  ${totalWins}  💀 Derrotas → ${totalLosses} \n\nWinrate → ${totalWinrate}%`, 
                                      "color": 16076624,
                                      "author": {
                                        "name": summonerData.name,
                                        "url": "https://euw.op.gg/summoner/userName=" + summonerName,
                                        "icon_url": `http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${summonerData.profileIconId}.png`
                                      },
                                      "fields": [
                                        {
                                          "name": "👌 Clasificatoria solo/duo 👌",
                                          "value":  `${soloqData[0].tier} ${soloqData[0].rank} ${soloqData[0].leaguePoints}lp`,
                                        },
                                        {
                                          "name": "🤮 Clasificatoria flexible 🤮",
                                          "value": "No hay datos",
                                        }
                                      ]
                                    }
                                  }
                                }else if(soloqData.length <= 0 && flexqData.length > 0){
                                  totalWins = flexqData[0].wins;
                                  totalLosses = flexqData[0].losses;
                                  totalGames = totalWins + totalLosses;
                                  totalWinrate = Math.round((totalWins + 0.5) / totalGames * 100);

                                  embedMessage = {
                                    "embed": {
                                      "title": "Nivel " + summonerData.summonerLevel,
                                      "description": `🎉 Victorias →  ${totalWins}  💀 Derrotas → ${totalLosses} \n\nWinrate → ${totalWinrate}%`, 
                                      "color": 16076624,
                                      "author": {
                                        "name": summonerData.name,
                                        "url": "https://euw.op.gg/summoner/userName=" + summonerName,
                                        "icon_url": `http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${summonerData.profileIconId}.png`
                                      },
                                      "fields": [
                                        {
                                          "name": "👌 Clasificatoria solo/duo 👌",
                                          "value":  "No hay datos",
                                        },
                                        {
                                          "name": "🤮 Clasificatoria flexible 🤮",
                                          "value": `${flexqData[0].tier} ${flexqData[0].rank} ${flexqData[0].leaguePoints}lp`,
                                        }
                                      ]
                                    }
                                  }
                                }else if(soloqData.length <= 0 && flexqData.length <= 0){
                                  totalWins = 0;
                                  totalLosses = 0;
                                  totalGames = 0;
                                  totalWinrate = 0;

                                  embedMessage = {
                                    "embed": {
                                      "title": "Nivel " + summonerData.summonerLevel,
                                      "description": `🎉 Victorias →  ${totalWins}  💀 Derrotas → ${totalLosses} \n\nWinrate → ${totalWinrate}%`, 
                                      "color": 16076624,
                                      "author": {
                                        "name": summonerData.name,
                                        "url": "https://euw.op.gg/summoner/userName=" + summonerName,
                                        "icon_url": `http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${summonerData.profileIconId}.png`
                                      },
                                      "fields": [
                                        {
                                          "name": "👌 Clasificatoria solo/duo 👌",
                                          "value":  "No hay datos",
                                        },
                                        {
                                          "name": "🤮 Clasificatoria flexible 🤮",
                                          "value": "No hay datos",
                                        }
                                      ]
                                    }
                                  }
                                }else{
                                  totalWins = soloqData[0].wins + flexqData[0].wins;
                                  totalLosses = soloqData[0].losses + flexqData[0].losses;
                                  totalGames = totalWins + totalLosses;
                                  totalWinrate = Math.round((totalWins + 0.5) / totalGames * 100);

                                  embedMessage = {
                                    "embed": {
                                      "title": "Nivel " + summonerData.summonerLevel,
                                      "description": `🎉 Victorias →  ${totalWins}  💀 Derrotas → ${totalLosses} \n\nWinrate → ${totalWinrate}%`, 
                                      "color": 16076624,
                                      "author": {
                                        "name": summonerData.name,
                                        "url": "https://euw.op.gg/summoner/userName=" + summonerName,
                                        "icon_url": `http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${summonerData.profileIconId}.png`
                                      },
                                      "fields": [
                                        {
                                          "name": "👌 Clasificatoria solo/duo 👌",
                                          "value":  `${soloqData[0].tier} ${soloqData[0].rank} ${soloqData[0].leaguePoints}lp`,
                                        },
                                        {
                                          "name": "🤮 Clasificatoria flexible 🤮",
                                          "value": `${flexqData[0].tier} ${flexqData[0].rank} ${flexqData[0].leaguePoints}lp`,
                                        }
                                      ]
                                    }
                                  }
                                }
                                message.channel.send(embedMessage);
                            }
                        );
                    }
                );
            }
        }
    });

     async function getSummonerByName(summonerName){
        let response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`);
        let data = await response.json();
        return data;
    }

    async function getSummonerAllData(encryptedSummonerId){
        let response = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${apiKey}`);
        let data = await response.json();
        return data;
    }
}