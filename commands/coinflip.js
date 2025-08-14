const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageFlags } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flip a coin'),
	async execute(interaction) {
		const coin = Math.round(Math.random());
		return interaction.reply({
			content: coin ? 'Heads' : 'Tails',
			flags: MessageFlags.Ephemeral
		});
	},
};