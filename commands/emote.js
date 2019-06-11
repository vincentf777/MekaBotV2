module.exports = function(meka, msg, args) {
	let user = msg.author.username;
	let action = args[0];
	let target = args[1];
	
	if (action == undefined) {
		// When user doesn't specify an action. Eg. "!emote"
		msg.channel.send(user + " tried to do nothing. Absolutely nothing.");
	} else if (target == undefined) {
		// Various outcomes if user doesn't @ a user or uses an action not in the list.
		if (!meka.strings.emoteList[action]) {
			msg.channel.send(user + " tried to do " + action + ", whatever that is.");
		} else {
			msg.channel.send(user + ": " + meka.strings.emoteList[action]);
		}
	} else if (!meka.strings.emoteList[action]) {
		msg.channel.send(user + " tried to do " + action + " at " + target);
	} else {
		msg.channel.send(user + " to " + target + " : " + meka.strings.emoteList[action]);
	}
}