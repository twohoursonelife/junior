const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('seed')
		.setDescription('Guide about seeds in 2HOL'),
	async execute(interaction) {
		return interaction.reply('What are Seeds in 2HOL?\n\nA seed is a case sensitive "password" (and can include numbers and symbols) which will generate coordinates on the map as a location for you (or anyone else) to spawn. The same phrase will always spawn you at the same coordinates until the map is wiped. You should make your seed difficult to guess and keep it a secret if you do not want others to find you. Remeber that you are still in the same world as everyone else though and other players may happen to accidentally stumble into your area.\n\nThere are two ways to make a seed:\nFor the official 2HOL client, from the title screen, click the rectangle that says ”SPAWN SEED”. Type in your decided seed. Previous seeds that you have used will appear above the rectangle for you to click on, as well. Then, simply click the [SEED] button to spawn with that seed. (Clicking [BE BORN] on the title screen will always ignore the seed inputted. If you are twinning, however, clicking the [BE BORN] in the bottom right corner of the [FRIENDS] tab WILL take your seed into account. Remember to remove it if you want to spawn as twin as babies.\nFor any other client such as Hetuw, on the main, click into the username field. At the end of your username type in the pipe character "|" (under the backspace key, using shift). Do not add any spaces. Enter your desired seed after the pipe character and login to spawn at the seed location.');
	},
};