const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wipe')
		.setDescription('Guide about map wipes in 2HOL'),
	async execute(interaction) {
		return interaction.reply('A map wipe is the deletion of the current world and everything built in it, this includes even your private seed as this is also a part of the world but usually just far far away. **Don\'t worry, this is not done often.**\n\nMape wipes are necessary so that certain new content can be added to the game. Any naturally generated feature such as a biome or plant will only appear after a wipe. A map wipe happens about two or three times a year, but there is no fixed schedule and it is up to the devs to decide when one is necessary.');
	},
};