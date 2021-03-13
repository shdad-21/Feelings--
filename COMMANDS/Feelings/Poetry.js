




const express = require("express");
const app = express();

app.listen(() => console.log("LOADING Poetry.js"));

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

var memes =["https://ccute.cc/wp-content/uploads/2018/07/916.jpg","https://cute1.cc/wp-content/uploads/2016/08/20160817-4941.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVep1Gua2AQ16OR_AF_trWNO_utmCAe_8Kg&usqp=CAU","https://kisss.cc/wp-content/uploads/2018/07/1153.jpg","https://cdn.discordapp.com/attachments/771701204370849842/798894979858563082/images_1.jpg","https://rjeem.com/wp-content/uploads/2017/11/%D8%B5%D9%88%D8%B1-%D8%AD%D8%A8-%D8%A7%D9%94%D8%AC%D9%85%D9%84-%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%A8-.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAy54aCaAnWqekw_mjlqY2U86mhZDXlWzvA&usqp=CAU","https://www.brooonzyah.net/wp-content/uploads/2019/10/%D8%A7%D8%AD%D8%AF%D8%AB-%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%A8.jpg",
  "https://hobe.cc/wp-content/uploads/2018/07/2726.jpg",
  "https://media.discordapp.net/attachments/768177052250800159/786180980301103114/image0_3.jpg?width=403&height=406",
 "https://alamphoto.com/wp-content/uploads/2017/09/Love%20Images%20(13)-623x374.jpg",
  "https://ddreams.cc/wp-content/uploads/2018/08/3737.jpg",
  "https://www.swishschool.com/w/wp-content/uploads/2019/03/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B4%D8%A7%D9%82-11.jpg",
  "https://www.infozad.com/wp-content/uploads/%D8%B5%D9%88%D8%B1-%D8%AD%D8%A8-42.jpg",
  "https://f5m.cc/wp-content/uploads/2019/07/669.jpg"]
  client.on('message', message => {
   
  if(message.content.startsWith(prefix + 'plov')) {
   if(!message.channel.guild) return message.reply('** U CANT TYPE HERE**');
   var embed = new Discord.MessageEmbed()
  .setImage(memes[Math.floor(Math.random() * memes.length)])
   .setColor('RED')
  message.channel.send(embed);
  }
  })


client.login(process.env.token);  