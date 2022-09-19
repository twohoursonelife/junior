const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

let clientID;
let guildID;
let botToken;

if (process.env.DEV_TOKEN) {
	botToken = process.env.DEV_TOKEN;
	clientID = "912705407850532904";
	guildID = "678098930503909386";


} else if (process.env.PROD_TOKEN) {
	botToken = process.env.PROD_TOKEN;
	clientID = process.env.CLIENTID;
	guildID = process.env.GUILDID;

} else {
	console.log("DEV_TOKEN or PROD_TOKEN were not set when deploying commands! Exiting.");
	process.exit();
};

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
};

const rest = new REST({ version: '10' }).setToken(botToken);

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
