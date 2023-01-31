const div = document.createElement('div');
const sketchContainer = document.querySelector('.sketch-container');

let divs = 16;

// for(let i = 0; i < divs; i++){
//     let cell = document.createElement('div');
//     cell.setAttribute('id', i);
//     sketchContainer.appendChild(cell);
// }

function createCells(rows, columns){
    for(let i = 0; i < rows; i++){
        let row = document.createElement('div');
        row.setAttribute('id', i);
        sketchContainer.appendChild(row);
        for(let j = 0; j < columns; j++){
            let cell = document.createElement('div');
            cell.setAttribute('id', j);
            cell.textContent = "a";
            cell.style.backgroundColor = "black";
            row.appendChild(cell);
        }

    }
}

createCells(16, 16,);