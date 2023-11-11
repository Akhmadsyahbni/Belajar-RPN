/* Method splice() digunakan untuk menambah atau mengurangi element array. Method ini bisa
diinput dengan beberapa argumen:
* Argumen pertama merupakan index awal penambahan / pengurangan. Jika diinput
angka negatif, perhitungan dimulai dari element terakhir.
• Argumen kedua (opsional) bisa diinput dengan jumlah element yang akan dihapus. Jika
diisi 0, artinya tidak ada element yang dihapus. Apabila tidak ditulis, seluruh sisa element
akan dihapus (mulai dari index yang diinput pada argumen pertama).
• Argument ketiga dan seterusnya (opsional) bisa diinput dengan array baru yang ingin
ditambahan.
Berikut contoh penggunaan dari method splice() :*/

let foo = ["a","b","c","d","e","f","g"];
foo.splice(4); // Perintah foo.splice(4) artinya awali perubahan dari element index ke-4. Karena argumen
//kedua tidak saya tulis, hasilnya adalah penghapusan element kelima hingga akhir array. Dengan
//kata lain foo.splice(4) artinya hapus semua element array foo kecuali 4 element pertama.
console.log(foo);

console.log('')

let bar = ["a","b","c","d","e","f","g"];
bar.splice(4,2) // Perintah bar.splice(4,2) artinya awali perubahan dari element index ke-4, lalu hapus 2
// element. Sisa element akan disambung ke element awal. Dari hasil console.log ( bar ) terlihat
// bahwa huruf "e" dan "f" sudah tidak ada lagi.
console.log(bar);

console.log('');

let baz = ["a","b","c","d","e","f","g"];
baz.splice(4,2,"x","y","z");
console.log(baz); // Perintah baz.splice(4,2,"x","y","z") artinya awali perubahan dari element index ke-4,
// hapus 2 element, tambah element "x","y" dan "z" di posisi tersebut, kemudian sambung dengan
// sisa element array baz. Disini terjadi 2 operasi: menghapus element lama, dan menambahkan
// element baru.

console.log('');

let namaHewan = ["jerapah","Gajah","Macan"];
namaHewan.splice(2,1);
console.log(namaHewan);