function init() {


  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  const currentPlayer = document.querySelector('#current')
  currentPlayer.style.backgroundColor = 'yellow'
  currentPlayer.style.height = '50px'


  const reset = document.querySelector('#reset')
  reset.addEventListener('click', newGame)

  let score1 = 0
  document.querySelector('#score1').textContent = score1
  let score2 = 0
  document.querySelector('#score2').textContent = score2

  const cells = []

  const width = 7 // how many cells wide is the grid
  const height = 6
  const gridCellCount = width * height // how many cells we want

  // * using this to keep track of the current player
  let isPlayerOne = true

  // Function to create the playing grid
  function createGrid() {
    for (let i = 0; i < gridCellCount; i++) { // this adds id number to each cell / div
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      // cell.textContent = i
      cells.push(cell)
      grid.appendChild(cell)
    }
    
    // console.log('cells', cells)
  }
  createGrid()

  // Event listener to listen for each cell that is clicked
  // Function to find first empty cell available and place player1 or player2 color background
  cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
  }) 
  const colArray = []
  // * this function checks if the cell is empty or not and returns true or false
  function isCellEmpty(currentCell) {
    const result = !cells[Number(currentCell)].classList.contains('player-one') && !cells[Number(currentCell)].classList.contains('player-two')
    console.log('isCellEmpty', result)
    return result
  }


  function handleClick(e) { 
    const currentCell = Number(e.target.id) // * change to a number here eliminates the need for repetition!
    // const column = currentCell % width
    const totalCells = width * height - 1 // * total number of cells on grid
    const isBottomRow = (totalCells - currentCell - width) < 0 // * check if we are on the bottom row   
    // * this checks if the cell below has a counter on it or not, if it doesnt then you cant click above it
    if (!colArray.includes(currentCell + width) && !isBottomRow) return 
    // * this checks if the colArray already includes the id of the cell thats been clicked, only adds it if its a new cell
    if (!colArray.includes(currentCell)){
      colArray.push(currentCell).id
      console.log(colArray)
      // console.log(currentCell.id)
    }
    if (colArray.length === 42) {
      document.querySelector('h4').innerHTML = 'Its a draw!'
      currentPlayer.style.backgroundColor = '#3e3e3e'
    }
    // write an if statement that checks if there is a winner and insert into below code
  
    // * first part checks if current player is player one and if the cell they clicked is empty
    // * if the cell is empty then it adds the player-one class
    // * the else if does the reverse so is checking if the current player is 2
    if (isPlayerOne && isCellEmpty(currentCell)) {
      isPlayerOne = false // * reassigning isPlayerOne to false to switch player two to be the current player
      // this delays the switching current player to line up with the coin drop delay
      setTimeout(() => {
        currentPlayer.style.backgroundColor = '#005eff'
      }, 1100)     
      cells[currentCell].classList.add('animate__animated', 'animate__bounceInDown', 'player-one') 
      return checkForWinner() 
    } else if (!isPlayerOne && isCellEmpty(currentCell)) {
      isPlayerOne = true // * reassigning isPlayerOne to true to switch player one back to be the current player
      // this delays the switching current player to line up with the coin drop delay
      setTimeout(() => {
        currentPlayer.style.backgroundColor = 'yellow'
      }, 1100)  
      cells[currentCell].classList.add('animate__animated', 'animate__bounceInDown', 'player-two') 
      return checkForWinner()     
    } 
  }

  // Lets check for winning arrays!

  function checkForWinner() {
    const winningArrays = [
      // horizontal wins
      [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [7, 8, 9, 10], [8, 9, 10, 11], 
      [9, 10, 11, 12], [10, 11, 12, 13], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19],
      [17, 18, 19, 20], [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], 
      [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [35, 36, 37, 38], 
      [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], 

      // vertical wins
      [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
      [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
      [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
      [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], 

      // diagonal wins
      [21, 15, 9, 3], [28, 22, 16, 10], [22, 16, 10, 4], [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5], 
      [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6], [37, 31, 25, 19], [31, 25, 19, 13],
      [38, 32, 26, 20], [3, 11, 19, 27], [2, 10, 18, 26], [10, 18, 26, 34], [1, 9, 17, 25], [9, 17, 25, 33], 
      [17, 25, 33, 41], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [7, 15, 23, 31], [15, 23, 31, 39],
      [14, 22, 30, 38]
    ]
    // now take the 4 values in each winning array and plug into our cells array
    for (let i = 0; i < winningArrays.length; i++)  {
      const cellsOne = cells[winningArrays[i][0]]
      const cellsTwo = cells[winningArrays[i][1]]
      const cellsThree = cells[winningArrays[i][2]]
      const cellsFour = cells[winningArrays[i][3]]

      // now check these arrays to see if they have classList of player-one
      if (cellsOne.classList.contains('player-one') &&
          cellsTwo.classList.contains('player-one') &&
          cellsThree.classList.contains('player-one') &&
          cellsFour.classList.contains('player-one')) {

        result.innerHTML = 'Yellow Wins!'
        console.log('Yellow wins')
        score1 += 1
        document.querySelector('#score1').textContent = score1
        document.querySelector('h4').innerHTML = 'Game Over!'
        // currentPlayer.style.backgroundColor = '#3e3e3e'
        // Make all cells unclickable when there is a winner
        cells.forEach(cell => {
          cell.removeEventListener('click', handleClick)
        }) 
      
      // and check these arrays to see if they have classList of player-two
      } if (cellsOne.classList.contains('player-two') &&
              cellsTwo.classList.contains('player-two') &&
              cellsThree.classList.contains('player-two') &&
              cellsFour.classList.contains('player-two')) {
        result.innerHTML = 'Blue Wins!'
        console.log('Blue wins')
        score2 += 1
        document.querySelector('#score2').textContent = score2
        document.querySelector('h4').innerHTML = 'Game Over!'
        // Make all cells unclickable when there is a winner
        cells.forEach(cell => {
          cell.removeEventListener('click', handleClick)
        }) 
      }  
    } 
  }


  // Create a New Game function that is called on the New Game button
  function newGame()  {
    console.log('I am being clicked!')
    // used the cells for each, and re-applied the handleclick, then reset things back to start
    // whilst keeping the scores intact
    cells.forEach(cell => {
      cell.addEventListener('click', handleClick)
      cell.classList.remove('animate__animated', 'animate__bounceInDown', 'player-one', 'player-two') 
      result.innerHTML = ''
      document.querySelector('h4').innerHTML = 'Next Player'
      isPlayerOne ? !isPlayerOne : isPlayerOne
    }) 
  }

  

}
window.addEventListener('DOMContentLoaded', init)