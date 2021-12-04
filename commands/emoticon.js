const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emoticon')
		.setDescription('How to stop Discord from automatically changing your emoticons into emojis'),
	async execute(interaction) {
		return interaction.reply('How to stop Discord from automatically changing your emoticons into emojis\n\n1. You must be on PC to change this setting.\n2. Go to user settings (the gear in the bottom left)\n3. Find the \'Text & Images\' tab\n4. Deselect the setting \'Automatically convert emoticons in your messages to emoji\'\n\n\:\)');
	},
};