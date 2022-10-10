const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('notavirus')
		.setDescription('Quick info that the game is not a virus'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Rest assured, the game is not a virus.\n2HOL is a relatively small project, some antivirus programs are simply showing false positives.\nWe\'re working hard to fix this in future thanks to kind donations from our community, allowing us to purchase certificates to authenticate with Microsoft.\n\nPlease see that we have 17,000+ members in this Discord as well as many who have hundreds, if not thousands of hours online at any time. https://discord.gg/Jd9Es3f\nThe project is also open source, allowing code to be verified here https://github.com/twohoursonelife/OneLife',
		});
	},
};