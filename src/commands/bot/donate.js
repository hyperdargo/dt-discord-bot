const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  let row = new Discord.ActionRowBuilder()
    .addComponents(
      new Discord.ButtonBuilder()
        .setLabel("Just Follow DargoTamber GitHub")
        .setURL("https://github.com/hyperdargo")
        .setStyle(Discord.ButtonStyle.Link),
    );

  client.embed({
    title: `${client.user.username}・Donate`,
    desc: '_____ \n\nClick the button below for the sponsor page \n**Pay attention! sponsor is not required**',
    thumbnail: client.user.avatarURL({ dynamic: true }),
    url: "https://github.com/sponsors/CorwinDev",
    components: [row],
    type: 'editreply'
  }, interaction)
}

