const { TwoZeroFourEight } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('2048')
		.setDescription('Play the 2048 game !'),

	async execute(interaction) {

		const Game = new TwoZeroFourEight({
			message: interaction,
			isSlashGame: false,
			embed: {
				title: '2048',
				color: '#5865F2',
			},
			emojis: {
				up: '⬆️',
				down: '⬇️',
				left: '⬅️',
				right: '➡️',
			},
			timeoutTime: 60000,
			buttonStyle: 'PRIMARY',
			playerOnlyMessage: 'Only {player} can use these buttons.',
		});

		Game.startGame();
		Game.on('gameOver', result => {
			console.log(result);
		});
	},
};