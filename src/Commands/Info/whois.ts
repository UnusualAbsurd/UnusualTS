import { MessageEmbed } from 'discord.js';
import moment from 'moment'
import { Command } from '../../Interfaces';


export const command: Command = {
    name: 'whois',
    aliases: ['userinfo'],
    description: 'Sends information about a user',
    category: 'info',
    run: async (client, message, args) => {

        const member = message.mentions.members?.first() || message.guild?.members.cache.get(args[0]) || message.member;

        message.reply({
            embeds: [
                new MessageEmbed()
                .setAuthor(`${member?.user.tag} Information`, member?.user.displayAvatarURL({dynamic: true}))
                .setColor(client.color)
                .setTimestamp()
                .setThumbnail(member?.user.displayAvatarURL({dynamic: true}))
                .addField(`UserID`, `\`${member?.id}\``)
                .addField(`Account Creation`, `${moment(member?.user.createdAt).format('DD-MM-YYYY [at] HH:mm')} - ${moment(member?.user.createdAt).fromNow()}`, true)
                .addField(`Joined Date`, `${moment(member?.joinedAt).format('DD-MM-YYYY [at] HH:mm')} - ${moment(member?.joinedAt).fromNow()}`, true)
            ]
        })
       
    }
}