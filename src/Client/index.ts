import { Client, Collection } from 'discord.js';
import { read, readdirSync } from 'fs'
import path from 'path'
import {Command, Event, Config} from '../Interfaces'
import env from 'dotenv'
env.config();

class ExtendedClient extends Client{
  public commands: Collection<string, Command> = new Collection()
  public events: Collection<string, Event> = new Collection()
  public aliases: Collection<string, Command> = new Collection();
  public color = '#787cfc';
  public perm = function(permission: string) {
    return `You need \`${permission}\` permission to run this command.`
  }

  public async init() {
      this.login(process.env.token)

      /** Commands */
      const commandPath = path.join(__dirname, "..", "Commands")
      readdirSync(commandPath).forEach((dir) => {
          const commands = readdirSync(`${commandPath}/${dir}`).filter((file) => file.endsWith('.ts'));
          for(const file of commands) {
              const { command } = require(`${commandPath}/${dir}/${file}`)
              this.commands.set(command.name, command);
              if(command?.aliases.length !== 0) {
                  // @ts-ignore
                  command.aliases.forEach((alias) => {
                      this.aliases.set(alias, command)
                  })
              }
          }
      })

      /** Event */

      const eventPath = path.join(__dirname, "..", "Events")
      readdirSync(eventPath).forEach(async(file) => {
          const { event } = await import(`${eventPath}/${file}`)
          this.events.set(event.name, event);
          console.log(event);
          this.on(event.name, event.run.bind(null, this))
      })

  }
}

export default ExtendedClient;