module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
		if (message.content.includes("seed")) {
			try {
				message.react('<:itIsSpawnCode:996076074804973660>');
			} catch (error) {
				console.error(error)
			}
		}
	},
};