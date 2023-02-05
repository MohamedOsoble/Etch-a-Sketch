const div = document.createElement('div');
const sketchContainer = document.querySelector('.sketch-container');
const DEFAULT_SIZE = 16;

function clearDivs(divName){
    const divs = document.getElementsByClassName(divName);
    while(divs.length > 0){
        divs[0].parentNode.removeChild(divs[0]);
    }
}

function editStyleSheet(length, canvasSize){

    sketchContainer.style.display = "grid";
    sketchContainer.style.setProperty('grid-template-columns', 'repeat(' + length + ', ' + canvasSize + 'px [col-start])');

}

function createCells(rows){
    let divs = rows * rows;
    let canvasSize = 800 / rows;
    editStyleSheet(rows, canvasSize);

    for(let i = 0; i < divs; i++){

        let row = document.createElement('div');
        row.style.cssText = "border: 1px solid black; height: " + canvasSize + "px; width: " + canvasSize + "px;";
        row.setAttribute('id', i);
        row.setAttribute('class', 'cell');
        sketchContainer.appendChild(row);
    };

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
});

};

function changeGridSize(){
    let exceedMaxSize = true;
    while(exceedMaxSize){
            var gridSize = prompt("Please enter a new grid size", DEFAULT_SIZE);
            if(gridSize < 101){
                exceedMaxSize = false;
            }
            else{
                alert("Maximum size is 100")
            }
    };

    // Remove the current grid
    clearDivs("cell");
    
    // Edit stylesheet to new grid length
    editStyleSheet(gridSize);

    // Build new grid
    createCells(gridSize);

}

createCells(DEFAULT_SIZE);
editStyleSheet(DEFAULT_SIZE);
