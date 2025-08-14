/*--------------------------------------------------- Constants -----------------------------------------------------------*/

/* game cards (names for calculations and imgs for UI update)*/
const deck = {
    clubs: [
        { name: 'Ace', img: './img/cards/clubs_A.png' },
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
        { name: 'Ace', img: './img/cards/diamonds_A.png' },
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
        { name: 'Ace', img: './img/cards/spades_A.png' },
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
        { name: 'Ace', img: './img/cards/hearts_A.png' },
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
};
/* back card const */
const backCard = { name: 'back-card', img: './img/cards/back_card.png' };

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
        { number: 1, name: backCard.name, img: backCard.img },
        { number: 2, name: backCard.name, img: backCard.img },
        { number: 3, name: backCard.name, img: backCard.img },
    ],
    playerCash: [
        { id: players[0].id, cash: players[0].cash },
        { id: players[1].id, cash: players[1].cash },
        { id: players[2].id, cash: players[2].cash },
        { id: players[3].id, cash: players[3].cash },
    ],
    playersCards: [
        { id: players[0].id, hand: players[0].hand },
        { id: players[1].id, hand: players[1].hand },
        { id: players[2].id, hand: players[2].hand },
        { id: players[3].id, hand: players[3].hand },
    ],
    totalBet: 0,
};

/* actions messages array to be displayed */
const actionMessages =[ ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``];

/*---------------------------------------------- Cached Element References  --------------------------------------------------------*/

/* Cached Element will be changed later if needed */
const messageEl = document.querySelector('.action-message p');


/*
const squareEls = document.querySelectorAll('.sqr');
const resetBtnEl = document.querySelector('#reset');
*/

/*----------------------------------------------------------- Functions -------------------------------------------------------------*/

/* init function to start the game */
function startGame() {
    
    resetGame();
    
    const shuffledDeck = shuffleDeck();
    dealCards(shuffledDeck);
    
    updatePlayerCash();
    
    // Manage turns and betting
}

/* reset the table elements of all players */
function resetGame() {
    players.forEach(player => {
        player.hand = [];
        player.cash = 100;
    });
    currentBet = 0;
    messageEl.innerText = "Game started! Place your bets."; /* start game message */
    actionMessages.push(messageEl); /* push the message in the message array (problem if the array is full) Not checked */
}

/* shuffleDeck function at the beggingig of the game */
function shuffleDeck() {
    const mixedCards = Object.values(deck).flat(); /* take the deck Object and make it array (without `flat()` it will sort only 
    based on the 4 suits not all 52 cards) */

    for (let i = mixedCards.length - 1; i > 0; i--) { /* loop needs refrence */ /* swaps the cards and put them in allCards Obj */
        const j = Math.floor(Math.random() * (i + 1));
        [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]]; /* temp value can be used here to swap (it will take 3 steps) */
    }

    return mixedCards;
}

/* deal the cards for the player and the hand */
function dealCards(shuffledDeck) {
    
    for (let i = 0; i < 2; i++) { /* Deal 2 cards to each player (the last 8 mixed cards to the 4 players, each player will take one 
        in circle) */
        players.forEach(player => {
            player.hand.push(shuffledDeck.pop());
        });
    }

    /* Deal the 5 table cards */
    shuffledDeck.pop();// one back 
    tableVariables.centerCards[0] = shuffledDeck.pop();// 3 on first hand
    tableVariables.centerCards[1] = shuffledDeck.pop();
    tableVariables.centerCards[2] = shuffledDeck.pop();
    shuffledDeck.pop();// two back
    tableVariables.centerCards[3] = shuffledDeck.pop();// one on second hand
    shuffledDeck.pop();// three back
    tableVariables.centerCards[4] = shuffledDeck.pop();// one on third hand

    updatePlayerCards();
}

/* function to update the cards on the table */
function updatePlayerCards() {
    
    players.forEach(player => {
        
        /* get each of the 4 players div to add the new 2 cards for them (first we clear the previous cards) */
        const pDiv = document.getElementById(`player${player.id}`);
        const cardCont = pDiv.querySelector('.card-container');
        cardCont.innerHTML = ''; // Clear previous cards (the cards are imgs and innerHTML can clear everything) 
        /* to check in DOM `document.getElementById(`player1`).querySelector('.card-container').innerHTML = '';` */

        player.hand.forEach(card => {
            const cardD = document.createElement('div'); /* It creates a new HTML div element in memory. This new element is not
             yet attached to the visible document structure (DOM) but exists as a standalone object that can be further manipulated 
             and eventually added to the page. `will try later to use the existance card div instead of creating new one`*/
            
            cardD.className = 'card'; //use the same name in HTML
        
            cardD.innerHTML = `<img src="${card.img}" alt="${card.name}">`; /* this should show to the screen only the player1 cards.
            not all players. `needs check` */
            
            cardCont.appendChild(cardD); //parent is cardContainer to the 2 player cards
        });
    });
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
