const fs = require("fs");
const jimp = require("jimp");
const request = require("request");

module.exports = function(meka, msg, args) {
	const UNIT_SIZE = 150, R_WIDTH = 80;
	request(msg.mentions.users.first().displayAvatarURL)
		.pipe(fs.createWriteStream("./images/avatar.png"))
		.on("close", async () => {
			let dva = await jimp.read("./images/dva.png");
			let rocket = await jimp.read("./images/rockets.png");
			let ava = await jimp.read("./images/avatar.png");
			ava.resize(UNIT_SIZE, UNIT_SIZE);
			let randInt = Math.floor(Math.random() * 5 + 2);
			let bg = new jimp(UNIT_SIZE + randInt*R_WIDTH + UNIT_SIZE, UNIT_SIZE);

			bg.composite(dva, 0, 0);
			for (var i = 0; i < randInt; i++) {
				bg.composite(rocket, UNIT_SIZE + i*R_WIDTH, 0);
			}
			bg.composite(ava, UNIT_SIZE + randInt*R_WIDTH, 0);
			bg.write("./images/final.png");
			msg.channel.send({file: "./images/final.png"});
		});
}
