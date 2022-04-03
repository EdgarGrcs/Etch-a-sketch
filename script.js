

//////////////////////////////////////////////////////////////

const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const rgbButton = document.querySelector(".rgb_button");
const userInput = document.getElementById("quantity");


// creates a 16x16 grid
function createGrid (gridSize = 16){
  for (let i = 0; i < gridSize ** 2; i++){
    let columnRow = document.createElement("div");
    columnRow.classList.add("box");
    columnRow.addEventListener("mouseover",  gridColor);
    container.appendChild(columnRow);
  }
}

rgbButton.addEventListener("click", changeColorValue);

let counter = 0;

function changeColorValue(){

  const gridBox = document.getElementsByClassName("box");

if (counter % 2 === 0) {
  Array.from(gridBox).forEach(box =>
      box.removeEventListener("mouseover", gridColor));


  Array.from(gridBox).forEach(box =>
      box.addEventListener("mouseover", rainbowMode));
}

// this doesnt change the color back to grey, why?
if (counter % 2 !== 0){
  Array.from(gridBox).forEach(box =>
      box.removeEventListener("mouseover", rainbowMode));

  Array.from(gridBox).forEach(box =>
      box.addEventListener("mouseover", gridColor));
}





counter++
}



function rainbowMode(e) {
  let color = `rgb(${[0, 0, 0].map(channel => {
    return Math.floor(Math.random() * 256);
  }).join(',')})`
  Object.assign(e.target.style, {
    backgroundColor : color
  });
}


function updateGrid()  {
  container.innerHTML = "";
  container.style.setProperty(
      "grid-template-columns",`repeat(${userInput.value}, 2fr)`
  );
  container.style.setProperty(
      "grid-template-rows",
      `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++){
    let columnRow = document.createElement("div");
    columnRow.classList.add("box");
    columnRow.addEventListener("mouseover", gridColor);
    container.appendChild(columnRow);
  }
}


userInput.addEventListener("change", updateGrid);

function gridColor(e) {
  e.target.style.backgroundColor = "grey";
}


clearButton.addEventListener("click", clearEverything);

function clearEverything () {
  const gridBox = document.getElementsByClassName("box");

  Array.from(gridBox).forEach(box =>
  box.style.background = "white")


}



createGrid();

