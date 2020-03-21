const Discord = require('discord.js');
const bot = new Discord.Client();
var d = new Date();
var e = new String("");
var m = new String("");
var o = new boolean(false);

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
        e = new String("Czas: "+d1.getHours()+":"+d1.getMinutes());
        m = new String("Członkowie: "+guild.memberCount);
        time.setName("Czas: " + d1.getHours()+":"+d.getMinutes());
        member.setName(m);
        if(o === false){
            info.setName("Dobre...");
            o = new boolean(true);
        }
        else if(o === true){
            info.setName("Czerwone!");
            o = new boolean(false);
        }
    },5000)
})
bot.login(process.env.token);
