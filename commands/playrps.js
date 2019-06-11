module.exports = function(meka, msg, args) {
	let action = args.toString();

	if (action == undefined){
		return "Play properly!";
	} else if (meka.strings.rps.indexOf(action) != -1){ // Checks if user wrote rock, paper, or scissors before processing. 
		action = action.toLowerCase();
		// Uses math to randomly select an action and compare with the user for a result.
		var botAction = Math.floor((Math.random() * (meka.strings.rps.length)));
		var result = ((botAction + 3 - meka.strings.rps.indexOf(action)) % 3);
		switch (result){
			case 0:
				msg.channel.send("I played " + meka.strings.rps[botAction] + "\nIt's a tie!");
				break;
			case 1:
				msg.channel.send("I played " + meka.strings.rps[botAction] + "\nI win!");
				break;
			case 2:
				msg.channel.send("I played " + meka.strings.rps[botAction] + "\nYou win!");
				break;
		}
	} else {
		msg.channel.send("Play properly!");
	}
}