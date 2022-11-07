const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fertile')
		.setDescription('Guide to what characters can give birth'),
	async execute(interaction) {
		return interaction.reply('Fertility:\n\n**Male:** Never fertile, can\'t have babies.\n**Female, Age 0-14:** Too young, can\'t have babies.\n**Female, Age 15-104:** Fertile, can have babies.\n**Female, Age 105-120:** Too old, can\'t have babies.\n\nWhen you are fertile, you can manually turn off your fertility by saying "no bb". You can turn your fertility back on by saying "gimme bb". In the vanilla client you will hear a \'ding\' sound if you said the phrase correctly. As an eve you are born at age 14, giving you time to say the phrase before becoming fertile. Sidenote, fertility commands don\'t effect ability to breastfeed.');
	},
};