const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  client.embed({
    title: `📘・Owner information`,
    desc: `____________________________`,
    thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
    fields: [{
      name: "👑┆Owner name",
      value: `DargoTamber`,
      inline: true,
    },
    {
      name: "🏷┆Discord tag",
      value: `DargoTamber#7447`,
      inline: true,
    },
    {
      name: "🏢┆Organization",
      value: `CoreWare`,
      inline: true,
    },
    {
      name: "🌐┆Website",
      value: `[https://ankitgupta.com.np/)`,
      inline: true,
    }],
    type: 'editreply'
  }, interaction)
}

