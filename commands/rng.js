const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rng')
		.setDescription('Random number generator'),
	async execute(interaction) {
		return interaction.reply(String(Math.floor((Math.random() * 100) + 1)));
	},
};