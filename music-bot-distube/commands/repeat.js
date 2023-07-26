const Discord = require('discord.js');
module.exports = {
    name: "repeat",
    aliases: ["loop", "rp"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("Error Looping!")
            .setDescription("`${client.emotes.error} | There is nothing playing!`")
            .setColor("RED")
        ]})
        let mode = null
        switch (args[0]) {
            case "off":
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }
        mode = queue.setRepeatMode(mode)
        mode = mode ? (mode === 2 ? "Repeat queue" : "Repeat song") : "Off"
        message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("Succesfully Looped! ")
            .setDescription("`${client.emotes.repeat} | Set repeat mode to \`${mode}\``")
            .setColor("GREEN")
        ]})
    }
}