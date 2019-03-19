exports.run = (client, msg, args) => {
  if (msg.author.id == "180803410306662401") {
      let message = args.join(" ")
      if(!message == undefined) {
      
      return msg.channel.send({embed: {
          color: 15158332,
          title: "Error",
          description: "Please provide a message!"
        }
        });
      }
      
    msg.channel.send(message);
    
    msg.delete(100);
    console.log(`${msg.author} said ${message} with the bot.`);
  }
}

exports.help = (client, msg) => {
  let info = {};
  info.Description = "Make the bot say something.";
  info.Name = "messagesay";
  info.Usage = "messagesay <Message>";
  info.Example = "sd!messagesay Hello World!";
  info.Category = "Utility";
  return info;
}
