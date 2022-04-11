const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brickhead')
		.setDescription('brickhead?'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Dragon is the brick lord!'
		});
	},
};