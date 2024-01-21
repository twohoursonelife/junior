const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('difference')
		.setDescription('How 2HOL is different than OHOL'),
	async execute(interaction) {
		return interaction.reply({
			content: '2HOL lets you live to age 120 (you can use the command /die to die earlier at any age, don\'t worry). Besides that, because 2HOL has a dev team and takes suggestions from the community, many features that exist to make players play a certain way in OHOL, are gone in 2HOL, such as gene score, race restrictions, languages, homezone, and biome bands.\n\nAside from that, many new features are introduced in 2HOL, such as spawn codes which allow you to spawn as an eve wherever the spawn code drops you. There is also the ability to toggle fertility at will if you want to play solo at a spawn code, or just don\'t want to have kids while chopping firewood away from town. Griefers and griefing is not tolerated here, so if you see someone doing it, report them to general and a mod will help you take care of them. Repeated griefers are banned, remember that.\n\nBesides mechanics, 2HOL has a lot more content compared to OHOL, ranging from 50+ new character sprites, to skinning bison and drying the leather to make clothes. There is something new for everyone to enjoy, no matter your interests!\n\n2HOL has its own version of the onetech crafting guide from OHOL named [twotech](<https://twotech.twohoursonelife.com/>).\n\nVisit twotech to see new content before it\'s added, or to get an idea of how to craft something!',
		});
	},
};