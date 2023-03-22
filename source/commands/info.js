// /info command (overrated)
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('information')
        .setDescription('Get information about the bot.'),
    async execute(interaction) {

        const informationEmbed = new EmbedBuilder()
            .setTitle(`🤖 | Information on the bot`)
            .setDescription(`This is the official OverRated bot. This is the ${lang.lang} version. This version is developed and managed by KDS. More info at: https://github.com/KarloYT/overrated-source`)
    }
}