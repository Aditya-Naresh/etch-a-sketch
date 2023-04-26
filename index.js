let board = document.querySelector('.board');
let outerDiv = [];
let size = 16;
const myButton = document.getElementById("sizeButton");
myButton.addEventListener("click", function() {
  let newSize = parseInt(prompt("Enter the desired size"))

  if(newSize > 100){
    size = 100
  }else{
    size = newSize
  }
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  for (let i = 0; i < size; i++) {
      outerDiv[i] = document.createElement('div');
      outerDiv[i].classList.add('row');
  
      let innerDiv = [];
  
      for (let j = 0; j < size; j++) {
          innerDiv[j] = document.createElement('div');
          innerDiv[j].classList.add('box');
          outerDiv[i].appendChild(innerDiv[j]); 
          
          innerDiv[j].addEventListener("mouseenter", () => {
              innerDiv[j].classList.add('black')
          })
  
        //   innerDiv[j].addEventListener("mouseleave", () => {
        //       innerDiv[j].classList.remove('black')
        //   })
      } 
      board.appendChild(outerDiv[i]);  
  }
});
