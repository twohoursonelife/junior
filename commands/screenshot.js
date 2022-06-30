const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('screenshot')
		.setDescription('How to screenshot 2HOL'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Press: alt + enter to go into windowed mode\nPress: alt + print screen to take a screengrab\nPaste into Paint 3D or equivalent.\nCrop as needed.\n\nTo get back out of windowed mode, press alt + enter again.',
		});
	},
};