const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spawn')
		.setDescription('Guide about spawning'),
	async execute(interaction) {
		return interaction.reply('What happens when you spawn into the world?\n\n**Using a seed:** You will spawn as an eve wherever that seed dropped you. You can have babies there.\n**Without a seed:** If there **is** a fertile female in the world, you will spawn as a baby at their feet. If there **is not** a fertile female in the world, you will spawn as an Eve in the center of the map. There is a stone with "unless" written on it, to mark the center. The area to the east is called Public Town (PT).');
	},
};