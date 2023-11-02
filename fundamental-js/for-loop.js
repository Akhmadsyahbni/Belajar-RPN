/* for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
   do something
   perubahan kondisi ini bermaksud increment atau decrement
} 
Pertama, variabel i sebagai index iterasi. Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
Kedua, operasi perbandingan. Pada bagian ini, JavaScript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan. Jika bernilai true, maka kode di dalam blok for akan dijalankan.
Ketiga, increment/decrement. Di sini kita melakukan penambahan atau pengurangan variabel iterasi. Jadi, pada contoh di atas variabel i akan ditambah dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika kita mengubah nilainya, proses perulangan dapat terus berjalan selama kondisinya terpenuhi.
JIka diartikan, maka kode di atas bisa dimaknai dengan “Jika i kurang dari 5, maka tampilkan nilai i.”

*/
for(i=0; i <=5; i++){
    console.log(`ini adalah angka ke ${i}`);
}

console.log('');

for(j=5; j >= 0; j--){
    console.log(`ini adalah angka decrement ${j}`);
}

console.log('');

// For of looping ini mungkin di perkenan kan untuk membuat perulangan pada array conothnya

myArray = ["mie ayam",12,2.5,"Ayam goreng",false,true];

for (const arrayItem of  myArray){
    console.log(arrayItem);
}

console.log('');

//While
console.log('perulangan while');

let n = 1;
while (n <= 100){
    console.log(n);
    n++;
}
