import { arrayData } from "./words.js";

let currentWord = "";

function randomWord(){
    currentWord = arrayData[Math.floor(Math.random()* (arrayData.length-1))];
    return currentWord;
}
console.log(randomWord());

// let countWords=0;
// let countLetter =0;

// while(countWords !=6){
//     while(countLetter !=5){
//         let letra=document.
//     console.log("Estamosen la letra", countLetter)
//     countLetter++;
//     if(countLetter==5){
//         let palabraJugador = " ";
//     }
// }   
//     countWords++;
//     countLetter =0;
//     if(palabraActual==palabraJugador);
//     if(countWords!=5 && palabraJugador != palabraActual){
//         console.log("Has ganado");
//         countWords ==6
//     }

// }
// console.log("Estamos en la linea",countWords)
// document.querySelectorAll()


