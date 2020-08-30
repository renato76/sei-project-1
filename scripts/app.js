function init() {

  // let currentPlayer, scores

  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  let currentPlayer = document.querySelector('#current-player')
  const playerOne = document.querySelector('#player-one')
  const playerTwo = document.querySelector('#player-two')
  
  playerOne
  playerTwo

  function newGame()  {
    currentPlayer = playerOne
    document.getElementById('score1').textContent = '0'
    document.getElementById('score2').textContent = '0'
  }
  newGame()


  // function nextPlayer() {
  //   playerOne ? playerTwo : playerOne
  // }



  const cells = []
  const width = 7 // how many cells wide is the grid
  const height = 6
  const gridCellCount = width * height // how many cells we want
  
  // Function to create the playing grid

  function createGrid() {
    for (let i = 0; i < gridCellCount; i++) { // this adds id number to each cell / div
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      cell.textContent = i
      cells.push(cell)
      grid.appendChild(cell)

    }
    // console.log('cells', cells)
  }

  createGrid()



  // Function that can return which column and place player1 or player2 color background

  cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
  }) 

  const colArray = []
  function handleClick(e) {
    const cell = e.target.id 
    // console.log('column', cell % width)
    const column = cell % width
    console.log('column', column)
    colArray.push(cell).id
    cells[Number(e.target.id)].classList.add('player-one') 
    console.log(colArray)

    
    // const findEmptyCell = column => {
    //   const cellNumbers = cells.filter(cell => {
    //     return cell.id % grid === column && cell.classList.length === 0
    //   })
    //   console.log(cellNumbers[cellNumbers.length - 1])

    // }

    
    
  
    



    // cells[Number(e.target.id)].classList.add('player-one') 
    // console.log(colArray)
    // console.log(colArray[colArray.length - 1])
  }
    


  // I have now created a Column Zero Array using a loop

  // const columnZero = []
  // for (let i = 0; i < cells.length; i += 7) {
  //   columnZero.push(cells[i])
  // }
  // console.log(columnZero)  
  

  // Added Event listener for columnZero

  // columnZero.forEach(cell => {
  //   cell.addEventListener('click', handleColumnClick)
  //   cell.style.backgroundColor = 'white'
  // })



  // function handleColumnClick(e) {
  //   const cell = e.target.id
  //   console.log(cell)
  //   columnZero.push(cell).id
  //   console.log(columnZero)
  //   console.log(columnZero[columnZero.length - 1])

  //   // create a for loop that returns the highest number
  //   // looking to start athe array.lenth-1, and iterate backwards
  //   for (let i = columnZero[columnZero.length - 1]; i >= 0; i--) {
  //     console.log(columnZero[i])
  //   }

  // }








  





















}



window.addEventListener('DOMContentLoaded', init)