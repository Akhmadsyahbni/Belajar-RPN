/* Property length berisi informasi mengenai jumlah element dari sebuah array. Berikut contoh
penggunaannya:*/

let foo = ["selamat","siang","makan","minum",true,false,20,20.5];

console.log(foo);
console.log(foo.length); // menghitung panjag array tidak di indexing

// Property length ini sering digunakan dalam proses perulangan array, yakni sebagai penentu
// berapa banyak perulangan yang harus dilakukan, seperti contoh berikut:

/* Yang juga perlu diingat, index terkahir dari sebuah array adalah jumlah property length - 1.
Dikarenakan index array dimulai dari 0, bukan 1. Dalam contoh diatas, hasil perintah foo.length
adalah 4, dimana index terakhir dari array foo adalah foo[3].

Disini, nilai foo.length saya ambil sebelum perulangan dan disimpan ke dalam variabel
panjangArray. Variabel inilah yang akan di cek di dalam perulangan.
Kode programnya memang menjadi sedikit panjang, tapi lebih efisien. Sekarang JavaScript tidak
perlu lagi mengecek kondisi i < foo.length, tapi cukup i < panjangArray. Cara ini tentunya
tidak berlaku jika di dalam perulangan jumlah element array ikut diubah.
itu tergantung kondisional
*/
let myArray = ["Apel","Pepaya","Pisang","Anggur","Jambu"];
let panjangArray = myArray.length;

for (let i = 0; i < panjangArray; i++){ // untuk menghilangkan nilai udifened menggunakan kurang dari (<)
    console.log(myArray[i]); 
}

