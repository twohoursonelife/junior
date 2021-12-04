const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flip a coin'),
	async execute(interaction) {
		const coin = Math.floor(Math.random());
		return interaction.reply(coin);
	},
};