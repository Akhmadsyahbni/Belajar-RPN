/* Method concat() digunakan untuk proses penggabungan array. Argumen dari method ini bisa
diisi dengan variabel array, maupun array literal (array yang biasanya kita buat menggunakan
tanda kurung siku).
Berikut contoh penggunaannya:*/

let foo = ["a","b","c","d","e"];
let bar = [1,2,3,4,5,6,7];

let fooBar = foo.concat(bar);
console.log(fooBar);
console.log('')
let barFoo = bar.concat(foo);
console.log(barFoo);

/* Saya membuat 2 buah array: foo dan bar. Perintah var fooBar = foo.concat(bar) artinya
sambung array foo dengan array bar, kemudian hasilnya disimpan ke dalam variabel fooBar.
Terlihat isi dari variabel fooBar berupa gabungan kedua element array, dimulai dari isi array foo,
kemudian diikuti dari element array bar. Jika pemanggilannya dibalik, yakni bar.concat(foo),
hasil urutan element akan dimulai dari variabel bar, baru diikuti variabel foo.*/