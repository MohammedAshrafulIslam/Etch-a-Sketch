const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");
const gridBtn = document.createElement("button");
gridBtn.classList.add("btn-grid");
gridBtn.textContent = "Enter the size";
buttons.appendChild(gridBtn);
let grids = 16;
gridBtn.addEventListener('click', newGrid );



//gridSize = Number(window.prompt("Type a number", ""));
function createGrid(){
    container.innerHTML = ""; //clears the container before creating new grid, removes the grid from previous runs if any.
    if(grids === 100 || grids <= 0){
      alert("Please enter a value between 1 and 100!")
      newGrids = Number(window.prompt("Please set the sixe of the grid(maximum 100)", ""));
    }
    else{
      container.style.setProperty('--grid-size', grids); //not sure!
      for(let i = 0; i < (grids*grids); i++){
      const box = document.createElement("div");
      box.classList.add("grid-squares");
      box.style.width = String(640/(grids)) + 'px';
      box.style.height = String(640/(grids)) + 'px';
      container.appendChild(box);
      }
    }
  }
createGrid();  
let boxes = container.querySelectorAll(".grid-squares"); //selected all the grids using it parent element which is container.
boxes.forEach(el); 
function newGrid(){
  newGrids = Number(window.prompt("Please set the sixe of the grid(maximum 100)", ""));
  grids = newGrids;
  createGrid();
  let boxes = container.querySelectorAll(".grid-squares"); //selected all the grids using it parent element which is container.
  boxes.forEach(el); 
}

function el(e){
  e.addEventListener('mouseover', () => {
   // Change the button's background color
   e.style.backgroundColor = '#'+ Math.floor(Math.random()*16777215).toString(16); 
   //generates random color and the # is added to make it rgb;
  });
 }
 console.log('#'+Math.floor(Math.random()*16777215).toString(16));


 const btn = document.createElement("button");
 btn.classList.add("btn");
 btn.textContent = "RESET";
 buttons.appendChild(btn);

 btn.addEventListener('click', () => {
  location.reload();   // reloads the webpage when the reset button is clicked.
 })