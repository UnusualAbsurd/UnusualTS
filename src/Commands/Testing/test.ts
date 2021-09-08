import { Command } from '../../Interfaces';

import { MessageEmbed } from 'discord.js'

export const command: Command = {
    name: 'ping',
    aliases: [],
    description: 'Sends the bots latency',
    category: "info",
    run: async (client, message, args) => {

        
        message.reply({
            embeds: [
                new MessageEmbed()
                .setAuthor(`${client.user.tag} Latencies`, client.user?.displayAvatarURL())
                .setDescription(`Bot Latency: **${new Date() - message.createdAt}ms**`)
                .setColor(client.color)
                .setTimestamp()
            ]
        })

    }
}