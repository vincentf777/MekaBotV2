module.exports = function(meka, msg, args) {
	// Goes through all loaded commands and does cleanup before sending in a nice list
	let text = " ";
	meka.commands.forEach( function(code, command) {
		text = text + command + ", ";
	});
	msg.channel.send(text.slice(0, text.length - 2).trim());
}