import { MessageEmbed, MessageButton, MessageActionRow, Emoji } from 'discord.js';
import { Command } from '../../Interfaces';


export const command: Command = {
    name: 'help',
    aliases: ['commands'],
    description: 'List of commands that is in the bot',
    run: async (client, message, args) => {

       
        if(!args.length) {
            const main = new MessageEmbed()
            .setAuthor(`${client.user.tag} Commands List`, client.user?.displayAvatarURL())
            .setDescription(`Do -help <command name> to get more information of the command.`)
            .setColor(client.color)
    
            var info_array = [];
            var fun_array = [];
    
            client.commands.forEach(command => {
                switch(command.category) {
                    case 'info'.toLowerCase(): 
                      info_array.push(command);
                    break
                    case 'fun'.toLowerCase():
                       fun_array.push(command);
                    break
                }
            })
    
            const info_cmds = info_array.map((command) => `\`${command.name}\``);
            const fun_cmds = fun_array.map((command) => `\`${command.name}\``)
            main.addField(`Information Commands 📜`, `${info_cmds}`)
            main.addField(`Fun Commands 🎈`, `${fun_cmds}`)
    
            message.reply({embeds: [main]})
        }

        if(args.length) {
            const cmds = client.commands.get(args[0]);
            if(!cmds) return message.reply(`Error: \`Command does NOT exist.\``) || client.aliases.get(args[0])
            if(cmds) {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.color)
                        .setAuthor(`-${cmds.name}`, client.user?.displayAvatarURL())
                        .addField(`Description`, `> ${cmds.description || "No Description"}`, true)
                        .addField(`Aliases`, `${cmds.aliases?.join(", ") || "No Aliases"}`, true)
                    ]
                })
            }
        }



        

        

    }
}