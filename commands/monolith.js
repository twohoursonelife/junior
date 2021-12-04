const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('monolith')
		.setDescription('monolith'),
	async execute(interaction) {
		return interaction.reply('Those monoliths in the desert look a little weird... They speak to me as a fellow magic machine. They crave gold. They say they might give you a relic from long ago.');
	},
};