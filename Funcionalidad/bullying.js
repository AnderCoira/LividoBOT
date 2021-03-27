const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require('discord.js');

//Comando de llamada al bot
const botCall = '-';
const insultos = ['Barredesiertos', 'Pellizcacristales', 'Abanto', 'Abrazafarolas', 'Adufe', 'Alcornoque', 'Alfeñique', 'Andurriasmo', 'Arrastracueros', 'Artabán', 'Atarre', 'Baboso', 'Barrabás', 'Barriobajero', 'Bebecharcos', 'Bellaco', 'Belloto', 'Berzotas', 'Besugo', 'Bobalicón', 'Bocabuzón', 'Bocachancla', 'Bocallanta', 'Boquimuelle', 'Borrico', 'Botarate', 'Brasas', 'Cabestro', 'Cabezaalberca', 'Cabezabuque', 'Cachibache', 'Cafre', 'Cagalindes', 'Cagarruta', 'Calambuco', 'Calamidad', 'Caldúo', 'Calientahielos', 'Calzamonas', 'Cansalmas', 'Cantamañanas', 'Capullo', 'Caracaballo', 'Caracartón', 'Caraculo', 'Caraflema', 'Carajaula', 'Carajote', 'Carapapa', 'Carapijo', 'Cazurro', 'Cebollino', 'Cenizo', 'Cenutrio', 'Ceporro', 'Cernícalo', 'Charrán', 'Chiquilicuatre', 'Chirimbaina', 'Chupacables', 'Chupasangre', 'Chupóptero', 'Cierrabares', 'Cipote', 'Comebolsas', 'Comechapas', 'Comeflores', 'Comestacas', 'Cretino', 'Cuerpoescombro', 'Culopollo', 'Descerebrado', 'Desgarracalzas', 'Dondiego', 'Donnadie', 'Echacantos', 'Ejarramantas', 'Energúmeno', 'Esbaratabailes', 'Escolimoso', 'Escornacabras', 'Estulto', 'Fanfosquero', 'Fantoche', 'Fariseo', 'Filimincias', 'Foligoso', 'Fulastre', 'Ganapán', 'Ganapio', 'Gandúl', 'Gañán', 'Gaznápiro', 'Gilipuertas', 'Giraesquinas', 'Gorrino', 'Gorrumino', 'Guitarro', 'Gurriato', 'Habahelá', 'Huelegateras', 'Huevón', 'Lamecharcos', 'Lameculos', 'Lameplatos', 'Lechuguino', 'Lerdo', 'Letrín', 'Lloramigas', 'Longanizas', 'Lumbreras', 'Maganto', 'Majadero', 'Malasangre', 'Malasombra', 'Malparido', 'Mameluco', 'Mamporrero', 'Manegueta', 'Mangarrán', 'Mangurrián', 'Mastuerzo', 'Matacandiles', 'Meapilas', 'Melón', 'Mendrugo', 'Mentecato', 'Mequetrefe', 'Merluzo', 'Metemuertos', 'Metijaco', 'Mindundi', 'Morlaco', 'Morroestufa', 'Muerdesartenes', 'Orate', 'Ovejo', 'Pagafantas', 'Palurdo', 'Pamplinas', 'Panarra', 'Panoli', 'Papafrita', 'Papanatas', 'Papirote', 'Paquete', 'Pardillo', 'Parguela', 'Pasmarote', 'Pasmasuegras', 'Pataliebre', 'Patán', 'Pavitonto', 'Pazguato', 'Pecholata', 'Pedorro', 'Peinabombillas', 'Peinaovejas', 'Pelagallos', 'Pelagambas', 'Pelagatos', 'Pelatigres', 'Pelazarzas', 'Pelele', 'Pelma', 'Percebe', 'Perrocostra', 'Perroflauta', 'Peterete', 'Petimetre', 'Picapleitos', 'Pichabrava', 'Pillavispas', 'Piltrafa', 'Pinchauvas', 'Pintamonas', 'Piojoso', 'Pitañoso', 'Pitofloro', 'Plomo', 'Pocasluces', 'Pollopera', 'Quitahipos', 'Rastrapajo', 'Rebañasandías', 'Revientabaules', 'Ríeleches', 'Robaperas', 'Sabandija', 'Sacamuelas', 'Sanguijuela', 'Sinentraero', 'Sinsustancia', 'Sonajas', 'Sonso', 'Soplagaitas', 'Soplaguindas', 'Sosco', 'Tagarote', 'Tarado', 'Tarugo', 'Tiralevitas', 'Tocapelotas', 'Tocho', 'Tolai', 'Tontaco', 'Tontucio', 'Tordo', 'Tragaldabas', 'Tuercebotas', 'Tunante', 'Zamacuco', 'Zambombo', 'Zampabollos', 'Zamugo', 'Zángano', 'Zarrapastroso', 'Zascandil', 'Zopenco', 'Zoquete', 'Zote', 'Zullenco', 'Zurcefrenillos'];

