const request = require("request");
const rc = require("reaction-core");

const SITE_URL = "https://safebooru.donmai.us";

module.exports = function(meka, msg, args) {
	let imgMenu = new rc.Menu(meka.tags.embed, meka.tags.buttons);
	meka.handler.addMenus(imgMenu);
	sendMenu(imgMenu, msg);
	/*request.get(SITE_URL + "/posts.json?random=true&tags=d.va_(overwatch)",
		function(err, res, body) {
			let json = JSON.parse(body);
			msg.channel.send(json[0].file_url);
		});*/
}

sendMenu = async function (menu, msg) {
  return new Promise((resolve, reject) => {
      let sendMessage = {};
      if (typeof menu.text === 'string') {
        sendMessage = menu.text;
      } else {
        sendMessage = {embed: menu.text};
      }
      msg.channel.send(sendMessage).then(async menuMsg => {
        for (let button in menu.buttons) {
          await menuMsg.react(button).catch(console.error);
        }
        menu.register(menuMsg);
        resolve(menuMsg);
      })
  })
}