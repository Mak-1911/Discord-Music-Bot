module.exports={
    name : "pause",
    aliases : ["pause","hold"],
    inVoiceChannel : true,
    run : async (client, message) => {
        const queue = client.distube.getQueue(message);
        if (!queue) return message.channel.send( `${client.emotes.error} | No song is playing right now!!`);
        else
        queue.pause();
        return message.channel.send("Paused the currently playing song")
    } 
}