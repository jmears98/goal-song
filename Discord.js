const { Client, Intents } = require('discord.js');
const { createAudioPlayer, createAudioResource, joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === '!goal' && message.member?.voice.channel) {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        const player = createAudioPlayer();
        const resource = createAudioResource('audio/Goal-Song.mp3');
        player.play(resource);
        
        connection.subscribe(player);
        
        player.on('stateChange', (oldState, newState) => {
            if (newState.status === VoiceConnectionStatus.Destroyed) {
                connection.destroy();
            }
        });
    }
});

client.login('MTIzMTc3MzUzMDYzMTMxMTQwMA.GU5DMX.ZzOCke913uAl3xOnmeMOsdhue8VFotdZQj1Pc8');
