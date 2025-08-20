/*--------------------------------------------------- Constants -----------------------------------------------------------*/
/* game cards (names and values for calculations and imgs for UI update)*/
const deck = {
    clubs: [
        { name: 'Ace', img: './img/cards/clubs_A.png', value: 14 },
        { name: '2', img: './img/cards/clubs_2.png', value: 2 },
        { name: '3', img: './img/cards/clubs_3.png', value: 3 },
        { name: '4', img: './img/cards/clubs_4.png', value: 4 },
        { name: '5', img: './img/cards/clubs_5.png', value: 5 },
        { name: '6', img: './img/cards/clubs_6.png', value: 6 },
        { name: '7', img: './img/cards/clubs_7.png', value: 7 },
        { name: '8', img: './img/cards/clubs_8.png', value: 8 },
        { name: '9', img: './img/cards/clubs_9.png', value: 9 },
        { name: '10', img: './img/cards/clubs_10.png', value: 10 },
        { name: 'J', img: './img/cards/clubs_J.png', value: 11 },
        { name: 'Q', img: './img/cards/clubs_Q.png', value: 12 },
        { name: 'K', img: './img/cards/clubs_K.png', value: 13 },
    ],
    diamonds: [
        { name: 'Ace', img: './img/cards/diamonds_A.png', value: 14 },
        { name: '2', img: './img/cards/diamonds_2.png', value: 2 },
        { name: '3', img: './img/cards/diamonds_3.png', value: 3 },
        { name: '4', img: './img/cards/diamonds_4.png', value: 4 },
        { name: '5', img: './img/cards/diamonds_5.png', value: 5 },
        { name: '6', img: './img/cards/diamonds_6.png', value: 6 },
        { name: '7', img: './img/cards/diamonds_7.png', value: 7 },
        { name: '8', img: './img/cards/diamonds_8.png', value: 8 },
        { name: '9', img: './img/cards/diamonds_9.png', value: 9 },
        { name: '10', img: './img/cards/diamonds_10.png', value: 10 },
        { name: 'J', img: './img/cards/diamonds_J.png', value: 11 },
        { name: 'Q', img: './img/cards/diamonds_Q.png', value: 12 },
        { name: 'K', img: './img/cards/diamonds_K.png', value: 13 },
    ],
    spades: [
        { name: 'Ace', img: './img/cards/spades_A.png', value: 14 },
        { name: '2', img: './img/cards/spades_2.png', value: 2 },
        { name: '3', img: './img/cards/spades_3.png', value: 3 },
        { name: '4', img: './img/cards/spades_4.png', value: 4 },
        { name: '5', img: './img/cards/spades_5.png', value: 5 },
        { name: '6', img: './img/cards/spades_6.png', value: 6 },
        { name: '7', img: './img/cards/spades_7.png', value: 7 },
        { name: '8', img: './img/cards/spades_8.png', value: 8 },
        { name: '9', img: './img/cards/spades_9.png', value: 9 },
        { name: '10', img: './img/cards/spades_10.png', value: 10 },
        { name: 'J', img: './img/cards/spades_J.png', value: 11 },
        { name: 'Q', img: './img/cards/spades_Q.png', value: 12 },
        { name: 'K', img: './img/cards/spades_K.png', value: 13 },
    ],
    hearts: [
        { name: 'Ace', img: './img/cards/hearts_A.png', value: 14 },
        { name: '2', img: './img/cards/hearts_2.png', value: 2 },
        { name: '3', img: './img/cards/hearts_3.png', value: 3 },
        { name: '4', img: './img/cards/hearts_4.png', value: 4 },
        { name: '5', img: './img/cards/hearts_5.png', value: 5 },
        { name: '6', img: './img/cards/hearts_6.png', value: 6 },
        { name: '7', img: './img/cards/hearts_7.png', value: 7 },
        { name: '8', img: './img/cards/hearts_8.png', value: 8 },
        { name: '9', img: './img/cards/hearts_9.png', value: 9 },
        { name: '10', img: './img/cards/hearts_10.png', value: 10 },
        { name: 'J', img: './img/cards/hearts_J.png', value: 11 },
        { name: 'Q', img: './img/cards/hearts_Q.png', value: 12 },
        { name: 'K', img: './img/cards/hearts_K.png', value: 13 },
    ],
};
/* back card const */
const backCard = { name: 'back-card', img: './img/cards/back_card.png' };
/* cash logo const */
const chip_img = './img/poker-chips.png';
/* const for winner rank calculations */
const HAND_RANKINGS = {
    ROYAL_FLUSH: 10,
    STRAIGHT_FLUSH: 9,
    FOUR_OF_A_KIND: 8,
    FULL_HOUSE: 7,
    FLUSH: 6,
    STRAIGHT: 5,
    THREE_OF_A_KIND: 4,
    TWO_PAIR: 3,
    ONE_PAIR: 2,
    HIGH_CARD: 1
};

