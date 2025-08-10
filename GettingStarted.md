# Project Description:
Gwent Poker is an exciting web-based game. Players will engage in thrilling rounds against three computer opponents, each with unique AI strategies.

The game features a clean and intuitive interface built with HTML, CSS, and JavaScript, ensuring a seamless gaming experience. Players will follow traditional poker rules, making strategic decisions to outsmart their opponents and win chips.

# User Stories:
1.**Landing Page**

    As a user, I want to see a welcoming landing page when I arrive at the website so that I know I’m in the right place to play Gwent Poker.

2.**Game Instructions**

    As a user, I want to access clear instructions on how to play the game so that I can understand the rules and gameplay mechanics easily.

3.**Game Start**

    As a user, I want to click a “Start Game” button to initiate a new round so that I can begin playing without delay.

4.**Gameplay Interface**

    As a user, I want to see my cards gameplay so that I can make decisions.

5.**Action Buttons**

    As a user, I want to have clearly labeled buttons for actions like “Call,” “Raise,” and “Fold” so that I can easily choose my next move.

6.**AI Opponents**

    As a user, I want to play against three computer opponents with varying strategies so that I can enjoy a challenging and dynamic game.

7.**Current Bet Display**

    As a user, I want to see the current bet amount displayed prominently so that I can make decisions based on the ongoing stakes.

8.**Round Results**

    As a user, I want to see a clear message indicating the outcome of each round (win/loss) so that I can understand the results of my decisions.

9.**Score Tracking**

    As a user, I want my score and chip count to be displayed throughout the game so that I can keep track of my progress.

10.**Play Again Option**

    As a user, I want to be presented with an option to play another round after the game ends so that I can continue improving my skills and enjoy more gameplay.

~~***Note: some User stories are subject to change (:***~~

# Pseudocode:

* **Define a constant**
    ```
    MAX_PLAYERS = 4 // 4 palyers for the game (1 real, 3 AI)
    INITIAL_CHIPS = 100
    ```

* **Define a variables**
    ````
    playerList = []  // Array to hold player objects
    currentBet = 0
    isGameActive = false
    currentPlayerIndex = 0  
    ````

* **Define a (cache) elements**
    ````
    startButtonEl //startButton game

    callButtonEl //Button for Call action
    raiseButtonEl //Button for Raise action
    foldButtonEl  //Button for Fold action
    
    playAgainButtonEl //Button to play another round
    playerChipsDisplayEl //Display for player's chips
    
    opponentChipsDisplayEl //Display for opponents' chips
    currentBetDisplayEl // Display for current bet
    
    gameMessageDisplayEl //Area to show game messages
    
    playerHandDisplayEl // Display for player's hand
    ````

* **Define an event listeners**
    ````
    event listener to startButton
    event listeners to actionButtons
    listener to playAgainButton
    ````    

* **Define the Functions**
    
    1. initialize
    ````
    Resets all player states, including their chips and hands.
    Initializes the current bet and sets the game as active.
    ````

    2. render
    ````
    Updates the user interface to reflect the current state of the game.
    Displays player information, current bets, and any messages.
    ````
    
    3. handleUserAction
    ````
    Processes the user's action (Call, Raise, Fold) and updates the game state accordingly.
    Checks if the round has ended and determines the winner, then updates the UI.
    ````

    4. updated game state
    ````
    The function updates the game state based on the user's action (Call, Raise, or Fold). It adjusts the players' chips, the pot, and the game flow accordingly.
    ````

    5. handlePlayAgain
     ````
    Resets the game state for a new round by calling init().
    Renders the initial game state to prepare for the next round.
    ````

* **Computer Player Decision-Making function**

    ```
    The function determines the action for a computer player based on the current game state and its hand strength.

    The function first checks if the computer player is active in the round.
    
    The chosen action is executed by calling updateGameState.
    ```

* **Show the resultes**

    ```
    If the round has ended and handles rendering the results.
    
    It displays the winner and updates the chip counts for all players on the UI.

    The function calls handlePlayAgain() to prepare for the next round.
    ```

~~***Note: This is not fixed. some functions are subject to change (:***~~

# Useful pics:

### Rule:
![game theme](img\Poker_rules.png)
### Board:
![poker_board](img\poker_board.png)
