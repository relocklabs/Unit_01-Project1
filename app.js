var player;
var dealer;
var hand;
  usedCards = []

function Card (rank, suit, value) {

    this.rank = rank;
    this.suit = suit;
    this.value = value;
  

}
function Deck() {

    this.deck = new Array();

    this.makeDeck = makeDeck;
    // this.shuffle = shuffle;
    // this.deal = deal;
}

function makeDeck() {

    var ranks = new Array("A","2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "J", "Q", "K");
    var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");

    var values = new Array(1,2,3,4,5,6,7,8,9,10,10,10,10)

    this.deck = new Array();
    var deck = []
    var i, j;
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < ranks.length; j++) {
            // this.deck[ranks.length*i+j] = new Card(ranks[j], suits[i]); 
            // this was the line i had tried to use for about an hour, it returns the correct 
            // index number of the array but not the string of the name, very very frustrating

             var curCard = {'rank': ranks[j], 'suit':suits[i], 'value':values[j]}
                     this.deck.push(curCard);

           console.log(curCard) 
    }
  }
}
var doIHit;
var currentHand = []
var fC;
var fC2;
var firstPick = function() {
          currentHand = []
          for (var i = 0; i < 1; i++) {
            var fC = deck[Math.floor(Math.random() * deck.length)];
              var rmFC = deck.splice(fC, 1)

              currentHand.push(fC);

              console.log("there are " + deck.length + " cards left"); 
             }
            for (var i = 0; i < 1; i++) {
            var fC2 = deck[Math.floor(Math.random() * deck.length)];
              var rmFC2 = deck.splice(fC2, 1)

              currentHand.push(fC2);
              var valAlert = alert(fC.value+fC2.value);
             

              console.log("there are " + deck.length + " cards left");

              }
            

             
}


            // this is not working. i am trying to add a hit function but it is giving me a $)@#U*$ load of $)##@)($!) trouble
 var addCard = function(){
            var fC3 = deck[Math.floor(Math.random() * deck.length)];
              var rmFC3 = deck.splice(fC3, 1)

              currentHand.push(fC3);
              

              console.log("you HIT ! there are " + deck.length + " cards left");

          }
          
  

  var whatsMyHand = function(){
    console.log(currentHand)
  }
      
       
                     	 

  



           

            
console.log("===========================================================")

    


// function Shuffle() {
// var shifted = new .shift()
// console.log(shifted)

// this is a random number generator for 1 - 13, 
// can be used to dictate what card has been drawn but does 
// not identify how many of each set has been chosen

  // usedCards = []

	// var randomCard = function(){
 //  var num = Math.round(Math.random() * 12) + 1;
 //  var value = num;
  
 
	
  // console.log(value)
  // usedCards.push(value)
  // $('#cardTest').innerHTML=value
  // $('#cardTest' + '#cardTest') = handvalue 
  // $('#cardTest').innerHTML = handvalue
  
// }

// var logIt = function(){

// 	console.log(usedCards)
// 	}

