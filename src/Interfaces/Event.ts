import Client from '../Client'
import { ClientEvents } from 'discord.js'

interface Run{
    // @ts-ignore
    (client: Client, ...args: tring[])
}

export interface Event {
    name: keyof Client,
    run: Run
}
