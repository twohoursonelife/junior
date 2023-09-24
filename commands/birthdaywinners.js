const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('birthdaywinners')
		.setDescription('Birthday winners'),
	async execute(interaction) {
		return interaction.reply({
			content: 'These are the first place winners of my past birthday parties!\n\nhelenbrait\njohnnychaotic',
		});
	},
};