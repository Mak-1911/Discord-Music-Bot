const Discord = require('discord.js')
module.exports = {
    name: "volume",
    aliases: ["amplify","setvolume","sv"],
    inVoiceChannel: true,
    run: async(client,message,args) => {
        const queue = client.distube.getQueue(message)
        if(!queue) return message.channel.send({embeds:[
            new Discord.MessageEmbed()
            .setTitle("Volume change Error")
            .setDescription(`${client.emotes.error} There is nothing in the stream`)
            .setColor("RED")
        ]})
        let volume = parseInt(args[0])
        volume = volume > 100 ? 100 : volume < 0 ? 0 : volume;
        if(isNaN(volume)) return message.channel.send({embeds:[
            new Discord.MessageEmbed()
            .setTitle("VOLUME ERROR!")
            .setDescription(`${client.emotes.error} Please enter a valid volume number!`)
            .setColor("RED")
        ]})
        queue.setVolume(volume)
        message.reply({embeds:[
            new Discord.MessageEmbed()
            .setTitle("Volume changed!")
            .setDescription(`🔊 | Volume successfully changed to ${volume}%`)
            .setColor("GREEN")
        ]})
    }
}