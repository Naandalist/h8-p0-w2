/*********************************************
* 1. Melakukan LOOPING dengan -While
**********************************************/

var num =2;

console.log("LOOPING PERTAMA");
while (num <20){
    console.log(num +"-i love coding");
    num +=2; // setiap iterasi 'num' akan ditambah 2
}
console.log("LOOPING KEDUA");
num =20;
while(num >1){
    console.log(num +"-i will become fullstack developer");
    num -=2; // setiap iterasi 'num' akan dikurangi 2
}



/*********************************************
* 2. Melakukan Looping Menggunakan For
**********************************************/

var num =1;

console.log("LOOPING PERTAMA");
for ( num; num <=20; num++){
    console.log(num +"-i love coding");
}
console.log("LOOPING KEDUA");
for (num =20; num >0; num--){
    console.log(num +"-i will become fullstack developer")
}



/*********************************************
* 3. Angka Ganjil dan Genap
**********************************************/

var counter =1;

console.log("GANJIL-GRNAP")
for (counter; counter <=100; counter++){
    if (counter %2 ==0){
        console.log(counter +": GENAP");
    }
    else if(counter %2 !=0){
        console.log(counter +": GANJIL");
    }
}

console.log("3 KELIPATAN 3")
for (counter =1; counter <=100; counter +=2){
    if (counter %3 == 0){
        console.log(counter +" KELIPATAN 3");
    }
    
}

console.log("6 KELIPATAN 6")
for (counter =1; counter <=100; counter +=5){
    if (counter %6 ==0){
        console.log(counter +" KELIPATAN 6");
    }
    
}

console.log("10 KELIPATAN 10")
for (counter =1; counter <=100; counter +=9){
    if (counter %10 ==0){
        console.log(counter +" KELIPATAN 10");
    }
    
}
