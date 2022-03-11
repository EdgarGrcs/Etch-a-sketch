

//////////////////////////////////////////////////////////////

const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const slider = document.querySelector(".range_slider");
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

  if (setRainbow === true){
    e.target.style.backGroundColor = "rgba(255,255,255,0)";
  }

  e.target.style.backgroundColor = "grey";

}

rgbButton.addEventListener("click",setRainbow);
clearButton.addEventListener("click", clearEverything);

let rainbow = false;
function setRainbow () {

  if (rainbow === false){
    return true;
  }
  if (rainbow === true){
    return false;
  }

}


function clearEverything () {
  const gridBox = document.getElementsByClassName("box");

  Array.from(gridBox).forEach(box =>
  box.style.background = "white")
}



createGrid();

