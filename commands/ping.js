const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageFlags } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Pong!',
			flags: MessageFlags.Ephemeral
		});
	},
};