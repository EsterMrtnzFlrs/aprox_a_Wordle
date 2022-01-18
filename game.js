import { keybFisic, keyboardVirtual } from "./keyboard.js";
import { randomWord, checkWord } from "./wordles2.js";

let word = randomWord();
console.log(word);
let possible = 1;
let temporalWord = "";



function writeposition(id, value) {
    document.getElementById(id).innerText = value.toUpperCase();
}
function paint(position, res) {
/*     document.getElementById(position + "1").style.backgroundColor = res.value[0];
    document.getElementById(position + "2").style.backgroundColor = res.value[1];
    document.getElementById(position + "3").style.backgroundColor = res.value[2];
    document.getElementById(position + "4").style.backgroundColor = res.value[3];
    document.getElementById(position + "5").style.backgroundColor = res.value[4]; */
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
          //button.classList.add()
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
function finishGame (possible) {
    if (possible>6) {
        alert("Has perdido prigao. Tu palabra era" + "" + word);
        resetGame();

    }
}
function resetGame() {
    word= randomWord();
    possible=1;
    temporalWord=""; 

    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 5; j++) {
            document.getElementById(i + "" + j).style.backgroundColor = "white";//
            document.getElementById(i + "" + j).style.color = "";
            writeposition(i + "" + j, "");
        }   
        
    }
    restartVirtualKeyboard();


}
function makeWord(key) {
    //console.log(key);
    if (key == "Backspace") {
        if (temporalWord != "") {
            writeposition(possible + "" + temporalWord.length, " ");
            temporalWord = temporalWord.slice(0, -1)
        }
    } else if (key == "Enter") {

        let response = checkWord(temporalWord.toUpperCase());
        if (response.status) {
            paintKeybord(response.value);
            let wined = true;
            for (let i = 0; i < response.value.length && wined; i++) {
                wined = response.value[i] == "#6AAA64" && wined;
                paint(possible, response);  
            }
            if (!wined) {
                possible++;
                finishGame(possible);
                temporalWord= "";
                
            } else {
               setTimeout(()=>{
                alert("Enhorabuena");
                resetGame();
                },500);

                
            }

        }else {
            alert(response.value);
        }
        
    } else {
        if (temporalWord.length < 5) {
            temporalWord += key;
            writeposition(possible + "" + temporalWord.length, key);
        }

    } console.log(temporalWord);
}


keybFisic(makeWord);
keyboardVirtual(makeWord);

