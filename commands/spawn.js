const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spawn')
		.setDescription('Guide about spawning'),
	async execute(interaction) {
		return interaction.reply('What happens when you spawn into the world?\n\n**Playing with friends?**\nIf playing with friends, follow the "twinning" guide. "No" is the default option.\n\n**Specific spawn:**\n**- Family name:** Enter the desired family surname. You will spawn as a baby to an eligible fertile female of that family. You will get an error if there is no family by that name or eligible mother.\n**- Spawn code:** Enter the desired spawn code. You will spawn as an Eve wherever that spawn code takes you.\n\n**Random spawn:** This is the default choice. If there is an eligible fertile female in the world, you will spawn as their baby. If there is not a fertile female in the world, you will spawn as an Eve in the center of the map, or at one or more predetermined spawn codes, depending on server settings at the time.');
	},
};