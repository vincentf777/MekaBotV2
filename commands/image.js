const request = require("request");
const fs = require("fs");

const SITE_URL = "https://testbooru.donmai.us";

module.exports = function(meka, msg, args) {
	request.get(SITE_URL + "/posts.json?random=true&tags=d.va_(overwatch)",
		function(err, res, body) {  
    		let json = JSON.parse(body);
    		fs.writeFile('./strings/test.json', json);
		});

}
