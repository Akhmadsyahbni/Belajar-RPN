/* Kedua method ini digunakan untuk mengkonversi array menjadi string. Namun tidak seperti
method join(), kita tidak bisa mengubah karakter pembatas antar element. Method toString()
dan toLocaleString() menggabungkan element array dengan tanda koma.
Perbedaan antara toString() dan toLocaleString() adalah pada toLocaleString(), array
akan diubah menurut setingan bahasa local yang digunakan web browser. Tapi dalam kebanyakan kasus (terutama yang menggunakan abjad latin), hasilnya sama saja dengan method
toString().
Berikut contoh penggunaan kedua method ini var foo = new Array("a","b","c","d","e");
2 console.log ( foo.toString() ); // a,b,c,d,e
3 console.log ( foo.toLocaleString() ); // a,b,c,d,e
4
5
6 var bar = ["a","b","c","d","e"];
7 console.log ( bar.toString() ); // a,b,c,d,e
8 console.log ( bar.toLocaleString() ); // a,b,c,d,e
Disini saya membuat array menggunakan object constructor dan array literal, keduanya menghasilkan tampilan yang sama saat dikonversi menjadi string menggunakan method toString()
dan toLocaleString().
Array Object 301
Kedua method ini relatif jarang kita gunakan secara langsung. Biasanya method toString()
otomatis dipanggil JavaScript ketika sebuah array “dipaksa” tampil sebagai string. Misalnya
dalam perintah alert():
*/