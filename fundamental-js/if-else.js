/* Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.
contohnya seperti berikut
*/

const isRaining = true; //jika nilai false maka yang akan di jalankan baris kode di dalam else

if(isRaining){
    console.log("Siapkan payung karena hujan");
}else{
    console.log("tidak perlu, tidak jadi hujan");
}

console.log('')

//contohnya lagi 
let x = 75;

if(x >= 75){
    console.log("Nilai anda aman karena KKM");
}else{
    console.log("Anda harus remedial");
}

// contohnya lagi 

console.log('');

// Kita juga bisa mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if.
let language = "French";
let greeting = "Selamat Pagi";

if(language == "English"){
    greeting = "Good Morning";
}else if (language == "French"){
    greeting = "Bonjour!";
}else if (language == "Jepang"){
    greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// kita juga bisa mengecek nilai yang sudah di tentukan

let score = 90;

if(score >=90 ){
    console.log('Selamat! Anda mendapatkan nilai A.');
}else if(score >= 80 && score <=89){
    console.log('Anda mendapatkan nilai B.');
}else if(score >= 70 && score <=69){
    console.log('Anda mendapatkan nilai C.');
}else if(score >= 60 && score <=59){
    console.log('Anda mendapatkan nilai D.');
}else{
    console.log("Logika anda buruk sekali :)");
}