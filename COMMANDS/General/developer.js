const express = require("express");
const app = express();

app.listen(() => console.log("LOADING developer.js"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = "!"
const developers = "765572477317283840"
/////////////

var bot_inv="https://discord.com/api/oauth2/authorize?client_id=818930520124948521&permissions=8&scope=bot"
var support_inv="https://discord.gg/9daVBPanCG"
var youtube_channel="https://www.youtube.com/channel/UC2y9VKUgWKdlLB2l-EZ1XtA"
var web_link="https://mwqaa-qrn-krym.sadad123.repl.co"
var image = 'https://wpcdn.alaan.tv/2019/11/GettyImages-1006326462.jpg'

client.on('message', message => {
  if (message.content.startsWith(prefix + "developers")) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
      .setColor('RANDOM')

      .setDescription(`[Invite](${bot_inv}) | [Support](${support_inv}) | [youtube](${youtube_channel}) | [Website](${web_link})`)
          
      .addField("🇸🇦","صانع بوت شداد ومشرف على سيرفر و خوادم هو العقيد ")
      .addField("🇺🇸","Tensioner bot maker and supervisor of server and servers is Colonel")
       
       .setImage(image)     

    message.channel.send(embed)
  }
})

client.login(process.env.token);