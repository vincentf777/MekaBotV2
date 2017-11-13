module.exports = function(meka, msg, args) {
	let action = args.toString();

	if (action == undefined){
		return "Play properly!";
	} else if (meka.strings.rps.indexOf(action) != -1){
		action = action.toLowerCase();
		var compAction = Math.floor((Math.random() * (meka.strings.rps.length)));
		var result = ((compAction + 3 - meka.strings.rps.indexOf(action)) % 3);
		switch (result){
			case 0:
				msg.channel.send("I played " + meka.strings.rps[compAction] + "\nIt's a tie!");
			case 1:
				msg.channel.send("I played " + meka.strings.rps[compAction] + "\nI win!");
			case 2:
				msg.channel.send("I played " + meka.strings.rps[compAction] + "\nYou win!");
		}
	} else {
		msg.channel.send("Play properly!");
	}
}