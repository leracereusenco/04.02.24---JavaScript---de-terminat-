//let - variabila rescriptibila - care poate fi schimbata
//const - variabila constanta - nu poate fi modificata

let name = "Name"; //string
let age = 123; //number (int + float)
let bool = true; //boolean
let nul = null; //nu are valoare
let apple; //undefined
let obj = { //obiect cu posibilitatea de a atribui ceva
    name: "name",
    age: 2332
}
let n = NaN; //nan value - Not a Number
let nameF = () => { //paranteze - functia care poate primi parametri
    console.clear;
}; 

//operatiuni logice + - * / % ** - operatii matematice

let value = 12.0
if (value = 12){
    console.log("True")
}else{
    console.log("False")
} //= se atribuie, == se verifica/se compara, === se verifica si tipul de date
    

//cicluri
for (i=0; i<= 10; i++){
    // 0 => 1 => 2 => ......... => 10
}

for(element => element.age;); //for each (scris incorect)

while (condition){ // lucreaza pana conditia este adevarata
    console.log();
}

while (count < 10){
    console.log(count);
    count = count + 1
    //count += 1
}

function nameFunc(p1, p2, p3){ //paramtri
    //code code code
}

class className{ //locul, inde pot fi stocate mai multe functii, obiecte
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2
    }
    classFunc() {
        console.log(this.p1 + this.p2);
    }
};