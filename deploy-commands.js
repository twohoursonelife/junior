const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

let clientID;
let guildID;

if (process.env.CLIENTID) {
	clientID = process.env.CLIENTID
} else {
	clientID = "912705407850532904"; // Dev client
	console.log('CLIENTID environment vairable not set, defaulting to dev client.');
}

if (process.env.GUILDID) {
	guildID = process.env.GUILDID
} else {
	guildID = "678098930503909386"; // Dev guild
	console.log('GUILDID environment vairable not set, defaulting to dev guild.');
}

if (!process.env.DEV_TOKEN && !process.env.PROD_TOKEN) {
	console.log("DEV_TOKEN and PROD_TOKEN were not set when deploying commands! Exiting.");
	process.exit();
}

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
