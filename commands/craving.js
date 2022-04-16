const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('craving')
		.setDescription('Cravings'),
	async execute(interaction) {
		return interaction.reply('You will get your first craving at age 10. Your first craving is what food your mother was craving at the time you were born. Eves spawn with a simple craving.\n\nCravings only change after you have satisfied your previous one. Getting ones that you can fulfill with what you have access to currently in town is down to luck (you may crave roasted fish but not have fishing equipment), and what the rest of your family has previously eaten (if your uncle eats a steak and onion pie and it’s the most advanced thing that your someone in your family has eaten, your family is moved to the “moderate”difficulty for foods). You share the same craving list with your entire family, but some branches may be more progressed than others.');
	},
};