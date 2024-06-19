const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
 const box = document.createElement("div");
 box.classList.add("grid-squares");
 container.appendChild(box);
}

let boxes = container.querySelectorAll(".grid-squares");
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
 container.appendChild(btn);

 btn.addEventListener('click', () => {
  location.reload();   // reloads the webpage when the reset button is clicked.
 })