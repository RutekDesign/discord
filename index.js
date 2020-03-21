const Discord = require('discord.js');
const bot = new Discord.Client();
var d = new Date();
var e = new String("");
var m = new String("");
const token = 'NjkwOTQyNjU2MTIxMTQzMzI3.XnZTHQ.VsUiWVJAmc_1rwKamcLbB0LAXsE';

bot.on('ready', () =>{
    console.log('This bot is online!');
    let guild = bot.guilds.cache.get("620649049833603113");
    let time = guild.channels.cache.get("690939192943050782");
    let member = guild.channels.cache.get("690977704757035028");
    setInterval(function(){
        bot.user.setPresence({ activity: { name: 'Eluwina!' }, status: 'online' });
        d = new Date();
        e = new String("Czas: "+d.getHours()+":"+d.getMinutes());
        m = new String("Członkowie: "+guild.memberCount);
        time.setName(e);
        member.setName(m);
    },10000)
})
bot.login("NjkwOTQyNjU2MTIxMTQzMzI3.XnZ4vQ.fucPPwbKFVYXDmWOf67rwKuudjw");
