// eas grid
let grid = document.querySelector(".grid");
// eas grid element
function createGridElement() {

    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.style.width = "25px";
    gridElement.style.height = "25px";
    gridRow.appendChild(gridElement);
}
// eas grid row
let gridRow = document.createElement("div");
gridRow.classList.add("grid-row");

// create eas grid
// x elements for row and x rows for grid

let gridSize = 16;

// loop that creates x new elements per row and then creates an x number of rows

// loop that creates x new elements per row

for (let index = 0; index < gridSize; index++) {
    createGridElement();
}

grid.appendChild(gridRow);