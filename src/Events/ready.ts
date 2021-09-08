import { Event } from '../Interfaces'

export const event: Event = {
    // @ts-ignore
    name: 'ready',
    run: (client) => {
       console.log(`${client.user.tag} is now online! Stats: ${client.guilds.cache.size} Servers`)
       client.user.setActivity(`-help | ${client.guilds.cache.size} Servers`)
       setInterval(async() => {
        client.user.setActivity(`-help | ${client.guilds.cache.size} Servers`)
       }, 30000)
    }
}