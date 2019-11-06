const btnClear = document.querySelector(".clear");
const container = document.querySelector(".container");
const gridContainer = document.querySelector("#grids");
let gridNum = 16;

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i =0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const createGrids = () => {
    const gridContainerWidth = document.getElementById("grids").offsetWidth
    const divWidth = gridContainerWidth / gridNum;
    
    for (let i =0; i < gridNum * gridNum; i++){
        let div = document.createElement("div");
        div.style.background = "#14145b";
        div.style.border = "solid #37474F 0.1px";
        
        gridContainer.appendChild(div);
    }
    
    gridContainer.style.gridTemplateRows = `repeat(${gridNum}, ${divWidth}px [row-start]`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, ${divWidth}px [column-start]`;  
    const divs = document.querySelectorAll( '#grids div');
    
    divs.forEach((div) => {
        let hover = () => { 
            div.style.background = getRandomColor();
        }
        div.addEventListener("mouseenter", hover);    
    });
}

const clearGrid = () => {
    gridNum = prompt("What size do you want the grid to be?");
    while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.lastChild);
}
    createGrids();
}

btnClear.addEventListener("click", clearGrid);


