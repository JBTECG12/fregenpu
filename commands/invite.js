const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTitle(":tada:Click To Invite Me:tada:")
            .setURL("https://discordapp.com/oauth2/authorize?client_id=482871165514154005&permissions=8&scope=bot")
    return message.channel.send({ embed });
}

module.exports.help = {
    name: "+invite"
}



