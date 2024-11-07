const fs = require('fs');

const SoundFiles = fs.readdirSync('./Sounds');
if (SoundFiles.includes('esimerkki.ogg')) {
    fs.unlinkSync('./Sounds/esimerkki.ogg');
}

require('dotenv/config');
const {
    Client,
    GatewayIntentBits,
    ChannelType
} = require('discord.js');

const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const { createAudioResource, StreamType, joinVoiceChannel, createAudioPlayer, AudioPlayerStatus } = require('@discordjs/voice');

const BotClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ],
});

async function PlayInMostPopulatedChannel() {
    const Guilds = BotClient.guilds.cache;

    for (const Guild of Guilds.values()) {
        const VoiceChannels = Guild.channels.cache.filter(channel => channel.type === ChannelType.GuildVoice);

        let MaxMembers = 0;
        let MaxMembersChannel;

        for (const Channel of VoiceChannels.values()) {
            const MembersCount = Channel.members.size;

            if (MembersCount > MaxMembers) {
                MaxMembers = MembersCount;
                MaxMembersChannel = Channel;
            }
        }

        if (MaxMembersChannel) {
            console.log(`Guild: ${Guild.name}\nVoice Channel with Most Members: ${MaxMembersChannel.name}\nMember Count: ${MaxMembers}`);

            const connection = joinVoiceChannel({
                channelId: MaxMembersChannel.id,
                guildId: MaxMembersChannel.guild.id,
                adapterCreator: MaxMembersChannel.guild.voiceAdapterCreator,
            });

            const Player = createAudioPlayer();
            const RandomFile = SoundFiles[Math.floor(Math.random() * SoundFiles.length)];
            const Resource = createAudioResource(createReadStream(join(__dirname, './Sounds', RandomFile), {
                inputType: StreamType.OggOpus,
            }));

            Player.play(Resource);
            connection.subscribe(Player);

            Player.on(AudioPlayerStatus.Idle, () => {
                connection.destroy();
            });
        }
    }
}

BotClient.on('ready', async () => {
    console.log("ready");
    while (true) {
        await PlayInMostPopulatedChannel();
        /* CONFIG */
        let minTime = 20;
        let maxTime = 60;
        const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
        console.log(`Waiting for ${randomTime} minutes`);
        await new Promise(resolve => setTimeout(resolve, randomTime * 60 * 1000));
    }
});

BotClient.login(process.env.TOKEN);
console.log("coole 🥶👍");