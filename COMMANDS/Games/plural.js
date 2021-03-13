const express = require("express");
const app = express();

app.listen(() => console.log("LOADING plural.js"));

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

client.on('message', message =>{
  if(message.content === prefix + 'جمع'){
  var x =['فاكهة','عامل','خطبوط','امبراطور','حيوان','بنت','شجر','عمل','اسد','نمر','ام','موضف','تاجر','بيت','كتاب','بلد','كلمه','طالب','مبرمج','مزرعه','دفتر','نهر','بحر','ملك','امير','ملكه','اميرة','صحن','معلم','معلمه','مدير','وزارة','رئيس','وزير','جندي','عمارة','مول','كرسي','تلفاز ','حاسبه','تليفون','بروجكت','رسم','كيبورد','مطر','ماوس','شكل','دائرة','مربع'];
  var x2 =['فواكه','عمال','اخطبوطات','اباطرة','حيوانات','بنات','شجرات','اعمال','اسود','نمور','امهات','موضوفون','تجار','بيوت','كتب','بلدان','كلمات','طلاب','مبرجين','مزارع','دفاتر','انهر','ابحار','ملوك','امراء','ملكات','اميرات','صحون','ملعمون','معلمات','مدراء','وزارات','رؤساء','وزراء','جنود','عمارات','مولات','كراسي','تلفازات','حاسبات','بروجكتات','رسمات','كيبوردات','امطار','ماوسات','اشكل','دائارات','مربعات'];
  var x3 = Math.floor(Math.random() * x.length);
  var embed = new Discord.MessageEmbed()
  .setTitle('plural')
  .setColor('RANDOM')
  .setDescription(`لديك عشر ثواني لجمع كلمة ${x[x3]}`)
  message.channel.send(embed).then(msg1 => {
      var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return message.channel
          .send(`:negative_squared_cross_mark: ***لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
         الصحيحة هيا*** **${x2[x3]}**`);
      });

      r.then(collected => {
        message.channel.send(
          `${collected.first().author}***لقد اجبت بشكل جيد***`);
      });
    });
  }
});

client.login(process.env.token);  