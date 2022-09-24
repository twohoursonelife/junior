const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twin')
		.setDescription('How to Twin (Play with friends)'),
	async execute(interaction) {
		return interaction.reply('How to Twin (Play with friends)\n\nTwinning is the broad term used for spawning with up to 3 friends at the same location at the same time. It is the most convenient way to play with friends.\n\nTo twin, select "Yes" for the option "Play with friends?" (Found when you load the game, after completing the tutorial). You will now see a field with your "Twin code" select this field for more options. If you will be the first twin, you should select the relevant option on the right of how many will play with you (including yourself). So if you want to spawn with two friends, select "Triplets".\n\nAs the first twin, you can now configure the options for how you will spawn. Follow the spawn guide for more information. Once you press play, you can now give the twin code to your friends to enter and join. You will all spawn at the same time after the last person enters the code and press play.');
	},
};