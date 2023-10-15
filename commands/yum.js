const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yum')
		.setDescription('Yum Chaining'),
	async execute(interaction) {
		return interaction.reply('Yum is possibly the most important mechanic to learn in 2HOL. If you keep eating yum foods - "chaining" them, then eventually your bonus will far surpass your food meter, allowing you to go long times without needing to eat.\n\nWhen you hold a food, your character will say either "YUM" or "MEH". Every food is yum once per life, and then becomes meh for the remainder of that life. Always strive to eat yum foods because they give bonuses. This means that you should eat variety, and not rely on a single food source.\n\nYou have a “LEVEL” and a “BONUS”. Your "LEVEL" goes up by 1 each time you eat a yum food. Your "BONUS" is like extra food that isn\'t in a box and counts down before your food boxes. Every food has a base value and an additional bonus value. When you eat a yum food, the base value fills your boxes, and your bonus value increases. You also receive your "LEVEL" as even more bonus.\n\nMeh foods will give you their base value and fill the bonus into any empty boxes. Any bonus remaining after the boxes are filled will be lost, so eating meh can be good in a pinch, but doesn\'t really fill you up.\n\nFor advice on cravings, another yum related feature, type /craving');
	},
};