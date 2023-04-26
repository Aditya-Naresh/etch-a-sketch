let board = document.querySelector('.board');
let outerDiv = [];

for (let i = 0; i < 16; i++) {
    outerDiv[i] = document.createElement('div');
    outerDiv[i].classList.add('row');

    let innerDiv = [];

    for (let j = 0; j < 16; j++) {
        innerDiv[j] = document.createElement('div');
        innerDiv[j].classList.add('box');
        outerDiv[i].appendChild(innerDiv[j]); 
        
        innerDiv[j].addEventListener("mouseenter", () => {
            innerDiv[j].classList.add('black')
        })

        innerDiv[j].addEventListener("mouseleave", () => {
            innerDiv[j].classList.remove('black')
        })
    } 
    board.appendChild(outerDiv[i]);  
}
