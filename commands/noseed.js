const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('noseed')
		.setDescription('iTs aKsHullY sPawN cOde'),
	async execute(interaction) {
		return interaction.reply('"Seeds" have been renamed to "Spawn Codes". This new name is intended to be more descriptive and avoid confusion with the term used in other games. Please avoid using the old name and update references to it wherever possible.');
	},
};