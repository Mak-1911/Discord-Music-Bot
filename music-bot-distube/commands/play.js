const Discord = require('discord.js')
module.exports ={
    name: "play",
    aliases: ["p"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const string = args.join(" ");
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
        client.distube.play(message, string)

        const status = queue =>
    `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(", ") || "Off"}\` | Loop: \`${
        queue.repeatMode ? (queue.repeatMode === 2 ? "All Queue" : "This Song") : "Off"
    }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``

    client.distube
    .once("playSong", (queue, song) =>
    message.channel.send(
        {embeds: [
            new Discord.MessageEmbed()
            .setTitle("PLAYING MUSIC!! <a:vibe:934817778408497182>")
            .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`)
            .setColor("DARK_PURPLE")
            .setThumbnail(song.thumbnail)
            .setFooter({text:`Requested by: ${message.member ? message.member.displayName : message.author.username}`, iconURL: message.author.displayAvatarURL()})
            // title: 'Playing music!!',
            // description: `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`,

        ]}
    
    ))
    }
}