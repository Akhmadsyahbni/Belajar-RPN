/* Method slice() digunakan untuk mengambil / men-copy sebagian element array. Method ini
memiliki 2 argumen opsional, dengan ketentuan sebagai berikut:

Argumen pertama (opsional) merupakan index awal pengambilan. Jika diisi angka positif,
ambil element array mulai dari index tersebut. Jika diisi angka negatif, perhitungan di
mulai dari akhir element.

Argumen kedua (opsional) merupakan index akhir pengambilan. Jika diisi angka positif,
ambil element array sampai index tersebut (tapi tidak termasuk index itu sendiri). Jika
diisi angka negatif, perhitungan di mulai dari element terakhir. Apabila index ini tidak
ditulis, ambil seluruh element hingga element terakhir.

• Jika method slice() dipanggil tanpa argument, seluruh element array akan diambil (di
copy).*/
//  Apabila index ini tidak ditulis, ambil seluruh element hingga element terakhir.
let foo = ["a","b","c","d","e","f","g"];

console.log(foo.slice());
console.log(foo.slice(3)); 
console.log(foo.slice(3,6)); 
console.log(foo.slice(-5));
console.log(foo.slice(-5,-2));


