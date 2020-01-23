module.exports = {discordmain}
const config = require("../../config.js").config

function discordmain(){
  const Discord = require('discord.js');
  const client = new Discord.Client();
  const deposit = require("../data/userdata.js").deposit
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', msg => {
  	if(msg.channel.id === config.trademenchannel){
      for(var i=0;i<config.trademenchannels.length;i++){
      	if(msg.content.includes(config.trademenchannels[i].prefix + config.trademenchannels[i].command + " ")){
      		msg.content = msg.content.replace(config.trademenchannels[i].prefix + config.trademenchannels[i].command + " ", "")
      		client.channels.get(config.trademenchannels[i].channel).send(msg.content)
      	}
      }
  	}
    if (msg.content === '!sissekanne' || msg.content === "!s" || msg.content === "!sk") {
      deposit(msg.author.id, msg.channel.id)
    }
    if (msg.content === "!abi" || msg.content === "!a"){
      msg.reply("invote message")
    }
  });

  client.login(config.discordtoken);
}