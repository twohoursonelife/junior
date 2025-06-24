const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('screenshot')
		.setDescription('How to screenshot 2HOL'),
	async execute(interaction) {
		return interaction.reply({
			content: '**Screenshots**\nPress `=` while in game to take a screenshot in .png format. You\'ll find it inside the "Screenshots" folder inside your 2HOL game folder.\nIf your game is in windowed or borderless modes, other default methods will also work, such as Windows snipping tool *(Windows + Shift + S).*\n\nYou can temporarily hide the UI by holding down the grave key ( **\`** ), usually found on the same key as `~`.',
		});
	},
};