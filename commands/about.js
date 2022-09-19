const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('All about me!'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Hello! I am Non-C Junior, your friendly neighborhood guide-spam bot! Created by Colin to save my other dad some time as he works as the human version of that idea that a monkey hitting keys for long enough will eventually result in something useful, I have many features, including posting Non-C\'s guides, insight on some of the mysterious things you might find in the wonderful 2HOL world, trying my best to make this place fun, and more!\n\nAll of the guides that I post come from Non-C\'s Guide Directory. If you\'re interested in joining the Discord server for them, use the command /directory. You can look through guides, see their commands to let me know to post them in the 2HOL server, and suggest new ones be written!\n\nI hope to see you around! Junior slep now!',
		});
	},
};