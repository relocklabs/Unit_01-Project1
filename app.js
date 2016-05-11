var player;
var dealer;
var hand;
  usedCards = []

 var myHand = function(){
   for (i=0; i<currentHand.length; i++)
    console.log(currentHand[i].rank + " of " + currentHand[i].suit + " with a value of " + currentHand[i].value)
    
    
  }
var datValue = function(){
   var total = 0;
                for (i=0; i<currentHand.length; i++)
                {
                    total += currentHand[i].value;
                     
                    }


                    if (total > 21){ 
                     alert("BUSTEDDDDDDDDD")}
                     
                     alert("you were dealt two cards: " + currentHand[0].rank + " of " + currentHand[0].suit + " with a value of " + currentHand[0].value + "," + " and " 
                + currentHand[1].rank + " of " + currentHand[1].suit + " with a value of " + currentHand[1].value); 

 
}

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

              console.log("there are " + deck.length + " cards left");
              var valAlert = alert(fC.value+fC2.value);
              
             
              }
            

              console.log("you were dealt two cards: " + fC.rank + " of " + fC.suit + " with a value of " + fC.value + "," + " and " 
                + fC2.rank + " of " + fC2.suit + " with a value of " + fC2.value)
              console.log("current value of hand is " + (fC.value+fC2.value))
}
var currentHand2= []
var dealerPick;
var dealerPick = function() {
          currentHand2 = []
          for (var i = 0; i < 1; i++) {
            var dC = deck[Math.floor(Math.random() * deck.length)];
              var rmdC = deck.splice(dC, 1)

              currentHand2.push(dC);

              console.log("there are " + deck.length + " cards left"); 
             }
            for (var i = 0; i < 1; i++) {
            var dC2 = deck[Math.floor(Math.random() * deck.length)];
              var rmdC2 = deck.splice(dC2, 1)

              currentHand2.push(dC2);

              console.log("there are " + deck.length + " cards left");
              var valAlert = alert(dC.value+dC2.value);
              
             
              }
            

              console.log("dealer was dealt two cards: " + dC.rank + " of " + dC.suit + " with a value of " + dC.value + "," + " and " 
                + dC2.rank + " of " + dC2.suit + " with a value of " + dC2.value)
              console.log("current value of hand is " + (dC.value+dC2.value))

              
}

var addDealerCard = function(){
  var total = 0;
                for (i=0; i<currentHand2.length; i++)
                {
                    total += currentHand2[i].value;
                    }

                    if (total < 17 ){ 
                        var dC3 = deck[Math.floor(Math.random() * deck.length)];
              var rmdC3 = deck.splice(dC3, 1)

              currentHand2.push(dC3); }

              else { console.log}
}

            // this is not working. i am trying to add a hit function but it is giving me a $)@#U*$ load of $)##@)($!) trouble
 var addPlayerCard = function(){
            var fC3 = deck[Math.floor(Math.random() * deck.length)];
              var rmFC3 = deck.splice(fC3, 1)

              currentHand.push(fC3);
              
              console.log("you drew a " + fC3.rank + " of " + fC3.suit + " with a value of " + fC3.value)


               var total = 0;
                for (i=0; i<currentHand.length; i++)
                {
                    total += currentHand[i].value;
                    }

                    if (total > 21){ 
                     console.log("BUSTEDDDDDDDDD")}

              else {

              console.log("you HIT ! NEW HAND VALUE is " + total + " there are " + deck.length + " cards left");
             
          }
          
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

