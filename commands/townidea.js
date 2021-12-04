const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('townidea')
		.setDescription('Need an idea on what to build or do next?'),
	async execute(interaction) {
		const ideas = ["Every town needs a bakery!", "Do you have a warm nursery with clothes for babies?", "A fireplace room is a lovely addition to a house!", "A tavern with a distillery out back would be perfect for storing your beer and wine!", "Try to capture an animal from far away and make a petting zoo! (safety from bites not guranteed)", "I love the look of a blacksmith!", "How about a sewing room or a tailors cottage?", "An airport so you can accept visitors from far away!", "Fishing huts and docks look wonderful on a lake or sea!", "Orchards are so pretty!", "A hospital full of medical supplies would be useful!"];
		return interaction.reply(ideas[Math.floor(Math.random() * ideas.length)]);
	},
};