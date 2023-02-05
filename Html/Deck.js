const he = document.getElementById('he');
function Mydeck(){
    const deck = []
    const suits = ['hearts', 'diamond', 'spades', 'clubs']
    const values = '2,3,4,5,6,7,8,9,10,J,K,Q,A';
    for (const value of values.split(',')) {
        for (let suit of suits){
            deck.push({value, suit})
        }
    }
    return deck;
    
}


console.log(Mydeck());