const distube = require('distube')
module.exports = {
    name : "resume",
    aliases : ["unpause","continue"],
    inVoiceChannel : true,
    run : async (client, message) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.channel.send("Nothing in the queue to resume!")
        else
        queue.resume()
        return message.channel.send(`Resumed successfully!! ${client.distube.song}`)

    }

}