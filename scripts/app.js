function init() {

  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

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
    console.log('cells', cells)
  }

  createGrid()

  // Create function that can listen for mouse hovering 
  // over board and return a column number
  
  cells.forEach(cell => {
    cell.addEventListener('click', handleHover)
  }) 
  
  function handleHover(e) {
    const cell = e.target.id
    console.log('column', cell % width)
  }








  // create a function that will change the bg color of the first empty cell
  // in the chosen column


  




  
  



  








}



window.addEventListener('DOMContentLoaded', init)