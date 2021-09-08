import Client from './Client';
import { Intents } from 'discord.js'
const int = Intents.FLAGS

new Client({
    intents: [
        int.GUILDS,
        int.GUILD_MEMBERS,
        int.GUILD_MESSAGES,
    ]
}).init();