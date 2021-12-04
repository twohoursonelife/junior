const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dye')
		.setDescription('Let me suggest a colour for you'),
	async execute(interaction) {
		const dyes = ["I like red!", "Green is the best!", "Blue would be nice!", "What about black!", "White?", "Maybe yellow?"];
		return interaction.reply(dyes[Math.floor(Math.random() * dyes.length)]);
	},
};