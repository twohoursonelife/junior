const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('videos')
		.setDescription('Helpful video links'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Here are some great helpful videos to watch to get you started on your 2HOL journey:\n\nHow to make a spawn code and survive:\n`https://youtu.be/WsaB9XiQNjQ`\n\nThings to do as a new player:\n`https://youtu.be/nUI9gzhA7LE`\n\nYum / eating smartly:\n`https://youtu.be/wncC_KI6u_o`\n\nHunting:\n`https://youtu.be/IJZ4IOlGFvo`\n\nMining:\n`https://youtu.be/1KchOC45zrc`\n\nBronze / basic smithing:\n`https://youtu.be/IsnUn00U058`',
		});
	},
};