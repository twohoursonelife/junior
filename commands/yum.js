const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yum')
		.setDescription('Yum Chaining'),
	async execute(interaction) {
		return interaction.reply('Yum is possibly the most important mechanic to learn in 2HOL. To yum chain allows for food security and the ability to go much, much longer without eating.\n\nWhen you hold a food, your character will say either "YUM" or "MEH". Every food is yum once per life, and after it is eaten once during a life, it will be meh for the remainder of it. Always strive to eat yum foods because they give bonuses. This means that you should always strive to eat variety, and not rely on a single food source.\n\nEvery time you eat a yum food, your "LEVEL" goes up by 1. Your level matches the bonus food you get for eating that yum food. "BONUS" is extra food that isn\'t in a box. Every food has a set amount of boxes it will fill up, but only yum foods will add to your level and bonus. Your bonus number counts down before your food boxes. Meh foods will only give you base value of the food, which can be good in a pinch, but doesn\'t really fill you up.\n\nIf you keep eating yum foods - "chaining" them, then eventually your bonus will far surpass your food meter, allowing you to go long times without needing to eat.\n\nFor advice on cravings, another yum related feature, type /craving');
	},
};