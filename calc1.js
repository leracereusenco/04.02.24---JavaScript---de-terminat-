let Nr1 = document.getElementById("Nr1").value
let Nr2 = document.getElementById("Nr2").value
let op = document.getElementById("op").value

Nr1 = parseInt(Nr1) //string -> int  //"2" -> 2
Nr2 = parseInt(Nr2)


// function adunare(Nr1, Nr2){   
//     document.getElementById("result").innerHTML = Nr1 + Nr2;
// }

// function scadere(Nr1, Nr2){   
//     document.getElementById("result").innerHTML = Nr1 - Nr2;
// }

// function inmultire(Nr1, Nr2){   
//     document.getElementById("result").innerHTML = Nr1 * Nr2;
// }

// function impartire(Nr1, Nr2){   
//     document.getElementById("result").innerHTML = Nr1 / Nr2;
// }


const button = document.getElementById("printresult");
button.click(h3(calc(Nr1, op, Nr2, result)))
const callback = (printresult) => { alert(calc(Nr1, op, Nr2, result)); };
button.addEventListener('click', callback);


async function calc(Nr1, op, Nr2, result){
    if(op == "+"){
        document.getElementById("result"). innerHTML = Nr1 + Nr2
    }else if(op == "-"){
        document.getElementById("result").innerHTML = Nr1 - Nr2;
    }else if(op =="*"){
        document.getElementById("result").innerHTML = Nr1 * Nr2;
    }else if(op == "/"){
        document.getElementById("result").innerHTML = Nr1 / Nr2;
    }
}



let result = document.getElementById(printresult)
result = calc(Nr1, op, Nr2, result)

