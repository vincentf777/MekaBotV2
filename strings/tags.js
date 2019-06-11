const request = require("request");

const SITE_URL = "https://safebooru.donmai.us";

const NAMES = {
  dva: "d.va_(overwatch)"
}

const buttons = [
  { emoji: '1⃣',
    run: (user, message) => {
      request.get(SITE_URL + "/posts.json?random=true&tags=" + NAMES.dva,
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
      name: '1⃣',
      value: 'D.Va'
    }, {
      name: '2 - D.Va',
      value: ' - D.Va'
    }
  ]
}

module.exports = {
  buttons: buttons,
  embed: embed
}