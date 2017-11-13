module.exports = function(meka, msg, args){
	let text = "";
	for (let emote in meka.strings.emoteList){
		text = text + emote + ", ";
	}
	msg.channel.send(text.slice(0,text.length - 2));
}