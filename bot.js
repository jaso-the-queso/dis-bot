var Discord = require("discord.io");
var logger = require("winston");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
  token: process.env.AUTH_TOKEN,
  autorun: true
});
bot.on("ready", function(evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function(user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case "please":
        bot.sendMessage({
          to: channelID,
          message: "eat my ass"
        });
        break;
      case "panda":
        bot.sendMessage({
          to: channelID,
          message: "Panda is the biggest thott known to all mankind."
        });
        break;
      case "hoot":
        bot.sendMessage({
          to: channelID,
          message:
            "Hoot is the nicest thott in the world, but also the sluttiest."
        });
        break;
      case "byron":
        bot.sendMessage({
          to: channelID,
          message:
            "Byron needs to chill out, because his thottieness is making it hot in here."
        });
        break;
      case "abpi":
        bot.sendMessage({
          to: channelID,
          message: "ABPi can bench press at least 5 thotts at once."
        });
        break;
      case "jaso":
        bot.sendMessage({
          to: channelID,
          message:
            "Jaso is my father, the one who taught me all my thotty ways."
        });
        break;
      case "peter":
        bot.sendMessage({
          to: channelID,
          message:
            "THOTT ALERT! THOTT ALERT! THOTT ALERT! THOTT ALERT! THOTT ALERT! THOTT ALERT! THOTT ALERT! THOTT ALERT! THOTT ALERT!"
        });
        break;
      // Just add any case commands if you want to..
    }
  }
});
