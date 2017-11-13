const Discord = require("discord.js");
const fs = require("fs");

const meka = new Discord.Client();
meka.strings = require("./strings/strings.js");
meka.library = require("./strings/library.json");
meka.tokens = require("./strings/tokens.json");

meka.commands = new Discord.Collection();

fs.readdir("./commands", function(err, files) {
	files.forEach(function(file) {
		const commandName = file.substring(0,file.length - 3);
		meka.commands.set(commandName, require("./commands/" + file));
	});
});

meka.on("message", msg => require("./events/message.js")(meka, msg));
meka.on("ready", msg => require("./events/ready.js")(meka, msg));

meka.login(meka.tokens.botToken);