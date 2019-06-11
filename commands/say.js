module.exports = function(meka, msg, args) {
	// Checks the library for a taught phrase and repeats it. Use !teach command to set new phrases.
	if (meka.library[args[0]]) {
		msg.channel.send(meka.library[args[0]]);
	} else {
		msg.channel.send("I don't know that!");
	}
}