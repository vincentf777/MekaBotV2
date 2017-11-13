module.exports = function(meka, msg, args) {
	if (meka.library[args[0]]) {
		msg.channel.send(meka.library[args[0]]);
	} else {
		msg.channel.send("I don't know that!");
	}
}