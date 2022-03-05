

//////////////////////////////////////////////////////////////

const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const rgbButton = document.querySelector(".rgb_button");


function createGrid (gridSize = 16){
  for (let i = 0; i < gridSize ** 2; i++){
    let columnRow = document.createElement("div");
    columnRow.classList.add("box");
    columnRow.addEventListener("mouseover", changeGridColor);
    container.appendChild(columnRow);
  }
}



function changeGridColor(e) {

  e.target.style.backgroundColor = "red";

}


clearButton.addEventListener("click", clearEverything);




function clearEverything () {
  const gridBox = document.getElementsByClassName("box");

  Array.from(gridBox).forEach(box =>
  box.style.background = "white")
}



createGrid();

