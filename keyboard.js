export { keybFisic , keyboardVirtual};


function keybFisic (callback) {
    document.addEventListener("keydown", (e)=>{
        if((e.which>=65 && e.which<=90) || e.which==13 || e.which==8 || e.which==165){
            callback(e.key); 
        }   
    });
}

function keyboardVirtual (callback) {
    const tecla = document.getElementById("keyboard");
    tecla.addEventListener("click",(e) =>{
        callback(e.target.ariaLabel);
    })

}
