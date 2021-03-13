const express = require("express");
const app = express();

app.listen(() => console.log("LOADING heat.js"));

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






client.on('message', message => {
  if(message.content.startsWith(prefix + "lv")){
    let user = message.mentions.users.first();
let args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.channel.send("منشن الشخص")
 if(message.author.bot || !message.guild) return message.reply("this command for server only")
let iq2 = [
 '10',
 '15',
 '22',
 '41',
 '98',
 '99',
 '18',
 '16',
 '64',
 '61',
 '71',
 '17',
 '11',
 '0',
 '75',
 '14',
 '13',
 '20',
 '30',
 '40',
 '50',
 '60',
 '70',
 '80',
 '90',
 '100',
 
  ];
            
            let an = iq2[Math.floor(Math.random() * iq2.length)];

  var embed = new Discord.MessageEmbed()
  .setTitle(`سنبه  كرهك الى`)
  .setColor("#5B2076")

  .setDescription(`${user}   نسبه كره    ${an}% `)
 message.channel.send(embed)
  }

})



//// انتها الكود ال عشوائي هنا فقط














client.login(process.env.token);  