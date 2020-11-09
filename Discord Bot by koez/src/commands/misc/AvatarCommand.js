const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")


module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('avatar', 'avatar', ['misc'], 'avatar');
  }

  async run(client, message, args) {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
     let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

     let embed = new Discord.MessageEmbed() 
    .setColor(`RANDOM`) 
    .setTitle(`Avatar ${user.username}`) 
    .setImage(avatar) 
    .setFooter(`• Asked by: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
    await message.channel.send(embed); 
  }
}