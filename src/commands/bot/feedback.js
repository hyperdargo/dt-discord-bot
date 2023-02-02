const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
  id: "1068158148864651304",
  token: "VDGeF428Vv86o3ZmyyTYlZp-5q-IWj2IblB_2_pUfOpdgVVUR7uW-cJLpRFV7pzkeQ9l",
});

module.exports = async (client, interaction, args) => {
  const feedback = interaction.options.getString('feedback');

  const embed = new Discord.EmbedBuilder()
    .setTitle(`📝・New feedback!`)
    .addFields(
      { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
    )
    .setDescription(`${feedback}`)
    .setColor(client.config.colors.normal)
  webhookClient.send({
    username: 'Bot Feedback',
    embeds: [embed],
  });

  client.succNormal({
    text: `Feedback successfully sent to the developers`,
    type: 'editreply'
  }, interaction);
}

