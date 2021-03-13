const express = require("express");
const app = express();

app.listen(() => console.log("LOADING bot.js"));

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
var image="https://2.bp.blogspot.com/-tH_7UWXUY9o/VxrExnxRLJI/AAAAAAAASU4/tHS9EbfTC2cI6CYMgajMmwd4uUpiGA96wCLcB/s1600/%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25AD%25D8%25A8_50.jpg"
var image1="https://supercairo.com/wp-content/uploads/2015/09/%D8%B5%D9%88%D8%B1-%D8%AD%D8%A8-%D9%88%D8%B1%D9%88%D9%85%D8%A7%D9%86%D8%B3%D9%8A%D8%A9-%D9%88%D8%B9%D8%B4%D9%82-%D8%B5%D9%88%D8%B1-%D9%84%D9%84%D9%85%D8%AE%D8%B7%D9%88%D8%A8%D9%8A%D9%86-%D9%88%D8%A7%D9%84%D9%85%D8%AA%D8%B2%D9%88%D8%AC%D9%8A%D9%86-%D9%88%D8%A7%D9%84%D9%85%D8%B1%D8%AA%D8%A8%D8%B7%D9%8A%D9%86-%D8%A8%D8%A7%D9%84%D8%AD%D8%A8-24.jpg"

client.on('message', message => {
  if (message.content.startsWith(prefix + "bot")) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
      .setColor('RANDOM')

      .setDescription(`[Invite](${bot_inv}) | [Support](${support_inv}) | [youtube](${youtube_channel}) | [Website](${web_link})`)
          
      .addField("🇸🇦","طبعا هذا بوت من صنع شداد وايضا هذا بوت هداء الى حبيبتي جديده واشراف العقيد ")
      .addField("🇺🇸","Of course, this bot was made by Shaddad too. This bot is a gift to my new love")
       
       .setImage(image)     

    message.channel.send(embed)
  }
})




















client.login(process.env.token);