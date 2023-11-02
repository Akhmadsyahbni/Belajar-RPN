/*  string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘)
 atau petik dua (“) di antara teksnya.
contohnya 
Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, 
khususnya jika Anda memiliki teks yang mengandung tanda petik
Tentunya kode di atas akan menghasilkan eror. Solusinya, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik. 
Mekanisme ini juga dikenal dengan nama escape string.*/

let greet = "Helo good morning";
console.log(typeof(greet));

let question =  '"I think it\'s awesome!" he answered confidently';
