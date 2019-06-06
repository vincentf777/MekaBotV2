const Discord = require('discord.js');

module.exports = (meka, msg, args) => {
  const embed = new Discord.RichEmbed()
  	.setTitle(msg.guild.name)
  	.setColor(0xe91e63)
    .setDescription(`Welcome to ${msg.guild.name}!`)
    .setThumbnail(msg.guild.iconURL)
    .setFooter(`${msg.guild.owner.user.username} - Server Owner`, msg.guild.owner.user.avatarURL)
  msg.channel.send({embed});
};