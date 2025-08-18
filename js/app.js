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

/* Example const for winner rank
const points = [point: 1, hand: [2H, 3H, 4H, 5H, 7S] ],
    [point: 1, hand: [2H, 3H, 4H, 5H, 8S] ],
    [point: 10, hand: [2H, 3H, 4H, 5H, 7H] ],
    [point: 50, hand: [10S, JS, QS, KS, AceS] ],
    
    cont...
; */

/*-------------------------------------------------------- Variables (state) ----------------------------------------------------------*/
/* all table elements for testing */
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
};

/* players info */ 
const players = [
    { id: 1, name: "Player 1", cash: 0, hand: [] , hasBet: false },
    { id: 2, name: "Player 2", cash: 0, hand: [] , hasBet: false },
    { id: 3, name: "Player 3", cash: 0, hand: [] , hasBet: false },
    { id: 4, name: "Player 4", cash: 0, hand: [] , hasBet: false },
];

/* current bet varible */
let currentBet = 0;

/* varible to determine the active player */
let playerIndex = 0;

/* varible to determine the round in the hand */
let round = 0;

/* actions messages array to be displayed */
let actionMessages = []; 

/* saves the total betted amount */
let totalBet = 0;

/* Track whether the current action is a check */
let isChecking = true; 

/*---------------------------------------------- Cached Element References  --------------------------------------------------------*/
const centerCards = document.querySelector('.center-cards'); // 5 cards in the middle
const smallCards = document.querySelector('.small-cards');
const messageEl = document.querySelectorAll('.action-message p'); /* to add comments in the action bar (12 p) */
const raiseBarEl = document.getElementById('movableBar'); /* show the bet bar */
const betLogoEl = document.querySelector('.bet img'); /* show the game chips */
const betAmountEl = document.querySelector('.bet p'); /* show the cash amount */
const start_resetEl = document.getElementById('start-game'); /* change the start button to restart button */
const checkCallButtonEl = document.getElementById('check/call');
const betSliderEl = document.getElementById('bet-slider');
const betSliderAmountEl = document.getElementById('bet-amount');
const foldEl = document.getElementById('fold');
const raiseEl = document.getElementById('raise');
/*----------------------------------------------------------- Functions -------------------------------------------------------------*/

/* init function to start the game */
function startGame() {
    resetGame();
    const shuffledDeck = shuffleDeck();
    dealCards(shuffledDeck);
    updatePlayerCash();
    betLogoEl.src = './img/poker-chips.png';
    betAmountEl.innerHTML = '0';
    raiseBarEl.style.display = 'block';
    start_resetEl.innerHTML = 'Restart game';
    startsGame();
}

/* reset the table elements of all players */
function resetGame() {
    players.forEach(player => {
        player.hand = [];
        player.cash = 100;
        player.hasBet = false;
    });
    centerCards.innerHTML = ''; // Clear the 5 cards
    smallCards.innerHTML = ''; // Clear the 3 back cards
    currentBet = 0;
    totalBet = 0;
    playerIndex = 0;
    round = 1;
    isChecking = true; 
    actionMessages = [];
    for (let i = 0; i < messageEl.length; i++) {
            messageEl[i].innerHTML = " ";
    }
    actionBar("Game started! Place your bets.");
    checkCallButtonEl.innerText = 'Check';
}

/* function to display the comments in the action bar */
function actionBar(message){
    if (actionMessages.length < 12) {
        actionMessages.push(message);
    } 
    else { /* remove the first massage and add one at the end */
        actionMessages.shift();
        actionMessages.push(message);
    }
    for (let i = 0; i < messageEl.length; i++) {
        
        if (i < actionMessages.length) {
            messageEl[i].innerHTML = actionMessages[i]; 
        } 
    }
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

/* function to display the center cards in the table */
function displayCommunityCards() {
    for (let i = 0; i < 5; i++) { 
        const card = tableVariables.centerCards[i];
        const blackCard = backCard;    
        if((round === 2) && (i === 0 || i === 1 || i === 2) ){
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            centerCards.appendChild(cardDiv);
            if (i === 0) {
                const smallCardDiv = document.createElement('div');
                smallCardDiv.className = 'card';
                smallCardDiv.innerHTML = `<img src="${blackCard.img}" alt="${blackCard.name}">`;
                smallCards.appendChild(smallCardDiv);
            }
        }
        else if ((round === 3) && i === 3) {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            centerCards.appendChild(cardDiv);
            const smallCardDiv = document.createElement('div');
            smallCardDiv.className = 'card';
            smallCardDiv.innerHTML = `<img src="${blackCard.img}" alt="${blackCard.name}">`;
            smallCards.appendChild(smallCardDiv);
        }
        else if ((round === 4) && i === 4) {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            centerCards.appendChild(cardDiv);
            const smallCardDiv = document.createElement('div');
            smallCardDiv.className = 'card';
            smallCardDiv.innerHTML = `<img src="${blackCard.img}" alt="${blackCard.name}">`;
            smallCards.appendChild(smallCardDiv);
        }
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
            cardD.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            cardCont.appendChild(cardD); //parent is cardContainer to the 2 player cards
        });
    });
}

