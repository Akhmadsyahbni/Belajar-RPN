/*fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang.
Semua fungsi memiliki struktur yang sama. Fungsi dideklarasikan dengan keyword
function dan nama fungsinya.*/

// contoh function 
function multiplay(a,b){ //a dan b itu adalah parameter
    return a * b;
}

// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi
multiplay(5,6);
// Setelah membuat fungsi kita dapat memanggilnya dengan menuliskan nama fungsi 
// diikuti tanda kurung dan memasukkan argumen di dalamnya (jika ada).

function greeting(name, language){
    if(language == "English"){
        console.log("Good Morning",name);
    }else if (language == "Germany", name){
        console.log("Gutten Morgen", name);
    }else if (language == "Japan" , name){
        console.log("Nandee orewaa");
    }else if (language == "Indonesia" , name){
        console.log("Selamat Pagi");
    }else {
        console.log("Mohon maaf bahasa anda tidak di mengerti");
    }
}

greeting("Baban","Indonesia");

/* Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. 
Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan
perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel. 
Contohnya seperti ini: */
console.log('')
function perkalian (a,b){
    return a * b;
}

let result = perkalian(20,5);

console.log (result)

console.log('')

// menambah pengertian function 

function helloWorld(){
    return 'Hello World'; // return ini mengembalikan nilai/mempunyai nlai 'hello world'
}
console.log(helloWorld());

function test(){
    console.log('test'); // return mempunyai nilai kepada function, bila tidak memberikan return di function 
    // maka function tersebut memiliki data undifined
}
console.log(test());

console.log('');

function tambahAngka(angka1, angka2,angka3){ // disini bebeas sesuai keinginan panjang parameternya
    return (angka1 + angka2 ) * angka3;
}
console.log(tambahAngka(3,2,3)); // dan di sini adalah argunen di sesuaikan dengan panjangnya parametes

console.log('')

function balikKata(kata){
    let balikKata = "";
    for (let i = kata.length; i >= 0; i--){
        balikKata += kata[i];
    }
    return balikKata;
}

console.log(balikKata("Gajah"));
console.log(balikKata("Kucing"));
console.log(balikKata("Macan"));
console.log(balikKata("Jerapah"));