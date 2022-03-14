const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sus')
		.setDescription('sus'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Rainie is sus, but I think Liger bit someone...',
			ephemeral: true
		});
	},
};