// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My Solution 

function defineSuit(card) {

    let suit = card.substr(-1);
    switch(suit){
       case '♣': return 'clubs';
       case '♦': return 'diamonds';
       case '♥': return 'hearts';
       default: return 'spades';
    }
 
}

// Best Practice Solution

function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}
  