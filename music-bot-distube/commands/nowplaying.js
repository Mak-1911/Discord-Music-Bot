const { MessageEmbed } = require('discord.js');
const { DisTube } = require("distube")
const progressbar = require('string-progressbar');
module.exports = {
    name: "nowplaying",
    aliases: ["np","currenttrack"],
    args: false,
    inVoiceChannel: true,
    botPermissions: ["SEND_MESSAGES"],
    owner: false,
    run: async(client,message,args) => {
        const queue = client.distube.getQueue(message);
        if(!queue) message.channel.send( {embeds:[
            new MessageEmbed()
            .setTitle("Error NowPlaying!")
            .setDescription(`${client.emotes.error}| There is nothing Playing!`)
            .setColor("RED")
        ]})
        let currentSong = queue.songs[0];
        var total = currentSong.duration * 1000;
        var current = queue.currentTime * 1000;
        var size = 30;
        var line = "▬";
        var slider = "🔘";


        let embed = new MessageEmbed()
            .setTitle('🎵 Now Playing')
            .setDescription(`${progressbar.splitBar(total, current,size,line,slider)} \n ${currentSong.name}`)
            .setThumbnail(currentSong.thumbnail)
            .setColor("RED")
        message.channel.send({ embeds: [embed] });
    }
}