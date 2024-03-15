module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
		if (message.content.match(/btw/gi)) {
			try {
				message.react('<a:yes:624134681142493185>');
			} catch (error) {
				console.error(error)
			}
		}
	},
};