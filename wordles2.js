import { arrayData } from "./words.js";

export { randomWord, checkWord };

let currentWord = "";

function randomWord() {
    currentWord = arrayData[Math.floor(Math.random() * (arrayData.length-1))];
    return currentWord;
}

function checkWord(userWord){
    if(userWord.length==5) {
        let finded = false;
        for( let i = 0; i<arrayData.length && !finded;i++){
            finded=(userWord==arrayData[i]);
        }
        if(!finded){
            return {"status":false, "value":"Palabra incorrecta"};
        } else {
            let result=Array(5);
            let ignore=[];
            for (let i = 0; i < currentWord.length; i++) {
                if(currentWord.charAt(i) == userWord.charAt(i)){
                    result[i] = "#6AAA64";
                    ignore.push(i);
                }
            }
            
            for (let i = 0; i < userWord.length; i++) {
                if (result[i]!="#6AAA64") {//del carecter introducido
                    
                
                    let finded=false;
                    for (let j = 0; j < currentWord.length && !finded; j++) {
                        if (!ignore.includes(j) && j!=i) {//si la posicion j no esta entre las posiciones ignoradas. Sabemos que los valores son diferentes cuando j e i son iguales 
                            finded=(userWord.charAt(i)== currentWord.charAt(j));
                            if(finded){

                                result[i] ="#C9B458";
                                ignore.push(j);
                            }

                            
                        }
                        
                    }    
                
                    if (result[i]==null) {
                        result[i] ="#787C7E"; 
                    }
                }
            }
            return  {"status":true , "value":result};  
        }
    } return {"status":false, "value":"Introduce una palabra de 5 letras"};
}




//console.log(currentWord);
// for (let index = 0; index < 6; index++) {
//     let word= prompt();
//      console.log(word);
//      console.log(checkWord(word.toUpperCase()));   
    
//  }

