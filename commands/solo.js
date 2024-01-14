const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('solo')
		.setDescription('How to play 2HOL solo'),
	async execute(interaction) {
		return interaction.reply('How to play solo or as a single player\n\nUsing a spawn code is the easiest way to play alone. While you will be on the same map as other players, a spawn code allows you to find an isolated space to play.\n\nSay \"no bb\" in game each life to become infertile. If you decide you\'d like to have children later \"yes bb\" will make you fertile again.\n\nUse /spawncodes to find out more.\n\nIf you want a completely isolated experience you will need to set up your own server, this is a technically advanced process https://github.com/risvh/miniOneLifeCompile');
	},
};