const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('minitech')
		.setDescription('Minitech'),
	async execute(interaction) {
		return interaction.reply('Minitech, like it\'s name might imply, is a mini version of the official 2HOL crafting guide, Twotech https://twotech.twohoursonelife.com/. Minitech is a small menu that sits above your temperature meter at the bottom right corner of your screen as you play. To activate it, simply click on the black rectangle that says \'[+] crafting guide\'. Minitech will also automatically activate when you interact with your first item in a new life. To close, simply click the \'[-]\' (minus sign) in the top right. You can also use the key "v" to open or close minitech.\n\nMinitech is a very helpful tool for finding out how to craft items, and what to do with current items. If you type \'/item name\' (/explosives, /cookie, /reed backpack, etc), then maximize minitech, you will be shown recipes for said object. You can toggle between how to make, and how to use, by clicking those buttons at the top. To clear minitech, simply type a slash "/". Minitech will also show you recipes for the last item that you have interacted with. Only 1 step of any recipe is shown on minitech at once. However, you are able to go down the steps by clicking on the pictures of the items. This allows you to go backward or forward through a recipe to get to your ideal point, as well as head back to your original search, if needed.');
	},
};