const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('moreguides')
		.setDescription('More guides from Non C'),
	async execute(interaction) {
		return interaction.reply('For more guides from Dad <3 https://discord.gg/pb94MbTeFN');
	},
};