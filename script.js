

//////////////////////////////////////////////////////////////

let container = document.querySelector(".container");
let size = parseInt(window.getComputedStyle(container).width, 10)

function createGrid(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    let gridBlock = document.createElement("div");
  
    gridBlock.classList.add("box");

    gridBlock.addEventListener("mouseover", changeGridColor);
    container.appendChild(gridBlock);
  }
}

function changeGridColor() {}

createGrid(16);
