import axios from 'axios';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';


export const command: Command = {
    name: 'subreddit',
    aliases: ['sub'],
    description: 'Get a random post from a sub reddit',
    category: 'fun',
    run: async (client, message, args) => {

        const subReddit = args.join(" "); 
        if(!args.length) return message.reply(`Please provide a valid subreddit`)

        let r, response;
        try{
            response = await axios.get(`https://meme-api.herokuapp.com/gimme/${subReddit}`)
            r = response.data;

            if(r.nsfw === true) {
        
                if(!message.channel.nsfw) return message.reply('Looks like this is a NSFW subreddit. Please use this subreddit in a NSFW type channel');
                message.reply({
                    embeds: [
                        new MessageEmbed()
                        .setImage(`${r.url}`)
                        .setTitle(`${r.title}`)
                        .setURL(`${r.postLink}`)
                        .setColor("RANDOM")
                        .setFooter(`🔼 ${r.ups}`)
                    ]
                }).then(msg => {
                    msg.react('🔼')
                    msg.react('🔽')
                })
            } else if(r.nsfw === false) {
                message.reply({        
                    embeds: [
                        new MessageEmbed()
                        .setImage(`${r.url}`)
                        .setTitle(`${r.title}`)
                        .setURL(`${r.postLink}`)
                        .setColor("RANDOM")
                        .setFooter(`🔼 ${r.ups}`)
                    ]
                }).then(msg => {
                    msg.react('🔼')
                    msg.react('🔽')
                })
            }
        }
        catch(err) {
            message.reply(`\`\`\`\n${err}\n\`\`\``)
        }

        


        


    }
}