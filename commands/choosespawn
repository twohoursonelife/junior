const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('choosespawn')
		.setDescription('Can you spawn somewhere specific?'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Can I choose my spawn location?\n\nNo, you cannot choose a specific location for your spawn point, or move a spawn point you already have.\nThink of a spawn code like a password. Each code is permanently tied to one specific spot on the map. This prevents players from instantly teleporting into other players\' towns.\nChoose your town\'s location wisely. If it\'s a long walk from your spawn point, you may want to try a new spawn code to get a better spot. Otherwise, you\'ll have to make that journey every time you play.\nTo learn more, use the command `/spawncodes`',
		});
	},
};