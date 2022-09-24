const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spawncodes')
		.setDescription('Guide about Spawn Codes in 2HOL'),
	async execute(interaction) {
		return interaction.reply('What are Spawn Codes in 2HOL?\n\n*Spawn codes are the new name for "Seeds". This new name is intended to be more descriptive and avoid confusion with the term used in other games. Please avoid using the old name.*\n\nA spawn code is a case sensitive "password" (and can include numbers and symbols) which will generate coordinates on the map as a location for you (or anyone else) to spawn. The same phrase will always spawn you at the same coordinates until the map is wiped. You should make your spawn code difficult to guess and keep it a secret if you do not want others to find you. Remember, that you are still in the same world as everyone else though and other players may happen to accidentally stumble into your area.\n\nAssuming you have complete the tutorial, you will be presented with a "Where to spawn?" option when loading the game. Change from the default select of "Random" to "Specific" which will then give you an option to click and enter a spawn code. After selecting this, you can then enter your spawn code into the field. This is a protected field which will be hidden like a password once you click out of it. Click "Play" to spawn at the spawn code location. You can later change your spawn code or change back to random spawn.');
	},
};