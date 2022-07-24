const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('Replies with Junior\'s current version.'),
	async execute(interaction) {
		fs.readFile('version.txt', 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return interaction.reply({
					content: 'Error, version unknown.',
					ephemeral: true
				});
			}

			return interaction.reply({
				content: 'v' + data,
				ephemeral: true
			});
		});
	},
};