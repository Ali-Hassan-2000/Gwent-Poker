# Gwent-Poker
Gwent Poker is an exciting web-based game. Players will engage in thrilling rounds against three computer opponents, each with unique AI strategies.
## Overview
Gwent Poker is a digital poker game that combines the traditional rules of poker with an engaging user interface. Players can compete against AI opponents, manage their bets, and enjoy the strategic elements of poker.

![Gwent Poker](./img/Poker_rules.png)
## Table of Contents
- [Features](#features)
- [Game Instructions](#game-instructions)
- [Functions Overview](#functions-overview)
- [AI Computer Player](#ai-computer-player)
- [References](#references)

## Features
- Play against up to 3 AI opponents.
- Manage bets with an intuitive slider.
- Dynamic card dealing and display.
- Action messages to guide players through the game.
- Rules and hand rankings display for quick reference.

## Game Instructions
- Start the Game: Click the "Start Game" button to initiate play.
- Place Bets: Use the slider to adjust your bet amount and click "Raise" to place your bet.
- Actions: Choose to "Check", "Call", or "Fold" based on your strategy.
- Community Cards: Watch as community cards are revealed in the center of the table.
- End of Hand: The game will determine the winner based on hand rankings.

### Hand Rankings:
1. Royal Flush: A, K, Q, J, 10, all of the same suit.
2. Straight Flush: Five cards in sequence, all of the same suit.
3. Four of a Kind: Four cards of the same rank.
4. Full House: Three of a kind and a pair.
5. Flush: Five cards of the same suit.
6. Straight: Five cards in sequence.
7. Three of a Kind: Three cards of the same rank.
8. Two Pair: Two sets of pairs.
9. One Pair: Two cards of the same rank.
10. High Card: The highest card in the hand.

## Functions Overview
`startGame()`

*Initiates the game, shuffles the deck, deals cards, and collects starting bets.*

`resetGame()`

*Resets the game state, player hands, and UI elements for a new round.*

`collectStartingBets()`

*Collects the initial bets for the small and big blinds.*

`placeStartingBets()`

*Calculates and places the starting bets for the specified player.*

`updateUI()`

*Refreshes the user interface to reflect current player statuses, bets, and community cards.*

`displayCommunityCards()`

*Displays the community cards on the table based on the current round.*

`shuffleDeck()`[1]

*Shuffles the deck of cards and returns a mixed array of cards.*

`dealCards()`[1]

*Deals cards to players and the community based on the shuffled deck.*

`ComputerPlayer()`[2]

*Simulates actions for AI opponents based on their strategy and hand strength.*

`AILearning()`[2]

*Evaluates the AI's hand strength and improves its decision-making.*

`placeBet()`

*Handles the betting logic, adjusting player cash and current bets.*

`isChecked()`

*Handles the logic for the check action.*

`isCalled()`

*Handles the logic for the call action.*

`isRaised()`

*Handles the logic for the raise action based on the slider amount.*

`isFold()`

*Handles the logic for the fold action.*

`nextMove()`

*Moves to the next player in the round or proceeds to the next round if all players have acted.*

`nextPlayer()`

*Finds and activates the next player in the round.*

`proceedToNextRound()`

*Checks if all players have acted and proceeds to the next betting round.*

`endOfTheHand()`

*Ends the hand, determines the winner, and updates player cash accordingly.*

`calculateSideBettss()`

*Calculates side bets based on current betting amounts and active players.*

`calculateHandForPlayer()`

*Evaluates the best hand for each player and returns their hand strength.*

`chooseWinner()`

*Determines the winner(s) based on evaluated hand values.*

`evaluateHand()`

*Calculates the highest rank each player can achieve with their cards.*

`handTypeToString()`

*Converts hand rankings into readable string format.*

`actionBar()`

*Displays action messages to the player in the UI.*

## AI Computer Player [2]
The AI opponents in Gwent Poker utilize a basic strategy based on their hand strength and current bets. They can perform the following actions:

- Check: If no bet has been made, the AI may choose to check.
- Call: If there is a bet, the AI can match it.
- Raise: The AI can increase the current bet based on its perceived hand strength.
- Fold: The AI can fold if it determines its hand is weak.

The AI decisions are influenced by a random factor combined with an evaluation of their hand, allowing for variability in gameplay.

## References
- [1] [shuffling a standard deck of cards](https://github.com/beck410/card-shuffle.git)
used in `shuffleDeck()` & `dealCards()`
- [2] [AI functions](poe.com). I used GPT-4.1 to help me with the functions (used MATH Obj)
- [3] [Cards imgs](https://github.com/hanhaechi/playing-cards.git). cards used in the game
- [4] [Audio](pixabay.com). game sound effects 