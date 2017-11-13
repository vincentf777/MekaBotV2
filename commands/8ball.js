module.exports = function(meka, msg, args) {
	let randomNum = Math.floor((Math.random() * (meka.strings.eightList.length - 1)));
	msg.channel.send(meka.strings.eightList[randomNum]);
}