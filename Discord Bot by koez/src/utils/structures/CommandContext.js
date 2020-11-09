module.exports = class CommandContext {
    constructor (context, args, cmd, prefix) {
      this.context = context
      this.args = args
      this.cmd = cmd
      this.prefix = prefix
  
      this.content = context.content
      this.guild = context.guild
      this.member = context.member
      this.author = context.author
      this.channel = context.channel
      this.mentions = context.mentions
      this.client = context.client
      this.lavalink = context.client.lavalink
      this.config = context.client.config
    }
  }
  