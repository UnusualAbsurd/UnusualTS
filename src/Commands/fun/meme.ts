import { Command } from '../../Interfaces';
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

export const command: Command = {
    name: 'meme',
    aliases: [],
    description: "Get a random meme from a sub reddit",
    category: 'fun',
    run: async (client, message, args) => {

        let r, response;
       
        try{
          response = await axios.get('http://meme-api.herokuapp.com/gimme/memes')
          r = response.data;
        }
        catch(err) {
            message.reply(`Error:\n\`\`\`cmd\n${err.stack}\n\`\`\``)
        }
    
        
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