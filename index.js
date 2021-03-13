
require('./COMMANDS/General/bot.js')
require('./COMMANDS/Feelings/heat.js')
require('./COMMANDS/Feelings/love.js')
require('./COMMANDS/Feelings/Poetry.js')
require('./COMMANDS/Defulte/on.js')
require('./COMMANDS/Feelings/Romance.js')
require('./COMMANDS/General/developer.js')
require('./COMMANDS/Defulte/help.js')
require('./COMMANDS/General/server.js')
require('./COMMANDS/General/support.js')
require('./COMMANDS/General/invite.js')
require('./COMMANDS/Feelings/5wa6r.js')
require('./COMMANDS/Defulte/replay.js')
require('./COMMANDS/General/ava.js')
require('./COMMANDS/Games/plural.js')
require('./COMMANDS/Games/ban.js')

require('./app.js')

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);