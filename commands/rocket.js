const fs = require("fs");
const jimp = require("jimp");
const request = require("request");

module.exports = function(meka, msg, args) {
	const UNIT_SIZE = 150, R_WIDTH = 100, R_HEIGHT = 108;
	const AVA_PATH = "./images/avatar.png";
	const R_PATH = "./images/sources/rockets.png";
	const DVA_PATH = "./images/sources/dva.png";
	const RES_PATH = "./images/final.png"

	// Grabs target user's avatar and saves it.
	request(msg.mentions.users.first().displayAvatarURL)
		.pipe(fs.createWriteStream(AVA_PATH))
		.on("close", async () => {
			let dva = await jimp.read(DVA_PATH);
			dva.resize(UNIT_SIZE, UNIT_SIZE);
			let rocket = await jimp.read(R_PATH);
			let ava = await jimp.read(AVA_PATH);
			ava.resize(UNIT_SIZE, UNIT_SIZE);

			// Chooses a random number of rockets. This can be changed to prefer more or less rockets.
			let randInt = Math.floor(Math.random() * 5 + 2);

			// Creates a new canvas that is the proper size for all images to be placed on top.
			let bg = new jimp(UNIT_SIZE + randInt*R_WIDTH + UNIT_SIZE, UNIT_SIZE);

			bg.composite(dva, 0, 0);
			for (var i = 0; i < randInt; i++) {
				bg.composite(rocket, UNIT_SIZE + i*R_WIDTH, UNIT_SIZE/2 - R_HEIGHT/2);
			}
			bg.composite(ava, UNIT_SIZE + randInt*R_WIDTH, 0);
			bg.write(RES_PATH);
			msg.channel.send({file: RES_PATH});
		});
}
