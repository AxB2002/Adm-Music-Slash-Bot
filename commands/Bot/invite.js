const Discord = require("discord.js")

module.exports = {
    name: "invite",
    description: "invite url link",
    timeout: 10000,
    run: async (interaction, client) => {
        if (process.env.oauthv2link === undefined) {
            interaction.reply({ content: "Missing `oauthv2link` in .env", ephemeral: true })
        } else {
            if (!process.env.oauthv2link.toString().startsWith("https://discord.com/")) {
                interaction.reply({ content: "https://discord.com/oauth2/authorize?client_id=1040417084888322148&permissions=70282305&scope=bot", ephemeral: true })
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${client.user.username}'s invite link:`)
                    .setThumbnail(client.user.displayAvatarURL())
                    .setColor("RANDOM")
                    .setDescription(`My invite link is:https://discord.com/oauth2/authorize?client_id=1040417084888322148&permissions=70282305&scope=bot}`)
                interaction.reply({ embeds: [embed] })
            }
        }
    }
}
