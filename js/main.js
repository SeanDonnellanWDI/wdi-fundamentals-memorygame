var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImg: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImg: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImg: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImg: "images/king-of-diamonds.png",
	}
];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	} else {
		return;
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImg);
	checkForMatch();
	console.log(cards[cardId].cardImg);
	console.log(cards[cardId].suit);
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board');
		gameBoard.appendChild(cardElement);
	}
};

createBoard();