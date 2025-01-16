const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pvp')
		.setDescription('pvp in 2HOL'),
	async execute(interaction) {
		return interaction.reply('2HOL isn\'t the place for PVP, which is why we are excited to announce the next game in the 2HOL Shared Universe! Releasing on the 32nd of next month: 2HOL Battle Royale! Check out the trailer [here](<https://www.youtube.com/watch?v=dQw4w9WgXcQ>).');
	},
};