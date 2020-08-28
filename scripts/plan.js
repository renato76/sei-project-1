/*

****************  >>>>>>>>>>>>>>>>        HTML           <<<<<<<<<<<<<<  **************

divs for main 7 x 6
divs for each little box, will try to create from JS


****************  >>>>>>>>>>>>>>>>         CSS           <<<<<<<<<<<<<<  **************

Layout

-Main 3/4 of page
  -grid-wrapper
    -grid
  -right side 1/4 page
    -scores
    -controls

Styling for player 1 & player 2 pieces
Styling for the scores and for the controls
Frame for the grid

Icons: Need 2 colored icons as pieces. RED & YELLOW

Need an indicator Icon like a white arrow or similar





****************  >>>>>>>>>>>>>>>>      Javascript      <<<<<<<<<<<<<<  **************

General Notes

// 7 x 6 grid generated with a for loop

Player 1 Red
Player 2 Yellow

lots of if else statements that keep checking win condition - tracking indexes

seperate win condition as a function to call



************     START GAME     ******************


What happens when Player 1 clicks START button? 
Player 1 starts first, lets say RED



*****************      GRID EVENTS      ******************

1. indicator at top - moves on on mouse hover or mouseenter, according to which column mouse is in
This will need a function that can see which grid column mouse is in, and copy that column for the indicator

2. on mouse out, so if going off the grid, then should just be normal mouse cursor
This will need some sort of switch off feature or similar

what happens when....user clicks a column?
When a user clicks a column, it should drop his piece into that column, and you should see the piece move down smoothly and end bouncing.

when a user hovers across, there should be an indicator at top to show which column he is in.

It should not matter what height row they are in, that should make no difference, it's only about columns




**************** How do Pieces move and stop etc  ***************


Looking at the grid, I could haven an x and y axis

So Positions would be a grid reference with an x and y position, total of 42 possibilities

So lets just think like a game starts, what happens?

Player 1 Red - clicks column x3. 
A red playing piece drops down col 3 and stops at the last row, x3, y1 OR div ID #37





***************      The Winning Logic        ************************

Player 1 Array []
Player 2 Array []

Massive If else statement to check all the possible winning combinations:

24 possible wins horizontally
21 possible wins vertically
24 possible wins diagonally




***************        Game Flow              *************************

1. setUpBoard()
2. displayBoard()

if GameRunning, (every time player chooses):
1. The div id gets pushed into the player's array
2. placeToken() this puts token in correct grid position
3. checkForWinner()
4. switchPlayer()

ifGameOver() 
1. displayWinner()
2. updateScores
3. newGame()



Notes

I have added cell.textcontent to each grid, so they're all numbered 0-41
Perhaps I could create arrays for each column using either this cell.textcontent or cell.div.ID

If I have an array for each column I could then decide which columns the piece foes into and also have
an indicator follow the mouse hover as it hovers across the grid




























*/