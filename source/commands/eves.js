const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('everythingessentially')
        .setDescription('Return\'s information about EverythingEssentially'),
    async execute(interaction) {
        const esevInfoEmbed = new EmbedBuilder()
            .setTitle('🧑‍💻 | EverythingEssentially')
            .setDescription(`EverythingEssentially is an development series which continas many things, like discord bots, minecraft plugins, development support, an community and way much more. OverRated is an discord bot which is a part of this series and developed by EverythingEssentially also know as EvEs. EvEs is a part of KarloDevelopingStudios (5%). About KarloDevelopingStudios (KDS) its another story. 
            
            There are some useful servers: 
            - https://dsc.gg/thelastgeneration - TheLastGeneration by KDS (||*promoted*||)
            
            - https://dsc.gg/karlodevelopingstudios - KarloDevelopingStudios 
            
            - https://disord.eves.tk/ - This discord
            
        `)

        await interaction.reply({ embeds: [esevInfoEmbed] })
    }
}