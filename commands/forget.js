const fs = require("fs");

module.exports = function(meka, msg, args) {
	let action = args[0];

	// Modifies the already loaded library and overwrites the file.
	if (meka.library[action]){
		delete meka.library[action];
		fs.writeFile('./strings/library.json', JSON.stringify(meka.library));
		msg.channel.send("Successfully forgot about... something!");
	} else {
		return "I do not know this.";
	}
}