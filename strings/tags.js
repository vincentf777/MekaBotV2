const request = require("request");

const SITE_URL = "https://safebooru.donmai.us";
const OW = "_(overwatch)";

const NAMES = {
	ana: "ana" + OW,
	ashe: "ashe" + OW,
 	dva: "d.va" + OW,
 	tracer: "tracer" + OW
}

const buttons = [
  	{ emoji: "1⃣",
    	run: (user, message) => {
      		request.get(SITE_URL + "/posts.json?random=true&tags=" + NAMES.dva,
				function(err, res, body) {
					let json = JSON.parse(body);
					message.channel.send(json[0].file_url);
				});
    	}
  	}, { emoji: "2⃣",
    	run: (user, message) => {
      		request.get(SITE_URL + "/posts.json?random=true&tags=" + NAMES.tracer,
				function(err, res, body) {
					let json = JSON.parse(body);
					message.channel.send(json[0].file_url);
			});
    	}
  	}, { emoji: "⏩",
    	run: (user, message) => {
    		request.get(SITE_URL + "/posts.json?random=true&tags=" + NAMES.tracer,
				function(err, res, body) {
					let json = JSON.parse(body);
					message.channel.send(json[0].file_url);
			});
    	}
    }
]

const buttons2 = [
  	{ emoji: "1⃣",
    	run: (user, message) => {
      		request.get(SITE_URL + "/posts.json?random=true&tags=" + NAMES.ana,
				function(err, res, body) {
					let json = JSON.parse(body);
					message.channel.send(json[0].file_url);
				});
    	}
  	}, { emoji: "2⃣",
    	run: (user, message) => {
      		request.get(SITE_URL + "/posts.json?random=true&tags=" + NAMES.ashe,
				function(err, res, body) {
					let json = JSON.parse(body);
					message.channel.send(json[0].file_url);
			});
    	}
  	}
]

const embed = {
  fields: [
    {
      name: "Select a Hero",
      value: ':one: - D.Va\n:two: - Tracer'
    }
  ]
}

module.exports = {
  buttons: buttons,
  embed: embed
}