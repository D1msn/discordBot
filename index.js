require('dotenv/config');
const { Client, MessageEmbed } = require('discord.js');
const config = require('./config.json');

const bot = new Client({ intents: [32767] });


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('messageCreate', (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

  message.channel.send({ embeds: [exampleEmbed] });
});

bot.login(process.env.DISCORD_TOKEN);
