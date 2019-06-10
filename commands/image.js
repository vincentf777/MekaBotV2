const request = require("request");

const SITE_URL = "https://safebooru.donmai.us";

module.exports = function(meka, msg, args) {
	/*let imgMenu = new meka.rc.Menu(meka.tags.embed, meka.tags.buttons);
	meka.handler.addMenus(imgMenu);
	msg.channel.sendMenu(imgMenu);
	/*request.get(SITE_URL + "/posts.json?random=true&tags=d.va_(overwatch)",
		function(err, res, body) {
			let json = JSON.parse(body);
			msg.channel.send(json[0].file_url);
		});*/
}