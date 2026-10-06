const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wipe')
		.setDescription('Guide about map wipes in 2HOL'),
	async execute(interaction) {
		return interaction.reply('What is a map wipe?\n\nA map wipe is the deletion of the current world and everything built in it, this includes even your private spawn code as this is also a part of the world but usually just far far away.\n\n**Don\'t worry, this is not done often.** The most recent wipe happened on <t:1788530400:D>.\n\nMap wipes are necessary for a number of reasons, including so that certain new content can be added to the game or resolve a technical limitation. A map wipe happens roughly once a year, though there is no fixed schedule and it will only happen if the developers have a specific reason.');
	},
};
