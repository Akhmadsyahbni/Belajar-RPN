/* Latihan For While Do While Switc */

// ini adalah looping increment 
// inti dari increment adalaah inisialisasi dari angka kecil dan tentukan testkondisi
// dan di pastikan menggunakan kurang dari karena nilai inisialisasinya kecil
for (i= 1; i <=5; i++){
    console.log('data ke -',i);
}

// data ke - 1 ----------- 1 + 1 = 2;
// data ke - 2 ------------ 2 + 1 = 3;
// daata ke - 3 ------------ 3 + 1 = 4;
// data ke - 4 -------------- 4 + 1 = 5;
// data ke - 5 --------------- 5 + 1 = 6;

console.log('')

// ini adalah looping decrement
// inti dari decrement adalah inisialisasi dari angka besar dan testkondisi pasti kecil
// dan di pastikan menggunakan lebih dari karena nilai inisialisasinya besar daripda testkondisinya
for(j= 5; j>=1; j--){
    console.log('data ke -',j);
}

// data ke - 5 --------------- 5 - 1 = 4
// data ke - 4 --------------- 4 - 1 = 3
// data ke - 3 --------------- 3 - 1 = 2
// data ke - 2 --------------- 2 - 1 = 1
// data ke - 1 --------------- 1 - 1 = 0

console.log('')
console.log('while');

// while itu tidak ketergantungan dengan inisialisasi
// while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.
let k = 1;
while(k <= 10){
    console.log('angka ke - ', k);
    k++;
}

console.log('');
console.log('do while');

//  sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan. Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.
let a = 10;
do{
    console.log('data ke - ', a);
    a++;
}while(a <= 5);