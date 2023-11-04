/* Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun,
 dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol. contohnya sebagao brikut
 Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. 
 Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan elemen keduanya merupakan value.*/
const myMap = new Map([
    ['1','string a key'],
    [1,'number a key '],
    [true,true]
]);

console.log(myMap);

// Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). 
// Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

console.log('');
const capital = new Map ([
    ["Jakarta","Indonesia"],
    ["London","England"],
    ["Tokyo","Japan"]
]);
console.log(capital.size); // Untuk mengetahui besar atau panjang dari map tersebut
console.log(capital.get("London")); // untuk mendapatkan key yang di dinginkan menggunakan get
capital.set("New Delhi", "India"); // untuk menmabahkan key dan value baru menggunakan set 
console.log(capital.size);
console.log(capital.get("New Delhi"));