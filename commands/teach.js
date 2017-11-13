const fs = require("fs");

module.exports = function(meka, msg, args) {
	let action = args[0];
	let result = args.slice(1).join(" ");

	if (action === undefined || result.length == 0){
		msg.channel.send("Stop teaching me silly things!");
	} else if (meka.library[action] == undefined){
		meka.library[action] = result;
		fs.writeFile('./strings/library.json', JSON.stringify(meka.library));
		msg.channel.send("Successfully learned " + action);
	} else {
		msg.channel.send("I already know this!");
	}
}