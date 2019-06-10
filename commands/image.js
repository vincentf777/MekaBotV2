const request = require("request");
const fs = require("fs");

const SITE_URL = "https://safebooru.donmai.us";

module.exports = function(meka, msg, args) {
	request.get(SITE_URL + "/posts.json?random=true&tags=d.va_(overwatch)",
		function(err, res, body) {
			let json = JSON.parse(body);
			msg.channel.send(json[0].file_url);
		});
}
