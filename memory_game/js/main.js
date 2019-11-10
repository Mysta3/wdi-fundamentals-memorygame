console.log("Up and running!");

var cards = ['queen', 'king', 'queen', 'king'];

var cardOne = cards[0];
var cardTwo = cards[2];

var cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log('User flipped' + ' ' + cardTwo);

if(cardsInPlay.length === 2){
    if(cardOne === cardTwo){
        alert("You found a match!");
    }else{
        alert("Sorry, try again.");
    }
}