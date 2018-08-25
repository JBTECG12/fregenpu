const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTimestamp()
            .setTitle("Here are the Bot Commands  ;)")
            .addField("User Commands", `\n++mc: Get a 30% Working Minecraft Account!
++about: Shows Bot Infos!
++suggest [Suggestion]: Suggest Something!
++ping: I wonder what this does?;)
++google [Name]: Googles Something!
++invite: Invites the Bot to your Server
++uptime: Shows for how Long the Bot was Online
++support: Join the Support Server
++help: Shows this Message!`, true)
            .addField("Fun Commands", `\n++rps: Rock, Paper, Scissors.
++8ball [Answer]
++flipcoin: Flips a Coin
++plength[User]: Shows the Penis Length`, true)
            .addField("VIP Commands", `\n++vipmc: Get A 99% Working Minecraft Account
++vipspoti: Get a Spotify Premium Account!
++vipuplay: Get a Uplay Account with Games
++hmavpn: Get a HMA VPN Code [Disabled]`, true)
            .addField("Admin Commands", `\n++purge [Number]: Purges X amount of messages!
++setgame [Game}: Sets the Bot game [Just JBTECH]
++say [Text]: Made the Bot to say Something!
++kick [User] [Reason]: Kicks a User
++ban [User] [Reasaon]: Ban a User
++unban [User or ID] [Reason]: Unbans a User`, true)
            .setURL("https://discord.gg/XPH9pbK")
            .setFooter(`Made by JBTech`);
    return message.channel.send({ embed });
}

module.exports.help = {
    name: "+help"
}
