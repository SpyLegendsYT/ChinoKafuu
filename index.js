require('./src/structures/ProtoTypes').start()

const Client = require('./src/ChinoClient')
const ShardManager = require('./src/structures/ShardManager')
const config = require('./config')
const client = new Client({
	disableMentions: "everyone",
	ws: {
		intents: [
			'GUILDS',
			'GUILD_MEMBERS',
			'GUILD_BANS',
			'GUILD_EMOJIS',
			'GUILD_INTEGRATIONS',
			'GUILD_WEBHOOKS',
			'GUILD_INVITES',
			'GUILD_VOICE_STATES',
			'GUILD_MESSAGES',
			'GUILD_MESSAGE_REACTIONS',
			'DIRECT_MESSAGES',
			'DIRECT_MESSAGE_REACTIONS'
		]
	}
})

if (client.shard) client.shardManager = new ShardManager(client)

client.loadLocales()
client.loadCommands('./src/commands')
client.loadEvents('./src/events')
client.login("Nzg3MTg5Njg5MTMxMzM1Njkw.X9RVhw.2edYI70oqe4ZeFAiAVXNR1B9ETg")
	.then(() => console.log(`${client.shard ? ('Shard ' + client.shard.ids) : 'Bot'} is online.`))
	.catch((e) => console.log(`Failure connecting to Discord! ${e.message}!`))
