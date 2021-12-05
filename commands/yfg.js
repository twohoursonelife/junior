const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yfg')
		.setDescription('Yum Food Generator. Need an idea for the next food item to make?'),
	async execute(interaction) {
		const foods = ["Gooseberry", "Wild Carrot", "Cooked Rabbit", "Gooseberry Bowl", "Berry Pie", "Carrot Pie", "Rabbit Pie", "Berry Carrot Pie", "Berry Rabbit Pie", "Rabbit Carrot Pie", "Berry Carrot Rabbit Pie", "Domestic Carrot", "Cooked Goose", "Cooked Mutton", "Cactus Fruit", "Mutton Pie", "Burdock", "Wild Onion", "Shroom", "Corn", "Popcorn", "Baked Potato", "Green Bean Bowl", "Sauerkraut", "3 Sisters Stew", "Omelette", "Baked Beans", "Bean Burrito. Bean Taco", "Carnitas", "Pork Taco", "Bowl of Whole Milk", "Pouch of Whole Milk", "Bottle of Whole Milk", "Buttered Bread", "Bread", "Bowl of Skim Milk", "Pouch of Skim Milk", "Bottle of Skim Milk", "Mango", "Mango Slice", "Banana", "Turkey Slice", "Turkey Drumstick", "Bowl of Turkey Broth", "Pouch of Turkey Broth", "Bottle of Turkey Broth", "Ice Cream", "Wild Pepper", "Shrimp", "Tomato", "Hot Pepper", "Onion", "Tortilla Chip", "Salsa", "French Fry", "Ketchup", "Pumpkin Pie", "Flatbread", "Cheese Sandwich", "Mutton Sandwich", "Cheese", "Beer", "Bee Comb", "Honey", "Apple", "Sunny Egg", "Apple Pie", "Baked Chicken", "Char", "Sausage", "Bacon", "Cooked Pork", "Lobster", "Crab", "Boiled Egg", "Steak Pie", "Steak and Onion Pie", "Pork Pie", "Honey Bunny Pie", "Pork and Apple Pie", "Chicken Pie", "Grapes", "Wine", "Orange", "Lemon", "Split Coconut", "Drilled Coconut", "Cooked Beef", "Cod", "Bass", "Pike", "Trout", "Sardines", "Cookie", "Roast Pig Dinner", "Chilli Con Carne", "Pancakes", "Rice", "Tomato Soup", "Shroom Soup", "French Onion Soup"];
		return interaction.reply(foods[Math.floor(Math.random() * foods.length)]);
	},
};