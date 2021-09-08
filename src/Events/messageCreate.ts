import { Event, Command } from '../Interfaces'
import { Message } from 'discord.js'

export const event: Event = {
    // @ts-ignore
    name: 'messageCreate',
    run: (client, message: Message) => {
        if(
            message.author.bot ||
            !message.guild ||
            !message.content.startsWith('-')
        ) return;

        const args = message.content
        .slice('-'.length)
        .trim()
        .split(/ +/g);

       

    
 
    

        const cmd = args.shift()?.toLowerCase()
        if(!cmd) return;
        const command = client.commands.get(cmd) || client.aliases.get(cmd);
        // @ts-ignore
        if(command) (command as Command).run(client, message, args);
    }
}