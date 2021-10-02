const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('All about me!'),
	async execute(interaction) {
		return interaction.reply('non c should write something here');
	},
};