const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('birthday')
		.setDescription('My Birthday!'),
	async execute(interaction) {
		return interaction.reply({
			content: 'My birthday is September 18th! I am 1 year old! I\'d like to thank everyone who came to my party! Special shoutout to Helenbrait for winning the most points in the games!',
		});
	},
};