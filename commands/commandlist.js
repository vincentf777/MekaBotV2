module.exports = function(meka, msg, args) {
	let text = " ";
	meka.commands.forEach( function(code, command) {
		text = text + command + ", ";
	});
	msg.channel.send(text.slice(0, text.length - 2).trim());
}