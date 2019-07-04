
/*********************************************
* TUGAS 1
**********************************************/
function shoutOut(){
    return 'Halo Function!'
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console 






/*********************************************
* TUGAS 2
**********************************************/
function calculateMultiply(num1,num2){
    return (num1 * num2)    
}
var num1 = 5;   // deklarasi variabel num 1
var num2 = 6;   // deklarasi variabel num 2

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30






/*********************************************
* TUGAS 3
**********************************************/
function processSentence(nama,age,address,hobby){
    return "Nama saya " +name +", umur saya " +age +" tahun, alamat saya di " +address +", dan saya punya hobby yaitu " +hobby
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
                          