module.exports = bullying => {
    bullying.on('message', message => {
        if (!message.content.startsWith(botCall) || message.author.bot) return;

        const args = message.content.slice(botCall.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'bullying'){

            let nameToBully = message.content.split('bullying ')[1];
            let numInsuto = Math.floor(Math.random() * 224);
            let userId = '';
            let mencionarUser = '';

            
            switch (nameToBully) {
                case undefined:
                    message.channel.send('Callate ' + insultos[numInsuto] + ', puto gilipollas, imbecil, que asco que das');
                    break;
                case 'eric':
                    userId = message.guild.members.cache.find(member => member.id === '254609721577832449');
                    mencionarUser = '<@!'+userId+'>';
                    
                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', main kata de mierda');
                    break;
                case 'maik':
                    userId = message.guild.members.cache.find(member => member.id === '272490242471100416');
                    mencionarUser = '<@!'+userId+'>';

                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', un afk y un inter');
                    break;
                case 'dante':
                    userId = message.guild.members.cache.find(member => member.id === '249401414495895554');
                    mencionarUser = '<@!'+userId+'>';

                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', ciego lee sin de cartón, irelia player y la evelynn que vas mas de lao que Eric en halloween');
                    break;
                case 'coira':
                    userId = message.guild.members.cache.find(member => member.id === '252405462291578880');
                    mencionarUser = '<@!'+userId+'>';

                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', Mohamed de mierda');
                    break;
                case 'ruben':
                    userId = message.guild.members.cache.find(member => member.id === '228528162831728640');
                    mencionarUser = '<@!'+userId+'>';

                    message.channel.send('Ruben eres un ' + insultos[numInsuto] + ', vete a ver putos animes mainstreams, el puto JoJos ese da asco, gilipollas');
                    break;
                case 'andoni':
                    userId = message.guild.members.cache.find(member => member.id === '226704115625885699');
                    mencionarUser = '<@!'+userId+'>';

                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', a ver cuando das una puta Q con blitz');
                    break;
                case 'roberto':
                    userId = message.guild.members.cache.find(member => member.id === '412211606261334016');
                    mencionarUser = '<@!'+userId+'>';

                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', a ver cuando aprendes a beber bebidas energeticas y no esa mierda de rockstar');
                    break;
                case 'asier':
                    userId = message.guild.members.cache.find(member => member.id === '457522393812959252');
                    mencionarUser = '<@!'+userId+'>';
    
                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', hiperquinesico de mierda, estate quieto ya');
                    break;
                case 'magnox':
                    userId = message.guild.members.cache.find(member => member.id === '615679983527919636');
                    mencionarUser = '<@!'+userId+'>';
    
                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', murciano');
                    break;
                case 'alex':
                    userId = message.guild.members.cache.find(member => member.id === '242716487494664192');
                    mencionarUser = '<@!'+userId+'>';
        
                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', no te pasas ni el mapa mas facil del baba is you, das vergüenza');
                    break;
                case 'anderloco':
                    userId = message.guild.members.cache.find(member => member.id === '440937861454495755');
                    mencionarUser = '<@!'+userId+'>';
            
                    message.channel.send(mencionarUser + ' eres un ' + insultos[numInsuto] + ', puto bobo de mierda, quitanovias, imbecil, que asco que das');
                    break;
                case 'laura':
                        userId = message.guild.members.cache.find(member => member.id === '361897944305238017');
                        mencionarUser = '<@!'+userId+'>';
                
                        message.channel.send('A Laura no le haces bullying ' + insultos[numInsuto] + ', puto imbecil. ' + mencionarUser + ' UwU  👉👈');
                        break;
            }
        }

    });
}