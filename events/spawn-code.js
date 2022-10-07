module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
		if (message.content.match(/spawn code/gi)) {
			try {
				message.react('<:slashLove:855498663577387008>');
			} catch (error) {
				console.error(error)
			}
		}
	},
};