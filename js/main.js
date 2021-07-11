const decrement= document.querySelector('#decrement');

const increment= document.querySelector('#increment');

let display = document.querySelector('#display');

increment.addEventListener('click', ()=>{
    let result = display.textContent++;

    if (result >= 50){
        result= display.textContent = "Max reach";

        output.style.fontSize = "2rem"
    }
    
});

decrement.addEventListener('click', ()=>{
    let result = display.textContent--;

    if (result <= 0){
        result= display.textContent = "Min reach";
        
        output.style.fontSize = "2rem"
    }
})


// increment.addEventListener('click', ()=>
// {
//     let result = display.textContent++;

//     if (result===50){
//         result.reset()
//     }
//     else{

//     }
// });