const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('settings')
		.setDescription('2HOL settings information'),
	async execute(interaction) {
		return interaction.reply({
			content: '**Settings**\nEnable "Zoom" in the `Gameplay` tab, then zoom using your scroll wheel while you play.\n\n"Keyboard actions", such as movement with WASD, can be enabled in the `Control` tab.\n This is also where you\'ll find settings for "Fullscreen" and "Borderless". Your game will need to be restarted to apply these changes.\n\nTo display information about your current life in your discord profile, go to the `Discord` tab.\n\nThe `Advanced` tab is where you\'ll find a lot of the old modded \'Hetuw\' features, like "Show Coordinates", as well as your list of "Command Shortcuts" - For more on those, use /shortcuts\n"Save Map Files" is also found under advanced. Only enable that one if you\'re using Town Planner.',
		});
	},
};