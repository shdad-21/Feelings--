const express = require("express");
const app = express();

app.listen(() => console.log("LOADING Romance.js"));

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





/* 
client.on('message', (message) => {
    const ms = require('ms')
    const channel = message.guild.channels.cache.get('818930788233510976')

    setInterval(() => {
        const arr = ['مهما طال الزّمان ومهما كسرتني الأيام مهما أخذت مني الحياة مهما عذّبني الحب، مهما انجرحت مهما أذللت للناس والحياة مهما حصل لن يتغيّر شيء بقلبي مع أنك جرحتني، إلا أنّي وبكل صراحة أحبّك']
        channel.send(arr[0])
    }, ms('10M'));
})

*/





////////// تحديث جديد مال بوت نضيف هذا 









client.login(process.env.token);  