var refs={body:document.querySelector("body"),btn_start:document.querySelector("button[data-start]"),btn_stop:document.querySelector("button[data-stop]")};console.log(refs.btn_start),refs.btn_start.addEventListener("click",handleClickStart),refs.btn_stop.addEventListener("click",handlerClickStop),refs.btn_stop.setAttribute("disabled",!0);var intervalId=0;function handleClickStart(){genereteColorBody(),refs.btn_start.setAttribute("disabled",!0),refs.btn_stop.removeAttribute("disabled")}function handlerClickStop(){clearInterval(intervalId),refs.btn_stop.setAttribute("disabled",!0),refs.btn_start.removeAttribute("disabled")}function genereteColorBody(){intervalId=setInterval((function(){refs.body.style.backgroundColor=getRandomHexColor()}),1e3)}function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}
//# sourceMappingURL=01-color-switcher.096d7fcf.js.map
