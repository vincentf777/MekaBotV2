const fs = require("fs");

module.exports = function(meka,msg,args) {
	// Only allows bot owner to use this command.
	if (msg.author.id != meka.tokens.dva) {
		return;
	}

	// Clears all previously loaded commands and goes through commands folder again.
	meka.commands.clear();
	fs.readdir("./commands", function(err, files) {
	files.forEach(function(file) {
		const commandName = file.substring(0,file.length - 3);
		meka.commands.set(commandName, require("./" + file));
	});
});
}