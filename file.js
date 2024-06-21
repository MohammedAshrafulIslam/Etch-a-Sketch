const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");
const gridBtn = document.createElement("button");
gridBtn.classList.add("btn-grid");
gridBtn.textContent = "Enter the size";
buttons.appendChild(gridBtn);
let gridSize = 16;
gridBtn.addEventListener('click', newGrid );

function newGrid(){
  newGridSize = Number(window.prompt("Type a number", ""));
  gridSize = newGridSize;
  createGrid();
}

//gridSize = Number(window.prompt("Type a number", ""));
function createGrid(){
    container.innerHTML = ""; //clears the container before creating new grid, removes the grid from previous runs if any.
    for(let i = 0; i < (gridSize*gridSize); i++){
    const box = document.createElement("div");
    box.classList.add("grid-squares");
    container.appendChild(box);
    }
  }
createGrid();  
let boxes = container.querySelectorAll(".grid-squares"); //selected all the grids using it parent element which is container.
boxes.forEach(el); 


function el(e){
  e.addEventListener('mouseover', () => {
   // Change the button's background color
   e.style.backgroundColor = '#'+ Math.floor(Math.random()*16777215).toString(16); 
   //generates random color and the # is added to make it rgb;
  });
/*
  // Add a mouseout event listener
  e.addEventListener('mouseout', () => {
   // Change the button's background color back to its original color
   e.style.backgroundColor = '';
  });
*/
 }
 console.log('#'+Math.floor(Math.random()*16777215).toString(16));


 const btn = document.createElement("button");
 btn.classList.add("btn");
 btn.textContent = "RESET";
 buttons.appendChild(btn);

 btn.addEventListener('click', () => {
  location.reload();   // reloads the webpage when the reset button is clicked.
 })