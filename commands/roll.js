module.exports = function(meka, msg, args) {
	let dice = args.toString();

	if (dice == undefined) {
		msg.channel.send("Not a valid roll");
	} else 	if (dice.search(/\d*[d]\d+/) != -1) {
		let sum = 0;
		let values = dice.split(/[dD]/);
		let diceAmount = parseInt(values[0]) || 1;
		let diceSize = Math.floor(parseInt(values[1]));
		for (i = 0; i < diceAmount; i++) {
			sum += Math.floor((Math.random() * (diceSize) + 1));
		}
		msg.channel.send(sum);
	} else {
		msg.channel.send("Not a valid roll");
	}
}