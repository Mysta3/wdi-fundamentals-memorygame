//self check log
console.log("Up and running!");

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"        
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"       
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"       
    }
];

//empty array to hold cards
var cardsInPlay = [];

//set board up
function createBoard(){
    document.getElementById('winner').innerHTML = "";
    document.getElementById('loser').innerHTML = "";
    for(var i= 0; i < cards.length; i++){
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);  
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement); 
    }
}



//check for match
function checkForMatch(){
        if(cardsInPlay[0] === cardsInPlay[1]){
            document.getElementById('winner').innerHTML = "You found a match! <p>Press Reset</p>";
            }else{
            document.getElementById('loser').innerHTML = "Sorry, reset & try again.";
            }
    }


    //log which card was flipped
function flipCard(){
    var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    console.log("User flipped " + cards[cardId].suit);
    console.log("User flipped " + cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage);
    if(cardsInPlay.length === 2){
            checkForMatch();
        
    }

}


createBoard(); //call createBoard function


//reset added
function resetGame(){
    document.getElementById('winner').innerHTML = "";
     document.getElementById('loser').innerHTML = "";
    for(var i = 0; i < cards.length; i++){
        var reset = document.querySelector('img');
        reset.parentNode.removeChild(reset);
    }
    createBoard();
    cardsInPlay = [];
}

var resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetGame);
