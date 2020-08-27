function init() {

  const grid = document.querySelector('.grid')

  const cells = []
  const width = 7 // how many cells wide is the grid
  const gridCellCount = width * 6 // how many cells we want



  function createGrid() {
    for (let i = 0; i < gridCellCount; i++) { // this adds id number to each cell / div
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      grid.appendChild(cell)
      cells.push(cell)
    }
    console.log('cells', cells)
  }

  createGrid()















}



window.addEventListener('DOMContentLoaded', init)