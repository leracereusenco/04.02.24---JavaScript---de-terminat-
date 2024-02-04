let Nr1 = document.getElementById("Nr1").value
let Nr2 = document.getElementById("Nr2").value
let op = document.getElementById("op")

function adunare(Nr1, Nr2){   
    console.log(Nr1 + Nr2);
}

function scadere(Nr1, Nr2){   
    console.log(Nr1 - Nr2);
}

function inmultire(Nr1, Nr2){   
    console.log(Nr1 * Nr2);
}

function impartire(Nr1, Nr2){   
    console.log(Nr1 / Nr2);
}

function calc(Nr1, op, Nr2){
    if(op == "+"){
        console.log(adunare(Nr1, Nr2))
    }else if(op == "-"){
        console.log(scadere(Nr1, Nr2))
    }else if(op =="*"){
        console.log(inmultire(Nr1, Nr2))
    }else if(op == "/"){
        console.log(impartire(Nr1, Nr2))
    }
}

let result = document.getElementById(printresult)
result = calc(Nr1, op, Nr2)