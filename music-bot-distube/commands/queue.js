const Discord = require('discord.js')
module.exports = {
    name: "queue",
    aliases: ["q"],
    inVoiceChannel: true,
    run: async(client,message) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("QUEUE ERROR!")
            .setDescription("There is nothing playing!")
            .setColor("RED")
        ]})
        const q = queue.songs
        .map((song,i) =>`${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join("\n")
        message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("SONGS IN THE QUEUE! 📄 ")
            .setDescription(`**Server Queue is** \n${q}`)
            .setColor("#A652BB")
            
        ]})
    }
}