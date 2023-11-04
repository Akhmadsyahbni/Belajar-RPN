/* Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
Spread operator dituliskan dengan tiga titik (...). */

const favorite = ["Apple","Pepaya","Lemon"];
const others = ["Cake","Salad","Cilok"];

const allFavorite = [...favorite, ...others];

console.log(favorite); // Mengakses langsung dengan array utuhnya 
console.log('');
console.log(...favorite); // Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array-nya
console.log(allFavorite);