/* function to update the cash of the players */
function updatePlayerCash() { 
    const cashD = document.querySelector(`.cash-player p`);
    cashD.innerText = players[0].cash;
    const logoD = document.querySelector(`.cash-player img`);
    logoD.src ='./img/poker-chips.png';
    for (let i = 1; i < players.length; i++){
        const cashD = document.querySelector(`#player${players[i].id} .cash p`);
        cashD.innerText = players[i].cash;
        const logoD = document.querySelector(`#player${players[i].id} .cash img`);
        logoD.src ='./img/poker-chips.png';
    }
    betAmountEl.innerText = totalBet;
}
/* ---------------------------------------------all above is checked-------------------------------------------------------------------- */
/* handle betting function */
function placeBet(amount) { /* needs check */

    if (amount > players[playerIndex].cash) { 
        actionBar("cash not enough for betting !");
        return;
    }
    if (isChecking && amount === 0) {
        checkCallButtonEl.innerText = 'Check';/* this changes the name of the (check/call) */
        actionBar(`${players[playerIndex].name} checked.`);
        players[playerIndex].hasBet = true;
    }
    else {
    currentBet += amount;
    totalBet += amount; 
    players[playerIndex].cash -= amount;
    players[playerIndex].hasBet = true;
    updatePlayerCash();
    actionBar(`${players[playerIndex].name} placed a bet of ${amount}.`);
    checkCallButtonEl.innerText = 'Call'; 
    }
    
    if ( players.every(player => player.hasBet || player.cash === 0) ) {/* make the next palyer call or raise otherwise the round 
        finished and go to next round */
        
        players.forEach(player => player.hasBet = false);
        round++;
        currentBet = 0;
        actionBar(`round ${round} starts`);

        playerIndex = (playerIndex + 1) % players.length;
        actionBar(`${players[playerIndex].name}'s turn.`);

        isChecking = !isChecking;
        checkCallButtonEl.innerText = 'Check';
        
        displayCommunityCards(); //call the centerCards function
        
    } 
    else {

        playerIndex = (playerIndex + 1) % players.length; // Move to the next (when reach player 4 it returns to player 1)
        actionBar(`${players[playerIndex].name}'s turn.`);
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------------ */

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

    displayWinningHands(winner);
}

/* UI update for the winner */
function displayWinningHands(winner) {
    
    actionBar(`${winner.player.name} wins!`); /* print palyer winner message */
    
    players.forEach(card => { /* all player cards will be displayed */
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
        winningHandDiv.appendChild(cardDiv);
    });
}

/* this function caculates the winning condition in determineWinner function */
function evaluateHand(hand) {
    
    /* the methods in this function is working (needs refrences) or I can use the points const to get the points */

    const values = hand.map(card => card.name); /* extract the card number */
    const suits = hand.map(card => card.img.split('_')[1]); /* extract the card suit */
    
    const valueCounts = countValues(values);
    const isFlush = new Set(suits).size === 1; // All suits the same
    const isStraight = checkStraight(values);

    if (isFlush && isStraight) return 8; // Straight Flush
    if (Object.values(valueCounts).includes(4)) return 7; // Four of a Kind
    if (Object.values(valueCounts).includes(3) && Object.values(valueCounts).includes(2)) return 6; // Full House
    if (isFlush) return 5; // Flush
    if (isStraight) return 4; // Straight
    if (Object.values(valueCounts).includes(3)) return 3; // Three of a Kind
    if (Object.values(valueCounts).filter(count => count === 2).length === 2) return 2; // Two Pair
    if (Object.values(valueCounts).includes(2)) return 1; // One Pair
    return 0; // High Card
}

function countValues(values) {
    return values.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1; /* calculate the total value of the hand (Ace = 0) */
        return acc;
    }, {});
}

/* this function checks if the numbers in the hand are in increasing order */
function checkStraight(values) {
    const uniqueValues = [...new Set(values)];
    const sortedValues = uniqueValues.map(value => {
        return ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].indexOf(value);
    }).sort((a, b) => a - b);

    for (let i = 1; i < sortedValues.length; i++) {
        if (sortedValues[i] !== sortedValues[i - 1] + 1) return false; // Not consecutive
    }
    return true;
}

/*----------------------------------------------------------- Event Listeners -------------------------------------------------------*/

/* event listener for start game button */
start_resetEl.addEventListener('click', function() {
    startGame();
});

/* -------------------------------------------------------------------------------------------------- */
function startsGame(){/* event listener for action buttons for player 1 */

    /* bet slider for real player event listener */
    betSliderEl.addEventListener('input', function(event) {
    betSliderAmountEl.innerText = event.target.value;
    });

    /* event listener for check/call button */
    checkCallButtonEl.addEventListener('click', function() {
        placeBet(currentBet);
    });

    /* event listener for fold button */
    foldEl.addEventListener('click', function() {
    /* if player 1 folds hand ends */
    actionBar(`${players[playerIndex].name} folded.`);
    nextPlayer();
    });

    /* when pressed raise take the bet amount from the movable bar and conver it to intager then go to bet function */
        raiseEl.addEventListener('click', function() {
        const betAmount = parseInt(betSliderAmountEl.innerText);
        placeBet(betAmount);
    });   
    
}