const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['akmontgomery@att.net:cole3008',
'michaelcrowther20@hotmail.com:As118977',
'jaminoussalah@gmx.de:RockLee92',
'bliss.morgan@gmail.com:slithy1981',
        ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["VIP"].includes(r.name))) {
        message.channel.send(`:tada:You Just Generated a Spotify Account:tada:`)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Sucefully Generated a Spotify Account!")
            .addField("Your spotify Account", (minecraft()), true)
			.addField("Support", `\nJoin the Support Server for Questions: https://discord.gg/pGYB7QJ`, true)
            .setFooter(`Made by JBTech`)
            .setURL("https://discord.gg/tHhQcfT")
        return message.author.send({ embed });
    } else {
        message.channel.send(`:x:Get VIP to use this Command:x:`);
        message.author.send(`You cannot Use That Command because You aren't a VIP Member,To get VIP Invite 40 Peoples or Just Buy it :) ;),
For more Infos contact a Support Team, Thank you;)`);
    }
}

module.exports.help = {
    name: "+vipspoti"
}
