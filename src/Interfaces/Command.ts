import Client from '../Client/'
import { Message } from 'discord.js'
import { Interface } from 'readline'

interface Run{
    // @ts-ignore
    (client: Client, message: Message, args: String[]);
}

export interface Command{
    name: string,
    description?: string,
    aliases?: string[],
    category?: string,
    run: Run, 
}