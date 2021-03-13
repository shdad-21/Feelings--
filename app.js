const express = require("express");
const app = express();

app.listen(() => console.log("LOADING"));

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
const axios = require('axios');
//لا تلعب اي شي في الكود



const prefix = "!"
const developers = "765572477317283840"
/////////////

const activity = [
    'لونظر نيوتن الى عينيــك لعرف أن ليس للجاذبيه قــانون',
   
    '!help || server',
    
    
    'Support-مشاعر : https://discord.gg/e9fa2kQ56q',

    'عندما يتوقّف الزمن وينفصل العالم عن الوجود اعلم عندها أني قبّلت جَبينَك.',

'الحروف وتقبيل الورق في يدي الواحدة خمسة أصابع أراها متساوية جميعاً بالخشوع حينما تلامس يديك',
]; 
 
client.on("ready", function (){
    console.log(`${client.user.username} Is now active`);
    let i = 0;
    setInterval(()=>{
        const index = Math.floor(i);
    client.user.setActivity(activity[index],{type:"PLAYING"});
    i = i + 1;
    if(i === activity.length) i = i - activity.length;
///
    },5000)
})

client.login(process.env.TOKEN);