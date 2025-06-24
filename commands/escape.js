const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('escape')
		.setDescription('What\'s in the escape menu?'),
	async execute(interaction) {
		return interaction.reply({
            content: '**Escape Menu**\nYou can find a lot of useful information by pressing the escape key in game.\nSee the first page for a list of available emotes and other `/` commands.\nPress `[next]` in the bottom right corner to see a list of keyboard and mouse controls, and `[next]` again to see more useful keybinds including keys for the in game crafting guide.',
		});
	},
};