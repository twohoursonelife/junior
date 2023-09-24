const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('craving')
		.setDescription('Cravings'),
	async execute(interaction) {
		return interaction.reply('Cravings are a more advanced feature to the simple yum chain. After age 10, the name of a random food will appear above your food meter, followed by the number of levels that such food will increase your "LEVEL" by. Even if you have already eaten the food previously and it would\'ve been meh, cravings will still offer their bonuses.\n\nCravings are designed to push you to advance or look into interesting foods you wouldn\'t make otherwise. The types of food that appear as your craving are determined by the level of complexity of foods eaten by members of your family. If you are an eve, your first few cravings will be simple forgeables, such as apples, and will slowly progress to being more complicated, such as bread.\n\nYou can never lose your craving once you have it, and any children you have will inherit the craving. Each family has a unique craving path, so your next craving will be the same as your children\'s next craving.');
	},
};