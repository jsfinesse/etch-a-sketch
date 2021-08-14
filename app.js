const container = document.querySelector(".container");
// console.log(container);
const resetButton = document.querySelector("#reset");
// console.log(resetButton);
const createNew = document.querySelector("#new-grid");
const drawMode = document.querySelector("#drawing");
// console.log(drawMode);
const eraseMode = document.querySelector("#eraser");
// console.log(eraseMode);

let currMode = 1; // 1 - draw, 0 - erase

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(i=0; i < rows*cols; i++) {
        let item = document.createElement("div");
        container.appendChild(item).className = "grid-item";
    }
}

function deleteGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function switchMode() {
    if (currMode === 1) currMode = 0;
    else currMode = 1;
}

makeGrid(16,16);

let drag = false;
container.addEventListener("mousedown", function(e) {
    // console.log(e.target.className);
    // if(e.target.className != "container") {
    //     e.target.classList.add("drawn");
    // }
    drag = true;
});

container.addEventListener("mousemove", function (e) {
    if(e.target.className != "container" && drag && currMode === 1) {
        e.target.classList.add("drawn");
    }
    else if(e.target.className != "container" && drag && currMode === 0) {
        e.target.classList.remove("drawn");
    }
});

container.addEventListener("mouseup", () => drag=false);

resetButton.addEventListener("click", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    let arr = [...gridItems];
    arr.forEach(grid=>grid.classList.remove("drawn"));
});

createNew.addEventListener("click", () => {
    const input = document.getElementById("text-box").value;
    // console.log(typeof(parseInt(input)));
    if(typeof(parseInt(input)) != "number") {alert("Please enter a valid number"); return;}
    if(parseInt(input) > 64) {alert("Please enter a number less 64"); return;}
    let num = parseInt(input);
    deleteGrid();
    makeGrid(num,num);
});

drawMode.addEventListener("click", () => {
    switchMode();
});

eraseMode.addEventListener("click", () => {
    switchMode();
});