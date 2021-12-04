const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('seed')
		.setDescription('Guide about seeds in 2HOL'),
	async execute(interaction) {
		return interaction.reply('What are Seeds in 2HOL?\n\nA seed is a case sensitive "password" (and can include numbers and symbols) which will generate coordinates on the map as a location for you (or anyone else) to spawn. The same phrase will always spawn you at the same coordinates until the map is wiped. You should make your seed difficult to guess and keep it a secret if you do not want others to find you. Remeber that you are still in the same world as everyone else though and other players may happen to accidentally stumble into your area.\n\nThere are two ways to make a seed:\n**For the official 2HOL client,** from the main menu, click settings. Enter your desired seed into the box at the bottom titled \'Spawn Seed\', your 5 most recent seeds will also be saved for you. You can now go back to the main menu and login to spawn at the seed location.\n**For any other client such as Hetuw (also works for the official client),** on the main, click into the username field. At the end of your username type in the pipe character "|" (under the backspace key, using shift). Do not add any spaces. Enter your desired seed after the pipe character and login to spawn at the seed location.');
	},
};