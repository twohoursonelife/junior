const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('birthday')
		.setDescription('My Birthday!'),
	async execute(interaction) {
		return interaction.reply({
			content: 'My birthday is September 18th! I am 2 years old! I\'d like to thank everyone who came to my party! Shoutout to <@313791022121615361> for winning the most points at my recent party!',
		});
	},
};