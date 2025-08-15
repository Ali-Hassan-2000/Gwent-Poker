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

/*-------------------------------------------------------- Variables (state) ----------------------------------------------------------*/

/* players info */ 
const players = [
    { id: 1, name: "Player 1", cash: 0, hand: [] },
    { id: 2, name: "Player 2", cash: 0, hand: [] },
    { id: 3, name: "Player 3", cash: 0, hand: [] },
    { id: 4, name: "Player 4", cash: 0, hand: [] },
];

/* current bet varible */
let currentBet = 0;

/* varible to determine the active player */
let playerIndex = 0;

/* varible to determine the round in the hand */
let round = 1;

/* actions messages array to be displayed */
let actionMessages = []; /* should be up to 15 */

/* all table elements for testing */
const tableVariables = {
    centerCards: [ /* this section is used */
        { number: 1, name: '', img: '' },
        { number: 1, name: '', img: '' },
        { number: 1, name: '', img: '' },
        { number: 2, name: '', img: '' },
        { number: 3, name: '', img: '' },
    ],
    smallCards: [ /* this section is used */
        { number: 1, name: backCard.name, img: backCard.img },
        { number: 2, name: backCard.name, img: backCard.img },
        { number: 3, name: backCard.name, img: backCard.img },
    ],
    /* Not used yet
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
    */
};

/*---------------------------------------------- Cached Element References  --------------------------------------------------------*/

/* Cached Element will be changed later if needed */
const messageEl = document.querySelectorAll('.action-message p');

/*----------------------------------------------------------- Functions -------------------------------------------------------------*/

/* init function to start the game */
function startGame() {
    
    resetGame();
    
    const shuffledDeck = shuffleDeck();
    dealCards(shuffledDeck);
    
    updatePlayerCash();

    displayCommunityCards();
}

/* reset the table elements of all players */
function resetGame() {
    
    players.forEach(player => {
        player.hand = [];
        player.cash = 100;
    });

    currentBet = 0;
    round = 1;
    actionMessages = [];
    
    actionMessages.push("Game started! Place your bets."); /* push the message in the message array (problem if the array is full) Not checked */
    
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
    displayCommunityCards();
}

/* function to display the center cards in the table */
function displayCommunityCards() {
    
    const centerCards = document.querySelector('.center-cards');
    centerCards.innerHTML = ''; // Clear the 5 cards

    const smallCards = document.querySelector('.small-cards');
    smallCards.innerHTML = ''; // Clear the 3 back cards

    /* this function displayes all the center cards immeditly (needs to be modifyed) */
    for (let i = 0; i < 5; i++) { 
        
        const card = tableVariables.centerCards[i];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
        centerCards.appendChild(cardDiv);
    }

    for(let i = 0; i < 3 ;i++){

        const blackCard = backCard;
        const smallCardDiv = document.createElement('div');
        smallCardDiv.className = 'card';
        smallCardDiv.innerHTML = `<img src="${blackCard.img}" alt="${blackCard.name}">`;
        smallCards.appendChild(smallCardDiv);
    }
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

/* function to update the cash of the players */
function updatePlayerCash() {

    players.forEach(player => {
        const cardD = document.querySelector(`#player${player.id + 1} .cash p`); /* player 1 cash div outside the player div.
        this fuction will work for all players exept player 1*/
        cardD.innerText = player.cash;
    });
    /* temp fix for player 1 (player1 not working) */
    const cardD = document.querySelector(`.cash-player p`);
    cardD.innerText = players[0].cash;
}

/* handle betting function */
function placeBet(amount) {

    currentBet += amount;
    const pCash = players[0].cash; // player 1 is the real player
    
    if (pCash >= currentBet) { /* this if for raise button insted of calling the bet (not working yet) */
        players[0].cash -= currentBet;
        updatePlayerCash();
    } else {
        actionMessages.push(`cash not enough for betting !"`); /* push the message in the message array (problem if the array is full) Not checked */
    }
}

/* this function handle the next player index */
function nextPlayer() {

    playerIndex = (playerIndex + 1) % players.length; // Move to the next (when reach player 4 it returns to player 1)
    
    actionMessages.push(`${players[activePlayerIndex].name}'s turn.`); /* push the message in the message array (problem if the array is full) Not checked */

    // Check if all palyers calls the bet in the round befor its over
    if (allPlayersHaveBet()) {
        round++;
        currentBet = 0; // Reset current bet for the next round
        actionMessages.push(`Round ${round} starts!`); 
    }
}

/* function checks if all palyers calls the bet in the round befor its over */ 
function allPlayersHaveBet() {
    return players.every(player => player.cash >= currentBet); // Check if all players can match the bet
}

/* winner function */
function determineWinner() {
    // .....
    // .....

    const bestHands = players.map(player => ({ /* check iterator method */
        player,
        handValue: evaluateHand(player.hand)
    }));

    const winner = bestHands.reduce((prev, current) => { /* check iterator method */
        return (prev.handValue > current.handValue) ? prev : current;
    });

    actionMessages.push(`${winner.player.name} wins!`); /* print palyer winner message */
}

/* this function caculates the winning condition in determineWinner function */
function evaluateHand(hand) {
    // Simple evaluation logic based on high card
    const cardValues = hand.map(card => { /* iterator method check */
        return ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].indexOf(card.name);
    });
    return Math.max(...cardValues); // Return the highest card value
}

/*----------------------------------------------------------- Event Listeners -------------------------------------------------------*/

/* event listener for start game button */
document.getElementById('start-game').addEventListener('click', function() {startGame();});

/* event listener for action buttons for player 1 */

/* event listener for check/call button */
document.getElementById('check/call').addEventListener('click', function() {
    /* button need to be changed ('check/call') when needed  */
    placeBet(currentBet); // Assuming the player calls the current bet
});

/* event listener for fold button */
document.getElementById('fold').addEventListener('click', function() {
    /* if player 1 folds hand ends */
    actionMessages.push(`${players[activePlayerIndex].name} folded.`); 
    nextPlayer();
});

/* bet slider for real player event listener */
document.getElementById('bet-slider').addEventListener('input', function(event) {
    document.getElementById('bet-amount').innerText = event.target.value;
});

/* when pressed raise take the bet amount from the movable bar and conver it to intager then go to bet function */
document.getElementById('raise').addEventListener('click', function() {
    const betAmount = parseInt(document.getElementById('bet-amount').innerText);
    placeBet(betAmount);
});