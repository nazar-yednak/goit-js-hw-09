const refs =
{
    body: document.querySelector('body'),     
    btn_start: document.querySelector('button[data-start]'),
    btn_stop: document.querySelector('button[data-stop]')
}
    console.log(refs.btn_start);

refs.btn_start.addEventListener("click", handleClickStart);
refs.btn_stop.addEventListener("click", handlerClickStop)
refs.btn_stop.setAttribute("disabled", true)

let intervalId = 0;
function handleClickStart() { 
    genereteColorBody()     
    refs.btn_start.setAttribute("disabled", true);  
    refs.btn_stop.removeAttribute("disabled");
    
}
function handlerClickStop(){

    clearInterval(intervalId);
    refs.btn_stop.setAttribute("disabled", true);  
    refs.btn_start.removeAttribute("disabled")
 }

function genereteColorBody() {
   intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000); 
  
    
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}
