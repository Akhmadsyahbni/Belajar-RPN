/* Method includes() digunakan untuk mengecek apakah sebuah nilai ada di dalam array. Jika ada,
method ini mengembalikan nilai true, namun jika nilai yang dicari tidak ditemukan, merhod ini
mengembalikan nilai false.
Method includes() bisa diisi dengan 2 argument:
• Argumen pertama berupa element yang akan dicari.
• Argumen kedua (opsional) berupa nomor index awal pencarian. Jika tidak ditulis akan
dianggap 0, yakni pencarian dimulai dari index paling awal.
*/

let foo = ["a","b","c","d","e"];

console.log ( foo.includes("c") ); // true
console.log ( foo.includes("e") ); // true
console.log ( foo.includes("z") ); // false
console.log ( foo.includes("1") ); // false
console.log ( foo.includes("b", 1) ); // true
console.log ( foo.includes("b", 2) ); // false
//Perintah foo.includes("b", 2) akan menghasilkan nilai false karena index pencarian dimulai
//dari 2, sedangkan huruf "b" berada di index ke 1.