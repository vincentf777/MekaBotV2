const fs = require("fs");
const gm = require("gm");
const request = require("request");

module.exports = function(meka, msg, args) {

	let dva = gm("./images/dva.png");
	let target = msg.mentions.users.first().displayAvatarURL;

	var randInt = Math.floor((Math.random() * (5)));

	var downloadTarget = function(target, callback) {
		if (target != undefined) {
			request(target)
				.pipe(fs.createWriteStream("./images/avatar.png"))
				.on("close", callback(target));
		}
	};

	var resizeTarget = function(target, callback) {
		if (target != undefined) {
			let targetAvatar = gm("./images/avatar.png")
			targetAvatar
				.resize(100, 100)
				.write("./images/avatar.png", function(e) {
					if (e) {
						meka.emit("error", e);
					}

					callback();
				});
		} else {
			callback();
		}
	}

	var buildImage = function(callback) {
		for (var i = 0; i < randInt; i++) {
			dva.append("./images/rockets.png", true);
		}
		callback();
	};

	buildImage(
		downloadTarget(msg.mentions.users.first().displayAvatarURL,
			resizeTarget(target,
				function() {
					dva
						.background("transparent")
						.write("./images/final.png", function(e) {
							if (e) {
							meka.emit("error", e);
							}
						});
				}
			)
		)
	)

	/*for (var i = 0; i < randInt; i++) {
		dva.append("./images/rockets.png", true);
	}*/

	/*if (target != undefined) {
		console.log(target);
		request(target).pipe(fs.createWriteStream("./images/avatar.png"));
		dva.append("./images/avatar.png", true);
		fs.unlink(".images/avatar.png", function(e) {
			if (e) {
				meka.emit("error", e);
			}
		});
	}*/

	/*buildImage(function() {
		downloadTarget(msg.mentions.users.first().displayAvatarURL, function() {
			let targetAvatar = gm("./images/avatar.png")
			targetAvatar
				.resize(100, 100)
				.write("./images/avatar.png", function(e) {
					if (e) {
						meka.emit("error", e);
					}
					
					dva.append("./images/avatar.png", true);
			});
			
		});
	});*/

	/*downloadTarget(msg.mentions.users.first().displayAvatarURL, function() {
		dva.append("./images/avatar.png", true);
	});*/

	/*dva
		.background("transparent")
		.write("./images/final.png", function(e) {
			if (e) {
				meka.emit("error", e);
			}
		});*/

	//msg.channel.send({file: "./images/final.png"});
}