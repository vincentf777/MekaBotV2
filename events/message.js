module.exports = (meka, msg) => {
	if (msg.author.bot || !msg.content.startsWith(meka.tokens.prefix)) return;

	const args = msg.content.slice(meka.tokens.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

  	if (meka.commands.has(command)) {
  		meka.commands.get(command)(meka, msg, args);
  	}
}