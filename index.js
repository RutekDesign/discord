const Discord = require('discord.js');
const bot = new Discord.Client();
var d = new Date();
var m = new String("");
var o = new Boolean(false);
var loo = 0;

bot.on('ready', () =>{
    console.log('This bot is online!');
    let guild = bot.guilds.cache.get("620649049833603113");
    let time = guild.channels.cache.get("690939192943050782");
    let member = guild.channels.cache.get("690977704757035028");
    let info = guild.channels.cache.get("691032131970924655");
    bot.user.setPresence({ activity: { name: 'Eluwina!' }, status: 'online' });
    setInterval(function(){
        d = new Date();
        d1 = new Date(0, 0, 0, (d.getHours()+1), 0, 0, 0);
        m = new String("Członkowie: "+guild.memberCount);
        var h = d1.getHours();
        var min = d.getMinutes();
        if(h < 10){
            h = new String("0"+h);
        }
        if(min < 10){
            min = new String("0"+min);
        }
        time.setName("Czas: " + h + ":" + min);
        member.setName(m);
        if(o == false){
            info.setName("Dzień 10");
            o = new Boolean(true);
        }
        else if(o == true){
            info.setName("Nie wiem co robić...");
            o = new Boolean(false);
        }
    },5000)
})
bot.login(process.env.token);
