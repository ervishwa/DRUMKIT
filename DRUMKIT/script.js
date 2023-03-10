// selectors

const buttons = document.querySelectorAll("button");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
     let n = this.innerHTML;
     playsound(n);
     buttonanimation(n);
     
     // what to do when clicked.
    })
}
document.addEventListener("keydown",function(event){
   let m = event.key;
   playsound(m);
   buttonanimation(m);

})

function playsound(input){
    switch(input){
        case "w":
            const audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case "a":
            const audio1 = new Audio("./sounds/kick-bass.mp3");
            audio1.play();
        break;
        case "s":
            const audio2 = new Audio("./sounds/snare.mp3");
            audio2.play();
        break;
        case "d":
            const audio3 = new Audio("./sounds/tom-1.mp3");
            audio3.play();
        break;
        case "j":
            const audio4 = new Audio("./sounds/tom-2.mp3");
            audio4.play();
        break;
        case "k":
            const audio5 = new Audio("./sounds/tom-3.mp3");
            audio5.play();
        break;
        case "l":
            const audio6 = new Audio("./sounds/tom-4.mp3");
            audio6.play();
        break;
        default :console.log("u press a wrong key");

     }
}

function buttonanimation(cuurentkey){
const key = document.querySelector("."+cuurentkey);
key.classList.add("pressed");
setTimeout(() => {
   key.classList.remove("pressed"); 
},100);

}
