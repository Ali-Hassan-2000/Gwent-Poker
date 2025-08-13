/*--------------------------------------------------- Constants -----------------------------------------------------------*/

/* game cards (names for calculations and imgs for UI update)*/
const deck = {
    clubs: [
        { name: 'Ace', img: './img/cards/clubs_ace.png' },
        { name: '2', img: './img/cards/clubs_2.png' },
        { name: '3', img: './img/cards/clubs_3.png' },
        { name: '4', img: './img/cards/clubs_4.png' },
        { name: '5', img: './img/cards/clubs_5.png' },
        { name: '6', img: './img/cards/clubs_6.png' },
        { name: '7', img: './img/cards/clubs_7.png' },
        { name: '8', img: './img/cards/clubs_8.png' },
        { name: '9', img: './img/cards/clubs_9.png' },
        { name: '10', img: './img/cards/clubs_10.png' },
        { name: 'J', img: './img/cards/clubs_J.png' },
        { name: 'Q', img: './img/cards/clubs_Q.png' },
        { name: 'K', img: './img/cards/clubs_K.png' },
    ],
    diamonds: [
        { name: 'Ace', img: './img/cards/diamonds_ace.png' },
        { name: '2', img: './img/cards/diamonds_2.png' },
        { name: '3', img: './img/cards/diamonds_3.png' },
        { name: '4', img: './img/cards/diamonds_4.png' },
        { name: '5', img: './img/cards/diamonds_5.png' },
        { name: '6', img: './img/cards/diamonds_6.png' },
        { name: '7', img: './img/cards/diamonds_7.png' },
        { name: '8', img: './img/cards/diamonds_8.png' },
        { name: '9', img: './img/cards/diamonds_9.png' },
        { name: '10', img: './img/cards/diamonds_10.png' },
        { name: 'J', img: './img/cards/diamonds_J.png' },
        { name: 'Q', img: './img/cards/diamonds_Q.png' },
        { name: 'K', img: './img/cards/diamonds_K.png' },
    ],
    spades: [
        { name: 'Ace', img: './img/cards/spades_ace.png' },
        { name: '2', img: './img/cards/spades_2.png' },
        { name: '3', img: './img/cards/spades_3.png' },
        { name: '4', img: './img/cards/spades_4.png' },
        { name: '5', img: './img/cards/spades_5.png' },
        { name: '6', img: './img/cards/spades_6.png' },
        { name: '7', img: './img/cards/spades_7.png' },
        { name: '8', img: './img/cards/spades_8.png' },
        { name: '9', img: './img/cards/spades_9.png' },
        { name: '10', img: './img/cards/spades_10.png' },
        { name: 'J', img: './img/cards/spades_J.png' },
        { name: 'Q', img: './img/cards/spades_Q.png' },
        { name: 'K', img: './img/cards/spades_K.png' },
    ],
    hearts: [
        { name: 'Ace', img: './img/cards/hearts_ace.png' },
        { name: '2', img: './img/cards/hearts_2.png' },
        { name: '3', img: './img/cards/hearts_3.png' },
        { name: '4', img: './img/cards/hearts_4.png' },
        { name: '5', img: './img/cards/hearts_5.png' },
        { name: '6', img: './img/cards/hearts_6.png' },
        { name: '7', img: './img/cards/hearts_7.png' },
        { name: '8', img: './img/cards/hearts_8.png' },
        { name: '9', img: './img/cards/hearts_9.png' },
        { name: '10', img: './img/cards/hearts_10.png' },
        { name: 'J', img: './img/cards/hearts_J.png' },
        { name: 'Q', img: './img/cards/hearts_Q.png' },
        { name: 'K', img: './img/cards/hearts_K.png' },
    ],
    back: { name: 'back-card', img: './img/cards/back_card.png' },
};

/* players info */ 
const players = [
    { id: 1, name: "Player 1", cash: 100, hand: [] },
    { id: 2, name: "Player 2", cash: 100, hand: [] },
    { id: 3, name: "Player 3", cash: 100, hand: [] },
    { id: 4, name: "Player 4", cash: 100, hand: [] },
];

/*-------------------------------------------------------- Variables (state) ----------------------------------------------------------*/

/* current bet varible */
let currentBet = 0;

/* all table elements */
const tableVariables = {
    centerCards: [
        { number: 1, name: '', img: '' },
        { number: 1, name: '', img: '' },
        { number: 1, name: '', img: '' },
        { number: 2, name: '', img: '' },
        { number: 3, name: '', img: '' },
    ],
    smallCards: [
        { number: 1, name: 'back-card', img: './img/cards/back_card.png' },
        { number: 2, name: 'back-card', img: './img/cards/back_card.png' },
        { number: 3, name: 'back-card', img: './img/cards/back_card.png' },
    ],
    playerCash: [
        { id: 1, cash: 100 },
        { id: 2, cash: 100 },
        { id: 3, cash: 100 },
        { id: 4, cash: 100 },
    ],
    playersCards: [
        { positon: `Player1-1`, name: '', img: '' },
        { positon: `Player1-2`, name: '', img: '' },
        { positon: `Player2-1`, name: '', img: '' },
        { positon: `Player2-2`, name: '', img: '' },
        { positon: `Player3-1`, name: '', img: '' },
        { positon: `Player3-2`, name: '', img: '' },
        { positon: `Player4-1`, name: '', img: '' },
        { positon: `Player4-2`, name: '', img: '' },
    ],
    totalBet: 0,
};

/* actions messages array to be displayed */
const actionMessages =[ ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``];

/*---------------------------------------------- Cached Element References  --------------------------------------------------------*/

/* Cached Element will be changed later if needed 

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

*/

/*----------------------------------------------------------- Functions -------------------------------------------------------------*/

/* init function to start the game */
function startGame() {
    
    // reset some varibles and set some varibles 

    shuffleDeck();
    
    dealCards();
    
    // Manage turns and betting
}

/* shuffleDeck function at the beggingig of the game */
function shuffleDeck() {
    
}

/* deal the cards for the player and the hand */
function dealCards() {
    // Deal two cards to each player and five community cards
}

/* handle betting function */
function placeBet(amount) {
    // Update the current bet and player cash
}

/* winner function */
function determineWinner() {
    // Evaluate hands and show the winner
}

/*
function for movable bar for player one
render and update function
update message function
update cards and players satutes
*/

/*----------------------------------------------------------- Event Listeners -------------------------------------------------------*/

/* event listener for start game button */
document.getElementById('start-game').addEventListener('click', function() {startGame();});

/* event listener for action buttons for player 1 */
/*
document.getElementById('raise').addEventListener('click', function() {startGame();});
*/

/* bet slider for real player event listener */
document.getElementById('bet-slider').addEventListener('input', function(event) {
    document.getElementById('bet-amount').innerText = event.target.value;
});
