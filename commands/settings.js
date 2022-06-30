const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('settings')
		.setDescription('2HOL settings information'),
	async execute(interaction) {
		return interaction.reply({
			content: 'Enable Nudity - Disabled by default. When enabled, allows you to see the private areas of characters.\n\nFull Screen - Enabled by default. When enabled, the window takes up your full screen. When disabled, the window doesn\'t. You will have to click "Restart" to make this change.\nBorderless - Only available when you have Full Screen enabled. Disabled by default. When enabled, lets you move your mouse to separate monitors, as opposed to locking it on the monitor that the game is open on.\n\nMusic Loudness - Slide to adjust music levels as needed. Will play a sample tune to adjust with.\nSound Loudness - Slide to adjust game sound levels as needed. Will play a sample sound to adjust with.\n\nMouse Pointer:\nNative - Basic pointer.\nDrawn - Resizable pointer that lags a bit. Slide to scale size.\nBoth - You have 2 pointers, showing you the speed and size difference.\n\nEnable FOV - Allows you to use the mouse wheel to zoom out around your character.\nKeyboard Actions - Allows various keys to be used to do actions ingame:\nwasd = move\nShift + wasd = left click\nCtrl + wasd = right click\nSpace bar = left click tile you’re standing on\nCtrl + space bar = right click tile you’re standing on\nE = eat/wear\nQ = backpack\nShift + Q = right click backpack\nT = trouser pocket\nF1 - F7 = emotionsCenter Camera - Your character will stay at the center of the screen at all times.',
		});
	},
};