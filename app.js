const container = document.querySelector(".container");
// console.log(container);
const resetButton = document.querySelector("#reset");
// console.log(resetButton);
const createNew = document.querySelector("#new-grid");

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

makeGrid(16,16);

container.addEventListener("mouseover", function(e) {
    // console.log(e.target.className);
    if(e.target.className != "container") {
        e.target.classList.add("drawn");
    }
});

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
})