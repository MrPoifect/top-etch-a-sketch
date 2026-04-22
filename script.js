const container = document.querySelector("#container");
const defaultColour = "rgb(226, 226, 226)";
let paintColour = "rgb(0, 0, 0)";
let randomColour = false;
const pickerContainer = document.querySelector(".pickerBoxes");
const rainbowButton = document.querySelector(".rainbowBtn");
const resizeButton = document.querySelector(".sizeBtn");

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
        }
    }
    
}

function setGridColour(box, colour) {
    box.style.backgroundColor = paintColour;
    if (randomColour) {
        paintColour = randomiseColour();
    }
}


function randomiseColour() {
    let r = Math.random() * (255 - 1) + 1;
    let g = Math.random() * (255 - 1) + 1;
    let b = Math.random() * (255 - 1) + 1;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function fillPickerBox() {
    for(i = 0; i < 10; i++) {
        const box = document.createElement("div");
        box.classList.add("pickerBox");
        const col = randomiseColour();
        box.style.backgroundColor = col;
        box.addEventListener("click", () => {
            paintColour = col;
        })
        pickerContainer.appendChild(box);
    }
}

function toggleRainbow(){
    if (!randomColour){
        randomColour = true
        rainbowButton.textContent = "Rainbow Mode: On"
    } else {
        randomColour = false
        rainbowButton.textContent = "Rainbow Mode: Off"
    }
}

function resizeCanvas(){
    let newSize = window.prompt("New Canvas Size(16-100):");
    if (newSize > 100){
        newSize = 100;
    } else if (newSize < 16) {
        newSize = 16
    }
    container.innerHTML = "";
    console.log(newSize)
    createGrid(newSize);
}

rainbowButton.addEventListener("click", toggleRainbow);

resizeButton.addEventListener("click", resizeCanvas);



createGrid(16);
fillPickerBox();