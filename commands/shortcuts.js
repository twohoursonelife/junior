const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shortcuts')
		.setDescription('How to use command shortcuts'),
	async execute(interaction) {
		return interaction.reply({
            content: '**Command Shortcuts**\nYou can find and edit your list of command shortcuts in the main menu by clicking `Settings` then `Advanced`. Command shortcuts are accessed using your number keys, in the order you see them in the list.\n\nYou can set anything you\'d usually be able to say as a command shortcut, from `I AM JONES` to `/DIE` or `DO YOU KNOW YUM?`. They\'re especially useful to quickly access commands like `/FIND`, allowing you to press a single key and immediately start typing your search.\n\nWhen using your shortcuts remember that normal character limits still apply.',
		});
	},
};