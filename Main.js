require('dotenv/config');
const {
    EmbedBuilder,
    ActionRowBuilder,
    Client,
    GatewayIntentBits,
    InteractionType,
    ModalBuilder,
    Routes,
    SelectMenuBuilder,
    TextInputBuilder,
    TextInputStyle,
    ButtonBuilder,
    ButtonStyle,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    IntentsBitField,
    ContextMenuCommandBuilder,
    ChannelType
} = require('discord.js');

const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const { createAudioResource, StreamType, joinVoiceChannel, createAudioPlayer, AudioPlayerStatus } = require('@discordjs/voice');

const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ],
});

async function Play(Channel) {
    const Connection = joinVoiceChannel({
        channelId: Channel.id,
        guildId: Channel.guild.id,
        adapterCreator: Channel.guild.voiceAdapterCreator,
    });

    const Player = createAudioPlayer();

    const SoundFiles = fs.readdirSync('./Sounds');
    const RandomFile = SoundFiles[Math.floor(Math.random() * SoundFiles.length)];
    const Resource = createAudioResource(createReadStream(join(__dirname, './Sounds', RandomFile), {
        inputType: StreamType.OggOpus,
    }));

    Player.play(Resource);

    Connection.subscribe(Player);

    Player.on(AudioPlayerStatus.Idle, () => {
        Connection.destroy();
    });
}


function PlayAD() {

    const Guilds = client.guilds.cache;

    Guilds.forEach(async (Guild) => {

        const VoiceChannels = Guild.channels.cache.filter(channel => channel.type === ChannelType.GuildVoice);

        let MaxMembers = 0;
        let MaxMembersChannel;

        VoiceChannels.forEach((Channel) => {
            if (VoiceChannels.size === 0) {
                return;
            }

            const MembersCount = Channel.members.size;

            if (MembersCount > MaxMembers) {
                MaxMembers = MembersCount;
                MaxMembersChannel = Channel;
            }
        });

        if (MaxMembersChannel) {
            console.log(`Guild: ${Guild.name}\nVoice Channel with Most Members: ${MaxMembersChannel.name}\nMember Count: ${MaxMembers}`);
            Play(MaxMembersChannel);
        } else {
            return;
        }
    });
}

client.on('ready', async () => {
    console.log("ready");
    while (true) {
        PlayAD();
        /* CONFIG */
        let MinTime = 20;
        let MaxTime = 60;
        const randomTime = Math.floor(Math.random() * (MaxTime - MinTime + 1) + MinTime);
        console.log(`Waiting for ${randomTime} minutes`)
        await new Promise(resolve => setTimeout(resolve, randomTime * 60 * 1000));
    }
});

client.login(process.env.TOKEN);
console.log("coole 🥶👍")
