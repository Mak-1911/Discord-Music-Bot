const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: "stop",
    aliases: ["disconnect","leave"],
    inVoiceChannel: true,
    run: async(client,message) => {
        const queue = client.distube.getQueue(message);
        if (!queue) return message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle("Error Stopping!")
            .setDescription("`${client.emotes.error} | There is nothing playing!`")
            .setColor("RED")
        ]})
        let stopEmbed = new Discord.MessageEmbed()
        .setTitle("MUSIC STOPPED!!")
        .setDescription("Stopped the Music! 🛑")
        .setColor("RED")
        .setThumbnail(client.user.displayAvatarURL());
        // const resume = new MessageActionRow()
		// 	.addComponents(
		// 		new MessageButton()
		// 			.setCustomId('primary')
		// 			.setLabel('Primary')
		// 			.setStyle('PRIMARY'),
		// 	);
        queue.stop()
        message.channel.send({embeds: [stopEmbed]});

    }
}