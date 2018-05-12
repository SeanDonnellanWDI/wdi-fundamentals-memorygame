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

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImg);
	console.log(cards[cardId].suit);
};

flipCard(0);
flipCard(2);