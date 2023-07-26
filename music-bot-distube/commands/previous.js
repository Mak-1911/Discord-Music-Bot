const Discord = require('discord.js')
module.exports = {
    name : "previous",
    aliases: ["lastsong","ls"],
    inVoiceChannel: true,
    run: async(client,message) => {
        const queue = client.distube.getQueue(message)
        if(!queue) return message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("PLAY ERROR! 👎")
            .setDescription(`${client.emotes.error} | There is nothing in the queue.`)
            .setColor("RED")
        ]})
        const song = queue.previous()
        message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("PREVIOUS SONG 🎶")
            .setDescription(`Playing Song : \n ${song.name} - ${song.formattedDuration}`)
        ]})
    }
}