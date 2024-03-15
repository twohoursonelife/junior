module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
		if (message.content.match(/btw/gi)) {
			try {
				message.react('<:wellwellwell:1077212122515243110>');
			} catch (error) {
				console.error(error)
			}
		}
	},
};