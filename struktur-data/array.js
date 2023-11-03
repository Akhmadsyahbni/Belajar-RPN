/* Array merupakan  tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. 
Contoh: Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses 
menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] 
yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.*/

let myArray = ["Cokelat",10,12.5,true,false,"Vanilla"];
console.log(myArray); // mengakses cetak langsung dengan array utuhnya 

// dan bearapapun panjang array nya pasti di kurangi - 1 karena index array mulai dari 0
console.log('');

console.log(myArray[0]); // mengakses nilai yang ada pada array menggunakan indexing 

console.log('');

myArray.push("Ayam geprek");
myArray.shift(""); // digunakan untuk mengeluarkan elemen pertama dari array
myArray.unshift("Apple"); // digunakan untuk menambahkan elemen di awal array.
delete myArray[1]; // keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.

//Untuk menghapus elemen, gunakan metode splice() seperti ini:
myArray.splice(2,1)  // Menghapus dari index 2 sebanyak 1 elemen

console.log(myArray);