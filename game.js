import { keybFisic, keyboardVirtual } from "./keyboard.js";
import { randomWord, checkWord } from "./wordles2.js";

let word = randomWord();
console.log(word);
let round = 1;
let temporalWord = "";
const spanToggle = document.querySelector('#toggle-theme');
const spanInfo = document.querySelector('#info');
const divHidden= document.getElementById('hidden')

spanToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    
});
spanInfo.addEventListener('click', ()=>{
    if(divHidden.classList.contains("hidden")){
        divHidden.classList.replace('hidden', 'show');
    }else {
        divHidden.classList.replace('show', 'hidden');
    }
})



function writeposition(id, value) {
    document.getElementById(id).innerText = value.toUpperCase();
}
function paint(position, res) {
    for (let i = 0; i < 5; i++) {
        document.getElementById(position + "" + (i + 1)).style.backgroundColor = res.value[i];
        document.getElementById(position + "" + (i + 1)).style.color = "white";
    }
}
function paintKeybord (arrResponse){
    let button;
    let letter;
    for (let i = 0; i < arrResponse.length; i++) {  
      letter= temporalWord.charAt(i);
      button = document.getElementById(letter); 
      if (!button.classList.contains("bg-green")) {
            button.className="tecla"; 
        if (arrResponse[i]=="#787C7E") {
            button.classList.add("bg-grey"); 
        }
        if (arrResponse[i]=="#6AAA64") {
            button.classList.add("bg-green"); 
        } 
        if (arrResponse[i]=="#C9B458") {
            button.classList.add("bg-yellow"); 
        }   
          
      }  
    }
}
function restartVirtualKeyboard (){
    let keys= document.getElementsByClassName("tecla");
    for (let i = 0; i < keys.length; i++) {
        keys[i].className="tecla"; 
    }

}
function finishGame (round) {
    if (round>6) {
        swal("Se acabaron los intentos. Tu palabra era " + "-" + word );
        resetGame();

    }
}
function resetGame() {
    word= randomWord();
    round=1;
    temporalWord=""; 

    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 5; j++) {
            document.getElementById(i + "" + j).style.backgroundColor = "white";//
            document.getElementById(i + "" + j).style.color = "";
            writeposition(i + "" + j, "");
        }   
        
    }
    restartVirtualKeyboard();
    console.log(word);

}
function makeWord(key) {
    //console.log(key);
    if (key == "Backspace") {
        if (temporalWord != "") {
            writeposition(round + "" + temporalWord.length, " ");
            temporalWord = temporalWord.slice(0, -1)
        }
    } else if (key == "Enter") {

        let response = checkWord(temporalWord.toUpperCase());
        if (response.status) {
            paintKeybord(response.value);
            let wined = true;
            for (let i = 0; i < response.value.length && wined; i++) {
                wined = response.value[i] == "#6AAA64" && wined;
                paint(round, response);  
            }
            if (!wined) {
                round++;
                finishGame(round);
                temporalWord= "";
                
            } else {
               setTimeout(()=>{
                swal("¡Enhorabuena crack!");
                resetGame();
                },500);
            }

        }else {
            swal(response.value);
        }
        
    } else {
        if (temporalWord.length < 5) {
            temporalWord += key;
            writeposition(round + "" + temporalWord.length, key);
        }

    } 
}


keybFisic(makeWord);
keyboardVirtual(makeWord);

