const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['dinoh954@gmail.com:Poljice202',
'sofiapalma185@gmail.com:bongo185',
'aaron_loo@hotmail.com:Home3521',
'leekendall87@gmail.com:hateehc',
'dead_hearts@hotmail.com:1ookya',
'chads2600@gmail.com:Llumar01',
'sondre.dahle@hotmail.com:rinto221',
'kg889017@gmail.com:skull0690',
'rafael.colon5@gmail.com:rjcm1515',
'al81983@gmail.com:hikakiq2',
'michael.ogorman@gmail.com:ka1tl1nemma',
'tvwhip@gmail.com:02lancer',
'xd-----@hotmail.com:tropica1',
'sara_isa_muffin@hotmail.co.uk:hohoho',
'mantheship@gmail.com:Ipod93lamp',
'Snakeman561@gmail.com:Kitkat56',
'aspiregamingexp@gmail.com:Cojo170223',
'enigma_tkl@hotmail.com:lagarto',
'tho.overeem@hotmail.com:wf1907v',
'josephgkim1221@gmail.com:9918703',
'singingtear@gmail.com:undertaker!1',
'stevenm0912@hotmail.co.uk:Pinkfish1993',
'isaac.mack@aol.com:GeorgiaPat0',
'colinbailey1988@gmail.com:Md2bntht',
'joshdjones@charter.net:Zxyte206',
'atrikones@gmail.com:Annika1429',
'pierre-alban-69@hotmail.fr:11021998pad',

        ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["@everyone"].includes(r.name))) {
        message.channel.send(`:tada:You Just Generated a Minecraft Account:tada:`)
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTimestamp()
            .setTitle("Sucefully Generated a Minecraft Account!")
            .addField("Your Minecraft Account", (minecraft()), true)
            .setFooter(`Made by JBTech#6428`)
            .addField("Support Server", `\nJoin the Support Server for Questions: https://discord.gg/pGYB7QJ`, true)
            .setURL("https://discord.gg/tHhQcfT")
        return message.author.send({ embed });
    } else {
        message.channel.send(`:x:You can't use That Command,Get VIP to use it ;):x:`);
        message.author.send(`You cannot Use That Command because You aren't a VIP Member,To get VIP Invite 40 Peoples or Just Buy it :) ;),
For more Infos contact a Support Team, Thank you;)`);
    }
}

module.exports.help = {
    name: "+mc"
}
