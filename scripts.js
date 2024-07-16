// eas grid
let grid = document.querySelector(".grid");
//grid size
let gridSize = 32;
let slider = document.getElementById("myRange");

document.getElementById("sliderRange").textContent = `resolution: ${gridSize}`;
slider.oninput = function() {
    while (grid.firstChild) { 
        grid.firstChild.remove(); 
    }
  gridSize = this.value;
  document.getElementById("sliderRange").textContent = `resolution: ${gridSize}`;
  createGrid();
}
createGrid();
function createGrid() {
    
// loop for rows
for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    // loop for elements
    for (let j = 0; j < gridSize; j++) {
        let elementID = `grid-element${i}e${j}`;
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.id = elementID;
        gridElement.style.opacity = 1.0;
        gridRow.appendChild(gridElement);
    }
    grid.appendChild(gridRow);

}
}

//color selector
let easColor = "gray";

//on hover
let canSketch = false;

document.onmousedown = function (e) {
    let thisElementID = e.target.id.toString();
    let validator = thisElementID.slice(0, 12);
    if (validator === "grid-element") {
        canSketch = !canSketch;
    }
}

document.onmouseover = function (e) {
    if (canSketch) {
        let thisElementID = e.target.id.toString();
    let validator = thisElementID.slice(0, 12);
    if (validator === "grid-element") {
        let thisGridElement = document.getElementById(thisElementID);
        let gridElementStyle = thisGridElement.style;
        if(darken && gridElementStyle.opacity > 0) {
            gridElementStyle.opacity -= 0.1;
        }   
        else{
            gridElementStyle.backgroundColor = easColor;
            gridElementStyle.opacity = 1;
        if (rainbowMode) gridElementStyle.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
    }
    }
}

let darken = false;
let rainbowMode = false;
let colors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

//buttons 
let options = document.querySelector(".grid-options-wrapper");
options.addEventListener("click", (event) => {
    let option = event.target;
    console.log(option.id);
    switch (option) {
        case rainbowButton:
            rainbowMode = !rainbowMode;
            rainbowMode ? document.getElementById("rainbowButton").style.backgroundColor = "lightsalmon":document.getElementById("rainbowButton").style.backgroundColor = "#04AA6D";
            break;
        case darkenButton:
            darken = !darken;
            darken ? document.getElementById("darkenButton").style.backgroundColor = "lightsalmon":document.getElementById("darkenButton").style.backgroundColor = "#04AA6D";
            break;
        case resetButton:
            while (grid.firstChild) { 
            grid.firstChild.remove(); 
        }
            createGrid();
            break;
    
        default:
            break;
    }
})