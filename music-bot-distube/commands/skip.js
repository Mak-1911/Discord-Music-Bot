const Discord = require('discord.js');
module.exports = {
    name: "skip",
    aliases: ["leap"],
    inVoiceChannel: true,
    run: async(client, message) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.channel.send({embeds:[
            new Discord.MessageEmbed()
            .setTitle("SKIP ERROR")
            .setColor("RED")
            .setDescription(`${client.emotes.error} | There is nothing in the queue right now`)
        ]})
        try {
            const song = await queue.skip()
            message.channel.send(`${client.emotes.success} | Skipped! Now playing:\n${song.name}`)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | ${e}`)
        }
    
    }
}