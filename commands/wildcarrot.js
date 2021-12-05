const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wildcarrot')
		.setDescription('wildcarrot'),
	async execute(interaction) {
		return interaction.reply('Wild carrots have something of a magical property to them. Aside from shapeshifting slightly when taken out of a bowl, they like to sleep at shrines to the dead. They have told me that if you allow them to rest undisturbed for a lifetime, that they will thank you with riches.\n\n...Oh, you want to know more? How am I supposed to talk to them? They\'re just a plant, silly.');
	},
};