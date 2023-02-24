const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js'); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('membercount')
        .setDescription('Return\'s the member count of this server.'),
    async execute(interaction) {

        const memberCountEmbed = new EmbedBuilder()
            .setTitle(`📊 | **${interaction.guild.name}'s membercount**`)
            .setDescription(`${interaction.guild.name} has **${interaction.guild.memberCount}** members!`);
    
        await interaction.reply({ embeds: [memberCountEmbed] });
    }
}