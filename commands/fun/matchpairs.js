const { MatchPairs } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('matchpairs')
		.setDescription('Play the Match Pairs game !'),

	async execute(interaction) {

		const Game = new MatchPairs({
			message: interaction,
			isSlashGame: false,
			embed: {
				title: 'Match Pairs',
				color: '#5865F2',
				description: '**Click on the buttons to match emojis with their pairs.**',
			},
			timeoutTime: 60000,
			emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
			winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
			loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
			playerOnlyMessage: 'Only {player} can use these buttons.',
		});

		Game.startGame();
		Game.on('gameOver', result => {
			console.log(result);
		});
	},
};