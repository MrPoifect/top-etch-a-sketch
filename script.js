const container = document.querySelector("#container");
const defaultColour = "rgb(185, 185, 185)";
let paintColour = "rgb(243, 0, 0)";

function createGrid(size) {
    for(i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("box", "column");
            row.appendChild(column);
            column.style.backgroundColor = defaultColour;
            column.addEventListener("mouseenter", function(){
                setGridColour(column, paintColour)
            });
            column.addEventListener("mouseleave", function(){
                revertGridColour(column)
            });
        }
    }
    
}

createGrid(64);

function setGridColour(box, colour) {
    box.style.backgroundColor = paintColour;
}

function revertGridColour(box) {
    box.style.backgroundColor = defaultColour;
}