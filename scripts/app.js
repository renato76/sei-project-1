function init() {

  const grid = document.querySelector('.grid')

  const cells = []
  const width = 7 // how many cells wide is the grid
  const gridCellCount = width * 6 // how many cells we want

  const player1 = []
  const player2 = []
  
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
    console.log(cell % width)
  }

  cells.forEach(cell => {
    cell.addEventListener('click', handleHover)
  })


  // Create a function that return row id

  


  // create a function that will change the bg color of the first empty cell
  // in the chosen column







  
  



  








}



window.addEventListener('DOMContentLoaded', init)