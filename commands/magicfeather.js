const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('magicfeather')
		.setDescription('The Magic Feather Guide'),
	async execute(interaction) {
		return interaction.reply('Magic feathers are one of few relics that remain of the long-forgotten times. They are also some of the most powerful. They can tear down ancient walls, grow a fruit tree, long extinct, and... um... turn into a helicopter. Look, don\'t question it. Those times were weird. Because of their power, they can\'t be trusted with just anyone. Only the devs and mods can create them.');
	},
};