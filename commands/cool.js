const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cool')
		.setDescription('How 2 b kool'),
	async execute(interaction) {
		return interaction.reply('How to be cool on the 2HOL Discord\n\n**1.** Join and immediately say “Wow this game is dead.”\n**2.** Ignore literally the 3 years of hard work from the devs only to focus on the fact that no one has sent a discord message in 2 hours and there\'s 5 people in game.\n**3.** Don\'t listen to the people defending the game and call them toxic.\n**4.** Accept help from no one in this game that revolves around people working together.\n**5.** Call the game a shameless rip off of OHOL, disregarding the premise of open source.\n**6.** Leave the server in anger at the \'toxic community\'.');
	},
};