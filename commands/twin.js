const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twin')
		.setDescription('How to Twin (Play with friends)'),
	async execute(interaction) {
		return interaction.reply('How to Twin (Play with friends)\n\nTwinning is the broad term used for spawning with up to 3 friends at the same location at the same time. It is the most convenient way to play with friends.\n\nTo twin, press the [FRIENDS] button. Then you will see a twin code at the top of the screen. Randomly generated twin codes are 3 random words. You can put whatever you want as your twin code as long as it matches what your friend(s) puts in. After you have your twin code written, press the button at the bottom for how many players will be using the code.\nTwins = 2 people\nTriplets = 3 people\nQuadruplets = 4 people\nAfter you have pressed the button, hit [LOGIN] The screen will say "Waiting to be born as twins/triplets/quadruplets." until the last person hits [LOGIN]\n\nIf any of the group has a seed in either seed box, the twins will spawn as eves there. Sadly the eves aren\'t related, but will all have the same model. You can all choose different last names. If multiple people have seeds, the last person with one to hit [LOGIN] will decide where the game places you. If you do not want to spawn as eves, make sure that everyone in the group has removed their seeds. Then, you will spawn as babies to the same mother at the same time. You will be identical twins and all have the same model.');
	},
};