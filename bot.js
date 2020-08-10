const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 


client.login(process.env.NzQyMzU0MzAyODczNjMyNzk4.XzE5Ug.0SPEuRqU-rCD1A_CVwAniRF3Ui0);//where BOT_TOKEN is the token of our bot
