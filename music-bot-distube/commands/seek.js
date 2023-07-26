const Discord = require('discord.js')
module.exports = {
    name: "seek",
    inVoiceChannel: true,
    run : async(client, message,args) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.channel.send(`${client.emotes.error} | Nothing is in the queue`)
        if (!args[0]) {
            return message.channel.send({embeds:[
                new Discord.MessageEmbed()
                .setTitle("Error While Seeking")
                .setDescription("Please provide position (in seconds) to seek!")
                .setColor("RED")
            ]})
        }
        const time = Number(args[0])
        if (isNaN(time)) return message.channel.send({embeds:[
            new Discord.MessageEmbed()
            .setTitle("Error While Seeking")
            .setDescription("Please Enter a Valid Number to seek to!")
            .setColor("RED")
        ]})
        queue.seek(time)
        message.channel.send({embeds:[
            new Discord.MessageEmbed()
            .setTitle("SUCCESSFULLY SEEKED!")
            .setDescription(`Seeked the song to ${time} seconds!!`)
            .setColor("RED")
            .setFooter({text:`Requested by: ${message.member ? message.member.displayName : message.author.username}`, iconURL: message.author.displayAvatarURL()})
        ]})
    }
}