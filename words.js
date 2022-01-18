export {arrayData};




let req = new XMLHttpRequest();
req.open('GET', './library/palabras.txt', false);
req.send(null);
if(req.status == 200) 
var arrayData= (req.responseText).split(" ");

// let arrayData = new Array();
// let archivoTxt = new XMLHttpRequest();
// let file= './library/palabras.txt';

// archivoTxt.open("GET", file,false);
// archivoTxt.send(null);

// let txt = archivoTxt.responseText;
// for (let i = 0; i < txt.length; i++) {
//     arrayData.push(txt[i]);
    
// }
// console.log(arrayData);