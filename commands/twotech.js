const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twotech')
		.setDescription('About Twotech'),
	async execute(interaction) {
		return interaction.reply({
			content: 'https://twotech.twohoursonelife.com/ (Twotech) is a crafting guide for 2 Hours One Life. It is the 2HOL equivalent of One Hour One Life\'s crafting guide, Onetech. If you need to go there, go to onetech.info.\n\nTwotech may seem complicated at first, but it is very simple. Simply type what you want to craft, or craft with, in the search bar, and click on it. I\'ll use boards as an example. Search “boards” and click on it. There is a collection of information about items underneath their picture, as well as 2 main tabs to the right: How to get and How to use. The former shows you how to craft the item. The most important recipe comes first. In boards\' case, that is using a froe. Click on the “boards with bronze froe”. You can see that it is an item you get when you use a mallet on a “bronze froe wedged in log”. Click on it, to see that you craft that by simply putting a froe on a butt log. You are moving through the recipe backwards. To move forwards, now you use the How to use section. You can scroll through those again, as well as once you get back to boards, see everything that you can make with boards, such as a wooden crate, with a piece of thread. Need to know how to craft thread? Just click on that, and move the same way through its recipes!\n\nTo put it into simpler terms, Twotech is basically jumping into the middle of a recipe, and working your way forwards or backwards. It may seem clunky at first, but it is a very useful tool that you\'ll get better with experience!',
		});
	},
};