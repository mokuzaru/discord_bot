const {Client, RichEmbed} = require('discord.js');

const client = new Client();

client.on('ready' , () =>{
  console.log('Bot esta escuchando');
  client.user.setStatus('dnd');

  console.log('bot status', client.user.presence.status);


});

client.on('message', msg => {
  if(msg.content == 'holi'){
    msg.reply('boli');
  }

  if(msg.content.includes('!del')){
    msg.channel.send(`Deployment`);
  }

  if(msg.content == 'como estas'){
    msg.channel.send(`bien,  ${msg.author}`);
  }

  if(msg.content == 'devil'){
    msg.channel.send('https://www.youtube.com/watch?v=Ca4fFh7bN5I');
  }

  if(msg.content === 'bonito'){
    const embed = new RichEmbed()
    .setColor(0xff0000)
    .addField('Primero', 'aeifnasfeijaosjdf', true)
    .setAuthor('konami', 'https://www.youtube.com/watch?v=Ca4fFh7bN5I');
    msg.channel.send(embed);
  }

  if(msg.content.startsWith('!clean')){
    async function clear(){
      try {
        const fetch = await msg.channel.fetchMessages({limit: 100});
        msg.channel.bulkDelete(fetch);
        console.log('borrados');
      }
      catch(e){
        console.log(e);
      }
    }
    clear();
  }
});

client.login('NjQ2ODMzMzk2NjYzOTc1OTM4.XdW_tQ.uJb5txwmQfIeWTLeZLoY4n0tIPI'); //Here put your token bot 
