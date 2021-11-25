const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spawnas')
		.setDescription('Guide for the different ways to spawn into the game.'),
	async execute(interaction) {
		return interaction.reply('Different ways to spawn into the game:\n\n**Be born as a baby:** Make sure you have no seed input and simply click login. You will spawn as the son or daughter to any fertile woman on the server. This is the only guaranteed way to see other players as you play, because you will at least have a mother, but likely an entire family around you.\n**Spawn to a specific woman:** Repeat the same steps as being born to a random woman and use the command /die to kill yourself and be blocked from spawning to the same woman until you find the one you\'re looking for.\n**Spawn as Eve and start your own family:** Input any characters as a seed and then click login. You will spawn as a 14 year old girl usually in wilderness. There is always a chance that a seed might drop you near someone else\'s town, so if you want the full starting from scratch experience, you might have to try multiple times.\n\nA list of public seeds of various levels of tech can be found on the wiki here: https://twohoursonelife.fandom.com/wiki/Spawn_seeds. You are never guaranteed to see other players when using a seed. You will spawn alone and only have a chance of having babies if other players follow options 1 or 2.');
	},
};