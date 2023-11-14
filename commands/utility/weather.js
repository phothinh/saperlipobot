const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const weather = require('weather-js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Gets the weather of a given area')
		.setDefaultPermission(false)
		.addStringOption(option => option.setName('location').setDescription('The location to check the weather of').setRequired(true))
		.addStringOption(option => option.setName('degree-type').setDescription('Select what degree type you would like').addChoices({ name: 'Celsius', value: 'C' }, { name: 'Fahrenheit', value: 'F' }).setRequired(true)),


	async execute(interaction) {

		const { options } = interaction;
		const location = options.getString('location');
		const degree = options.getString('degree-type');

		await interaction.reply({ content: ':face_in_clouds: Gathering your weather data...', ephemeral: true });

		await weather.find({ search: `${location}`, degreeType: `${degree}` }, async function(err, result) {

			setTimeout(() => {
				if (err) {
					console.log(err);
					interaction.editReply({ content: `${err} | Because we are pulling data, sometimes timeouts happens! Try this command again` });
				}
				else if (result.length == 0) {
					return interaction.editReply({ content: `I could not find the weather of ${location}!` });
				}
				else {
					const temp = result[0].current.temperature;
					const type = result[0].current.skytext;
					const name = result[0].location.name;
					const feel = result[0].current.feelslike;
					const icon = result[0].current.imageUrl;
					const wind = result[0].current.winddisplay;
					const day = result[0].current.day;
					const alert = result[0].location.alert || 'None';

					const embed = new EmbedBuilder()
						.setColor('Blue')
						.setTitle(`Current weather of ${name}`)
						.addFields({ name: 'Temperature', value: `${temp}` })
						.addFields({ name: 'Feels like', value: `${feel}` })
						.addFields({ name: 'Weather', value: `${type}` })
						.addFields({ name: 'Current Alerts', value: `${alert}` })
						.addFields({ name: 'Week day', value: `${day}` })
						.addFields({ name: 'Wind speed', value: `${wind}` })
						.setThumbnail(icon);

					interaction.editReply({ content: ' ', embeds: [embed] });

				}
			}, 2000);

		});

	},
};