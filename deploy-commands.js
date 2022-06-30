const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const clientID = process.env.CLIENTID
const guildID = process.env.GUILDID

if (typeof clientID == 'undefined' || typeof guildID == 'undefined' ){
	console.log('CLIENTID and GUILDID environment vairables must be set to deploy commands.');
	process.exit();
};

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
};

const rest = new REST({ version: '9' }).setToken(process.env.DEV_TOKEN ? process.env.DEV_TOKEN : process.env.PROD_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientID, guildID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