/*-------------------------------------------------------- Variables (state) ----------------------------------------------------------*/
/* all table cards elements */
const tableVariables = {
    centerCards: [
        { name: '', img: '' },
        { name: '', img: '' },
        { name: '', img: '' },
        { name: '', img: '' },
        { name: '', img: '' },
    ],
    smallCards: [
        { name: backCard.name, img: backCard.img },
        { name: backCard.name, img: backCard.img },
        { name: backCard.name, img: backCard.img },
    ],
};
/* players info */ 
const players = [
    { id: 1, name: "You", cash: 100, hand: [], hasChecked: false, hasBet: false, hasFolded: false, hasCalled: false,
         hasRaised: false, currentBet: 0, isAI: false, isAllIn: false },
    { id: 2, name: "Player 2", cash: 100, hand: [], hasChecked: false, hasBet: false, hasFolded: false, hasCalled: false,
         hasRaised: false, currentBet: 0, isAI: true, LVL: 0.5, isAllIn: false },
    { id: 3, name: "Player 3", cash: 100, hand: [], hasChecked: false, hasBet: false, hasFolded: false, hasCalled: false,
         hasRaised: false, currentBet: 0, isAI: true, LVL: 0.6, isAllIn: false },
    { id: 4, name: "Player 4", cash: 100, hand: [], hasChecked: false, hasBet: false, hasFolded: false, hasCalled: false,
         hasRaised: false, currentBet: 0, isAI: true, LVL: 0.4, isAllIn: false }
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
/* Track on who player are going to deal the bet each round */
let dealerIndex = 0;
/* the starting bet at the beg. of each round */
let smallStarter = 5;
/* the starting bet at the beg. of each round */
let bigStarter = 10;
/* to determine the start of each hand */
let gameStarted = false;
/* to determine the end of each hand */
let gameEnds = false;

/*---------------------------------------------- Cached Element References  --------------------------------------------------------*/
const centerCards = document.querySelector('.center-cards'); // 5 cards in the middle
const smallCards = document.querySelector('.small-cards'); // 3 back cards in the middle
const messageEl = document.querySelectorAll('.action-message p'); /* to add comments in the action bar */
const raiseBarEl = document.getElementById('movableBar');/* show the bet bar */
const betLogoEl = document.querySelector('.bet img'); /* show the game chips */
const betAmountEl = document.querySelector('.bet p'); /* show the cash amount */
const start_resetEl = document.getElementById('start-game'); // start game or check button
const checkCallButtonEl = document.getElementById('check/call'); // call or check button
const betSliderEl = document.getElementById('bet-slider'); // movable bar
const betSliderAmountEl = document.getElementById('bet-amount'); // movable bar amount
const foldEl = document.getElementById('fold'); // fold button
const raiseEl = document.getElementById('raise'); // raise button
const playercashpp = document.querySelectorAll('.cash img');/* show the players chips */
const playerNameEl = document.querySelectorAll('.player-logo'); /* show the players div */

/*----------------------------------------------------------- Functions -------------------------------------------------------------*/
/* init function to start the game */
function startGame() {
    gameStarted = true;
    gameEnds = false;
    resetGame();
    const shuffledDeck = shuffleDeck();
    dealCards(shuffledDeck);
    collectStartingBets();
    updateUI();
    actionBar(`${players[playerIndex].name}'s turn.`);
}
/* reset the table elements of all players */
function resetGame() {
    players.forEach(player => {
        player.hand = [];
        player.cash = player.cash <= 0 ? 100 : player.cash;
        player.hasChecked = false;
        player.hasBet = false;
        player.hasFolded = false;
        player.hasCalled = false;
        player.hasRaised = false;
        player.currentBet = 0;
        player.isAllIn = false;
    });
    centerCards.innerHTML = '';
    smallCards.innerHTML = '';
    currentBet = 0;
    totalBet = 0;
    round = 1;
    actionMessages = [];
    for (let i = 0; i < messageEl.length; i++) {
        messageEl[i].innerHTML = " ";
    }
    playercashpp.forEach(logo => {
        logo.src = chip_img;
    });
    betLogoEl.src = chip_img;
    updateUI();
}
/* function to collect the starting bets each round */
function collectStartingBets() {
    const smallStart = (dealerIndex + 1) % players.length;
    placeStartingBets(smallStart, smallStarter, "small blind");
    const bigStart = (dealerIndex + 2) % players.length;
    placeStartingBets(bigStart, bigStarter, "big blind");
    playerIndex = (bigStart + 1) % players.length;
    if (players[playerIndex].isAI) {
        setTimeout(() => ComputerPlayer(), 1000);
    }
}
/* function to to calculate the starting bets for collectStartingBets() */
function placeStartingBets(playerId, amount, betType) {
    players[playerId].cash -= amount;
    players[playerId].currentBet = amount;
    totalBet += amount;
    if (betType === "big blind") currentBet = amount;
    actionBar(`${players[playerId].name} posts ${betType} of ${amount}`);
}
/* this function updates the center cards, back cards, player cards, player cash, bet area, player buttons and player status */
function updateUI() {
    if (gameEnds) return;
    players.forEach(player => {// Update player cards and status
        const pDiv = document.getElementById(`player${player.id}`);
        if (!pDiv) return;
        const cardPP = pDiv.querySelector('.card-container');// Update cards
        if (cardPP) {
            cardPP.innerHTML = '';
            player.hand.forEach(card => {
                const cardD = document.createElement('div');
                if (player.isAI) {
                    cardD.className = 'card';
                    cardD.innerHTML = `<img src="${backCard.img}" alt="${card.name}">`;
                }
                else{
                    cardD.className = 'card';
                    cardD.innerHTML = `<img src="${player.hasFolded ? backCard.img : card.img}" alt="${card.name}">`;
                }
                cardPP.appendChild(cardD);
            });
        }
        const cashpp = pDiv.querySelector('.cash p'); // Update cash display
        if (cashpp) cashpp.textContent = player.cash;
        const statuspp = pDiv.querySelector('.player-status') || document.createElement('div'); // Update status indicator
        if (!pDiv.querySelector('.player-status')) {
            statuspp.className = 'player-status';
            pDiv.appendChild(statuspp);
        }
        statuspp.textContent = player.hasFolded ? 'Folded' : player.isAllIn ? 'All-In' : '';
    });
    const realPlayer = document.querySelector('.cash-player p'); // Update human player cash
    if (realPlayer) realPlayer.textContent = players[0].cash;
    displayCommunityCards(); // Update community cards
    betAmountEl.textContent = totalBet; // Update total bet display
    betLogoEl.src = chip_img;
    if (playerIndex === 0 && gameStarted && !gameEnds) {// Update action buttons for real player
        checkCallButtonEl.innerText = currentBet > 0 ? `Call (${currentBet})` : 'Check';
        /* turns off check button (player cant use it) */
        checkCallButtonEl.disabled = players[0].hasFolded || players[0].isAllIn || (currentBet > 0 && players[0].cash <= 0);
        foldEl.disabled = players[0].hasFolded || players[0].isAllIn; // turns off fold button (player cant use it)
        raiseEl.disabled = players[0].hasFolded || players[0].isAllIn || players[0].cash <= 0; // turns off raise button (player cant use it)
        /* to update the movable bar amount for the real player */
        const smallBet = currentBet === 0 ? 1 : currentBet * 2;
        const bigBet = players[0].cash; 
        betSliderEl.min = smallBet;
        betSliderEl.max = bigBet;
        betSliderEl.value = Math.min(Math.max(smallBet, 10), bigBet); //used MATH function
        betSliderAmountEl.innerText = betSliderEl.value;
        raiseBarEl.style.display = players[0].hasFolded || players[0].isAllIn ? 'none' : 'block';
    } else {
        raiseBarEl.style.display = 'none';
    }
}
/* function to display the center cards in the table */
function displayCommunityCards() {
    centerCards.innerHTML = '';
    smallCards.innerHTML = '';
    const firstThree = round >= 2 ? 3 : 0;
    const seconFour = round >= 3 ? 1 : 0;
    const thirdFive = round >= 4 ? 1 : 0;
    for (let i = 0; i < firstThree + seconFour + thirdFive; i++) {
        const card = tableVariables.centerCards[i];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
        centerCards.appendChild(cardDiv);
        if (i === 2){
            const card = tableVariables.smallCards[0];
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            smallCards.appendChild(cardDiv);
        }
        else if (i === 3) {
            const card = tableVariables.smallCards[1];
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            smallCards.appendChild(cardDiv);
        }
        else if (i === 4) {
            const card = tableVariables.smallCards[2];
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
            smallCards.appendChild(cardDiv);
        }
    }
}
/* shuffleDeck function at the beggingig of the game */
function shuffleDeck() {
    const mixedCards = Object.values(deck).flat();/* take the deck Object and make it array (without `flat()` it will sort only 
    based on the 4 suits not all 52 cards) */
    for (let i = mixedCards.length - 1; i > 0; i--) {/* loop needs refrence */ /* swaps the cards and put them in allCards Obj */
        const j = Math.floor(Math.random() * (i + 1));
        [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];/* temp value can be used here to swap (it will take 3 steps) */
    }
    return mixedCards;
}
/* deal the cards for the player and the hand */
function dealCards(shuffledDeck) {
    for (let i = 0; i < 2; i++) {/* Deal 2 cards to each player (the last 8 mixed cards to the 4 players, each player will take one 
        in circle) */
        players.forEach(player => {
            if (!player.hasFolded) {
                player.hand.push(shuffledDeck.pop());
            }
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
    updateUI();
}
/* AIcomputer function to make players(2-4) computer players and make thier own Decisions in the game */
function ComputerPlayer() {
    if (!players[playerIndex].isAI || players[playerIndex].hasFolded || players[playerIndex].isAllIn || gameEnds) return;// only AI active 
    const callAI = currentBet - players[playerIndex].currentBet;
    const AIpower = AILearning(playerIndex);
    const randomEl = Math.random();
    const LVL = players[playerIndex].LVL;
    if (callAI > 0 && callAI >= players[playerIndex].cash) {// If AI cant call then go all-in
        placeBet(players[playerIndex].cash);
        return;
    }
    if (currentBet === 0) {// Check or bet (random)
        if (randomEl < (0.3 + AIpower * 0.4) * LVL) {
            //used MATH function
            const betAmount = Math.min( Math.floor(players[playerIndex].cash * (0.2 + AIpower * 0.3 * LVL)),players[playerIndex].cash);
            placeBet(Math.max(betAmount, 1)); // Min bet of 1
        } 
        else {
            isChecked();
        }
    } 
    else { // Call, raise or fold 
        if (randomEl < (0.4 + AIpower * 0.4) * LVL) {
            placeBet(callAI);
        } 
        else if (randomEl < (0.7 + AIpower * 0.2) * LVL && players[playerIndex].cash > callAI * 2) {
            const raiseAmount = Math.min(callAI * 2 + Math.floor(Math.random() * players[playerIndex].cash * 0.2 * LVL),players[playerIndex].cash);
            placeBet(raiseAmount);
        } 
        else {
            if (AIpower < 0.3 && randomEl < 0.5) {
                isFold();
            } 
            else {
                placeBet(callAI);
            }
        }
    }
}
/* function for AI player to detemine its LVL and to study the table cards */
function AILearning(playerIdx) {
    const playerCards = players[playerIdx].hand; //read all cards in the table
    const communityCards = tableVariables.centerCards.slice(0, 2 + round);
    const allCards = [...playerCards, ...communityCards];
    let pointsN = 0;
    let cardsPoints = 0;
    const totalCardsValue = {};
    allCards.forEach(card => {
        totalCardsValue[card.value] = (totalCardsValue[card.value] || 0) + 1;
        if (card.value > cardsPoints) cardsPoints = card.value;
    });
    Object.values(totalCardsValue).forEach(count => {
        if (count >= 2) pointsN++;
    });
    if (pointsN >= 1) {// Improve eevaluation
        const pointsSSR = 0.5 + (pointsN * 0.1) + (cardsPoints / 100);
        // all bonus for suited cards or higher ranks (Ex. straight)
        const fiveStarSuite = playerCards[0].img.split('_')[0] === playerCards[1].img.split('_')[0] ? 0.1 : 0;
        const TwofiveStarSuite = Math.abs(playerCards[0].value - playerCards[1].value) <= 2 ? 0.1 : 0;
        return Math.min(0.9, pointsSSR + fiveStarSuite + TwofiveStarSuite);
    }
    return cardsPoints / 20;
}
/* handle betting function */
function placeBet(amount) {
    if (amount > players[playerIndex].cash) {
        actionBar(`${players[playerIndex].name} doesn't have enough cash!`);
        return false;
    }
    const isAllCashIn = amount === players[playerIndex].cash;
    players[playerIndex].cash -= amount;
    players[playerIndex].currentBet += amount;
    totalBet += amount;
    players[playerIndex].isAllIn = isAllCashIn;
    if (amount > currentBet) {
        currentBet = amount;
        players[playerIndex].hasRaised = true;
        players.forEach(p => {// Only reset hasCalled for players who aren't all-in
            if (!p.isAllIn) p.hasCalled = false;
        });
        actionBar(`${players[playerIndex].name} ${isAllCashIn ? 'goes all-in with' : 'raised to'} ${amount}!`);
    } 
    else {
        players[playerIndex].hasCalled = true;
        actionBar(`${players[playerIndex].name} ${isAllCashIn ? 'goes all-in with' : 'called'} ${amount}`);
    }
    updateUI();
    nextMove();
    return true;
}
/* function for check/call button */
function isChecked() {
    if (currentBet > 0) {
        actionBar("Cannot check when there's a bet");
        return;
    }  
    players[playerIndex].hasChecked = true;
    actionBar(`${players[playerIndex].name} checked.`);
    nextMove();
}
/* function for check/call button */
function isCalled() {
    const callAmount = currentBet - players[playerIndex].currentBet;
    if (callAmount <= 0) {
        actionBar(`${players[playerIndex].name} has already matched the bet`);
        return;
    }
    if (callAmount >= players[playerIndex].cash) {
        placeBet(players[playerIndex].cash);
    } else {
        placeBet(callAmount);
    }
}
/* function for raise button */
function isRaised() {
    const betAmount = parseInt(betSliderAmountEl.innerText);
    const minR = currentBet === 0 ? 1 : currentBet * 2;
    if (betAmount < minR) {
        actionBar(`Minimum raise is ${minR}`);
        return;
    }
    placeBet(betAmount);
}
/* function for fold button */
function isFold() {
    players[playerIndex].hasFolded = true;
    actionBar(`${players[playerIndex].name} folded.`);
    updateUI();
    const activePlayers = players.filter(p => !p.hasFolded && !p.isAllIn);// Check if hand should end or move to next player
    if (activePlayers.length <= 1) {
        endOfTheHand();
    } else {
        nextMove();
    }
}
/* function used to move to next player in the round or move to next round if all betting and players acted */
function nextMove() {
    if (gameEnds) return;
    const activePlayers = players.filter(p => !p.hasFolded && !p.isAllIn);
    const allActed = activePlayers.every(p => (p.hasCalled && p.currentBet === currentBet) || (currentBet === 0 && p.hasChecked));
    if (allActed || activePlayers.length === 0) {
        proceedToNextRound();
    } else {
        nextPlayer();
    }
}
/* function used to move to next player in the round */
function nextPlayer() {
    if (gameEnds) return;
    let nextIndex = (playerIndex + 1) % players.length;
    let loopPlayers = 0;
    // Find next active player (not folded and not all-in)
    while ((players[nextIndex].hasFolded || players[nextIndex].isAllIn) && loopPlayers < players.length) {
        nextIndex = (nextIndex + 1) % players.length;
        loopPlayers++;
    }
    // If all players are folded or all-in except one, end hand
    if (loopPlayers >= players.length - 1) {
        endOfTheHand();
        return;
    }
    playerIndex = nextIndex;
    actionBar(`${players[playerIndex].name}'s turn.`);
    updateUI();
    if (players[playerIndex].isAI) {
        setTimeout(() => ComputerPlayer(), 1000);
    }
}
/* function to check if all players acted in the round and all bets finished to move to next round */
function proceedToNextRound() {
    if (gameEnds) return;
    const activePlayers = players.filter(p => !p.hasFolded);
    // If only one player hasn't folded, they win
    if (activePlayers.length <= 1) {
        endOfTheHand();
        return;
    }
    // If we've reached to the last round (round 4), proceed to end the hand
    if (round >= 4) {
        endOfTheHand();
        return;
    }
    round++; // move to next round and reset player status
    players.forEach(player => {
        if (!player.isAllIn) {
            player.hasChecked = false;
            player.hasCalled = false;
            player.hasRaised = false;
        }
        player.currentBet = 0;
    });
    currentBet = 0;
    actionBar(`Round ${round} starts`);
    updateUI();
    // Find first non-folded, non-all-in player after dealer
    playerIndex = (dealerIndex + 1) % players.length;
    while (players[playerIndex].hasFolded || players[playerIndex].isAllIn) {
        playerIndex = (playerIndex + 1) % players.length;
    }
    if (players[playerIndex].isAI) {
        setTimeout(() => ComputerPlayer(), 1000);
    }
}
/* function to update the UI and show all table cards and to calculate the end bet */
function endOfTheHand() {
    gameEnds = true;
    // show all cards
    players.forEach(player => {
        if (!player.hasFolded) {
            const pDiv = document.getElementById(`player${player.id}`);
            const cardPP = pDiv?.querySelector('.card-container');
            if (cardPP) {
                cardPP.innerHTML = '';
                player.hand.forEach(card => {
                    const cardD = document.createElement('div');
                    cardD.className = 'card';
                    cardD.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
                    cardPP.appendChild(cardD);
                });
            }
        }
    });
    // Calculate side bets and determine the winner
    const bettss = calculateSideBettss();
    if (bettss.length === 0) {
        const activePlayers = players.filter(p => !p.hasFolded);
        if (activePlayers.length === 1) {
            activePlayers[0].cash += totalBet;
            actionBar(`${activePlayers[0].name} wins ${totalBet}!`);
        } 
        else {
            const handTotalValue = calculateHandForPlayer(activePlayers);
            const THEwinner = chooseWinner(handTotalValue);
            const winAmount = Math.floor(totalBet / THEwinner.length);
            THEwinner.forEach(winner => {
                winner.player.cash += winAmount;
                actionBar(`${winner.player.name} wins ${winAmount} with ${handTypeToString(winner.ev_cards.strength)}!`);
            });
        }
    } 
    else {
        bettss.forEach(pot => {// Distribute bets
            const handTotalValue = calculateHandForPlayer(pot.players);
            const THEwinner = chooseWinner(handTotalValue);
            const winAmount = Math.floor(pot.amount / THEwinner.length);
            THEwinner.forEach(winner => {
                winner.player.cash += winAmount;
                actionBar(`${winner.player.name} wins ${winAmount} from side pot with ${handTypeToString(winner.ev_cards.strength)}!`);
            });
        });
    }
    dealerIndex = (dealerIndex + 1) % players.length;
    totalBet = 0;
    updateUI();
    start_resetEl.innerHTML = 'New Hand';
    gameStarted = false;
}
/* function to calculate side bets in the end of the hand and to be used in endOfTheHand() */
function calculateSideBettss() {
    const activePlayers = players.filter(p => !p.hasFolded);
    const bets = activePlayers.map(p => p.currentBet).sort((a,b) => a - b);
    const SSRBets = [...new Set(bets)];
    const bettss = [];
    let preLVL = 0;
    SSRBets.forEach(currentLevel => {
        const amount = currentLevel - preLVL;
        const ssPlayers = activePlayers.filter(p => p.currentBet >= currentLevel);
        if (ssPlayers.length > 0) {
            const petAmount = amount * ssPlayers.length;
            bettss.push({
                amount: petAmount,
                players: ssPlayers
            });
        }
        preLVL = currentLevel;
    });
    return bettss;
}
/* function used in end hand function to collect the set cards for each player */
function calculateHandForPlayer(players) {
    return players.map(player => {
        const allCards = [...player.hand, ...tableVariables.centerCards.slice(0, 2 + round)];
        return {
            player: player,
            ev_cards: evaluateHand(allCards)
        };
    });
}
/* function to determine the winner (call more than one function to calculate) */
function chooseWinner(handTotalValue) {
    handTotalValue.sort((a, b) => b.ev_cards.strength - a.ev_cards.strength || b.ev_cards.cardsPoints - a.ev_cards.cardsPoints);
    const THEwinner = [handTotalValue[0]];
    for (let i = 1; i < handTotalValue.length; i++) {
        if (handTotalValue[i].ev_cards.strength === THEwinner[0].ev_cards.strength && handTotalValue[i].ev_cards.cardsPoints === THEwinner[0].ev_cards.cardsPoints) {
            THEwinner.push(handTotalValue[i]);
        } 
        else {
            break;
        }
    }
    return THEwinner;
}
/* calculate the highes rank each player can get in the hand */
function evaluateHand(cards) {
    cards.sort((a, b) => b.value - a.value);
    const calculatedValue = {};
    cards.forEach(card => {
        calculatedValue[card.value] = (calculatedValue[card.value] || 0) + 1;
    });
    const calculatedSuit = {};
    cards.forEach(card => {
        const suit = card.img.split('/').pop().split('_')[0];
        calculatedSuit[suit] = (calculatedSuit[suit] || 0) + 1;
    });
    const flushSuit = Object.keys(calculatedSuit).find(suit => calculatedSuit[suit] >= 5);
    const flushCards = flushSuit ? cards.filter(card => card.img.includes(flushSuit)) : [];
    let straightHighCard = null;
    const SSRValues = [...new Set(cards.map(card => card.value))].sort((a, b) => b - a);
    for (let i = 0; i <= SSRValues.length - 5; i++) {
        if (SSRValues[i] - SSRValues[i + 4] === 4) {
            straightHighCard = SSRValues[i];
            break;
        }
    }
    if (!straightHighCard && SSRValues.includes(14) && SSRValues.includes(5) && SSRValues.includes(4) && SSRValues.includes(3) && SSRValues.includes(2)) {
        straightHighCard = 5;
    }
    if (flushSuit && straightHighCard) {
        const straightFlushCards = flushCards.filter(card => 
            card.value <= straightHighCard && card.value >= straightHighCard - 4
        );   
        if (straightFlushCards.length >= 5) {
            return {
                strength: straightHighCard === 14 ? HAND_RANKINGS.ROYAL_FLUSH : HAND_RANKINGS.STRAIGHT_FLUSH,
                cardsPoints: straightHighCard
            };
        }
    }
    const fourOfKindValue = Object.keys(calculatedValue).find(value => calculatedValue[value] === 4);
    if (fourOfKindValue) {
        return {
            strength: HAND_RANKINGS.FOUR_OF_A_KIND,
            cardsPoints: parseInt(fourOfKindValue)
        };
    }
    const threeOfKindValues = Object.keys(calculatedValue).filter(value => calculatedValue[value] >= 3).map(value => parseInt(value)).sort((a, b) => b - a);
    const pairValues = Object.keys(calculatedValue).filter(value => calculatedValue[value] >= 2 && !threeOfKindValues.includes(parseInt(value))).map(value => parseInt(value)).sort((a, b) => b - a);
    if (threeOfKindValues.length >= 1 && (threeOfKindValues.length >= 2 || pairValues.length >= 1)) {
        const cardsPoints = threeOfKindValues[0];
        const secondHighCard = threeOfKindValues.length >= 2 ? 
            threeOfKindValues[1] : pairValues[0];
        return {
            strength: HAND_RANKINGS.FULL_HOUSE,
            cardsPoints: cardsPoints * 100 + secondHighCard
        };
    }
    if (flushSuit) {
        return {
            strength: HAND_RANKINGS.FLUSH,
            cardsPoints: flushCards[0].value
        };
    }
    if (straightHighCard) {
        return {
            strength: HAND_RANKINGS.STRAIGHT,
            cardsPoints: straightHighCard
        };
    }
    if (threeOfKindValues.length >= 1) {
        return {
            strength: HAND_RANKINGS.THREE_OF_A_KIND,
            cardsPoints: threeOfKindValues[0]
        };
    }
    if (pairValues.length >= 2) {
        return {
            strength: HAND_RANKINGS.TWO_PAIR,
            cardsPoints: pairValues[0] * 100 + pairValues[1]
        };
    }
    if (pairValues.length >= 1) {
        return {
            strength: HAND_RANKINGS.ONE_PAIR,
            cardsPoints: pairValues[0]
        };
    }
    return {
        strength: HAND_RANKINGS.HIGH_CARD,
        cardsPoints: cards[0].value
    };
}
/* function that prints the winner hand rank */
function handTypeToString(handType) {
    switch(handType) {
        case HAND_RANKINGS.ROYAL_FLUSH: return "Royal Flush";
        case HAND_RANKINGS.STRAIGHT_FLUSH: return "Straight Flush";
        case HAND_RANKINGS.FOUR_OF_A_KIND: return "Four of a Kind";
        case HAND_RANKINGS.FULL_HOUSE: return "Full House";
        case HAND_RANKINGS.FLUSH: return "Flush";
        case HAND_RANKINGS.STRAIGHT: return "Straight";
        case HAND_RANKINGS.THREE_OF_A_KIND: return "Three of a Kind";
        case HAND_RANKINGS.TWO_PAIR: return "Two Pair";
        case HAND_RANKINGS.ONE_PAIR: return "One Pair";
        default: return "High Card";
    }
}
/* main function that prints the messages and actions in the action messages div */
function actionBar(message) {
    if (actionMessages.length < 12) {
        actionMessages.push(message);
    } else {
        actionMessages.shift();
        actionMessages.push(message);
    }
    
    for (let i = 0; i < messageEl.length; i++) {
        if (i < actionMessages.length) {
            messageEl[i].innerHTML = actionMessages[i]; 
        } 
    }
}

/*----------------------------------------------------------- Event Listeners -------------------------------------------------------*/
start_resetEl.addEventListener('click', startGame); /* event listener for start game button */
checkCallButtonEl.addEventListener('click', function() { /* event listener for check/call button */
    if (currentBet === 0) {
        isChecked();
    } else {
        isCalled();
    }
});
foldEl.addEventListener('click', isFold); /* event listener for fold button */
betSliderEl.addEventListener('input', function(event) { /* bet slider for real player event listener */
    betSliderAmountEl.innerText = event.target.value;
});
raiseEl.addEventListener('click', isRaised); /* when pressed raise take the bet amount from the movable bar and conver it to intager then go to bet function */