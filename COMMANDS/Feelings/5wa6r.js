const express = require("express");
const app = express();

app.listen(() => console.log("LOADING 5wa6r.js"));

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






client.on('message', mg => {
  if (mg.content.startsWith(prefix + "خواطر8")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription(`مهما طال الزّمان ومهما كسرتني الأيام مهما أخذت مني الحياة مهما عذّبني الحب، مهما انجرحت مهما أذللت للناس والحياة مهما حصل لن يتغيّر شيء بقلبي مع أنك جرحتني، إلا أنّي وبكل صراحة أحبّك`)

      mg.channel.send(embed)
  }
})

client.on('message', mg => {
  if (mg.content.startsWith(prefix + "7خواطر")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription('الحروف وتقبيل الورق في يدي الواحدة خمسة أصابع أراها متساوية جميعاً بالخشوع حينما تلامس يديك","عندما يتوقّف الزمن وينفصل العالم عن الوجود اعلم عندها أني قبّلت جَبينَك')

 mg.channel.send(embed)
  }
})


client.on('message', mg => {
  if (mg.content.startsWith(prefix + "خواطر6")) {
    var embed = new Discord.MessageEmbed()

      .setColor('RANDOM')

      .setDescription('عندما يتوقّف الزمن وينفصل العالم عن الوجود اعلم عندها أني قبّلت جَبينَك","تواعدنا أن نبقى سويّاً مدى الحياة أن نجعل حبنا يفوق الخيال أن نكتب قصة حبّنا في كل مكان أن نغسل قلوبنا من نهر العذاب')

 mg.channel.send(embed)
  }
})

client.on('message', mg => {
  if (mg.content.startsWith(prefix + "خواطر5")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription('وجهك هذا الدفتر المفتوح ما أجمله حين أراه ساعة الصباح يحمل لي القهوة في بسمته وحمرة التفاح","كلماتنا في الحب تقتل حبّنا إن الحروف تموت حين تقالُ","إن الحب هو المغامرة الوحيدة الحقيقية في حياتنا ولهذا السبب نحن نحب","لحب لذيذٌ جداً، غير أننا نقترضه من صناديق الوهم الربويّة، ونُسدّده ألماً مضاعفاً بعد حين')

 mg.channel.send(embed)
  }
})

client.on('message', mg => {
  if (mg.content.startsWith(prefix + "خواطر4")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription('كلماتنا في الحب تقتل حبّنا إن الحروف تموت حين تقالُ","إن الحب هو المغامرة الوحيدة الحقيقية في حياتنا ولهذا السبب نحن نحب')

 mg.channel.send(embed)
  }
})

client.on('message', mg => {
  if (mg.content.startsWith(prefix + "خواطر3")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription('لحب لذيذٌ جداً، غير أننا نقترضه من صناديق الوهم الربويّة، ونُسدّده ألماً مضاعفاً بعد حين","الحب والحنان وحدهما سيبقيان دوماً ترياق الخوف والحيرة')

 mg.channel.send(embed)
  }
})

client.on('message', mg => {
  if (mg.content.startsWith(prefix + "خواطر2")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription('يختصر الحب كل مطالبنا الكثيرة، فنكتفي بابتسامة أو بلمسة على الوجه المتعب')

 mg.channel.send(embed)
  }
})

client.on('message', mg => {
  if (mg.content.startsWith(prefix + "1خواطر")) {
    var embed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')

      .setDescription('الحب أعمى والمُحبّون لا يرَون الحماقة التي يقترفونها')

 mg.channel.send(embed)
  }
})





client.login(process.env.token);  