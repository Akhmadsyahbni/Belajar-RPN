//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';


// ---------------------------------------
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

console.log('');

let word2 = 'wow JavaScript is so cool';
let FirstWord = word2[0] + word2[1] + word2[2];
let secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let thirdWord  = word2[15] + word2[16];
let fourthWord = word2[18] + word2[19];
let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

// ---------------------------------------
console.log('First Word : ' + FirstWord);
console.log('Second Word : ' + secondWord);
console.log('thirdWord :' + thirdWord);
console.log('fourthWord :' + fourthWord);
console.log('fifthWord :' + fifthWord);
// ---------------------------------------

console.log('')

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let firstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4,14);
let thirdWord3 = word3.substring(15,17);
let fourthWord3 = word3.substring(18,20);
let fifthWord3 = word3.substring(21,25);
// ---------------------------------------
console.log('First Word: ' + firstWord3);
console.log('second Word: ' + secondWord3);
console.log('third Word: ' + thirdWord3);
console.log('fourth Word: ' + fourthWord3);
console.log('fifth Word: ' + fifthWord3);
// ---------------------------------------

console.log('');

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';
let FirstWord4 = word4.substring(0, 3);
let secondWord4 = word4.substring(4,14);
let thirdWord4 = word4.substring(15,17);
let fourthWord4 = word4.substring(18,20);
let fifthWord4 = word4.substring(21,25);

let firstWordLength = FirstWord4.length;
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);