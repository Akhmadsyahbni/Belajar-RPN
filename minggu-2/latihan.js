// Array 

/* Array merupakan tipe data yang dapat mengelompokkan lebih dari satu 
nilai dan menempatkannya dalam satu variabel. Perbedaan array dengan object adalah data pada array disusun secara 
berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] 
yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses. Contoh:*/

let myArray = ['cokelat','susu','bakso','programming',true,false,10,4.25];
myArray.push("somay");

// console.log(myArray); menampilakn array dengan bungkus-bungkusnya
console.log(myArray[0]); //menampilkan data array dengan indexing yang di inginkans Dalam sebuah array, indeks dimulai dari 0, 
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log(myArray[6]);
console.log(myArray[7]);
console.log(myArray[8]); // Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. Index terakhir array selalu jumlah nilai array - 1.
console.log("panjang array adalah " + myArray.length + " ");

console.log('')

// method length akan me-return nilai total elemen/item yang ada pada array
// let hewan = ["ayam","kambing","singa"];
// console.log(hewan.length); // maka panjang array nya adalah 3

let angka = [1,2,3,4];
console.log(angka.length); // maka panjang array nya adalah 4

// method push() berfungsi untuk memasukan data pada urutan terakhir array atau bisa dibilang memasukan data ke paling kanan
let hewanBuas = ["Harimau","Singa","Buaya"];
hewanBuas.push("Macan Kumbang");
console.log(hewanBuas);

console.log('');

// method pop() berfungsi untuk menghapus elemen terkahir pada array, bisa dibilang ngehapus yang elemen array paling kanan 
let hewanPengerat = ["Tikus","Marmut","Kelinci","Tupai"];
hewanPengerat.pop()
console.log(hewanPengerat);

console.log('');

// method shift() berfungsi untuk menghapus elemen pertama pada array, bisa dibilang ngehapus yang paling kiri
let minumanFavorite = ["Pepsi","Fanta","Teajus","Nutrisari"];
minumanFavorite.shift();
console.log(minumanFavorite);

console.log('');

// method unshift() berfungsi menambahkan data pada urutan pertama, bisa dibilang nambahin sesuatu dipaling kiri 
let makananFavorite = ["Bakso","Mie Ayam","Sate Ayam","Sate Kambing"];
console.log(makananFavorite);
makananFavorite.unshift("Chicken");
console.log(makananFavorite);

console.log('');

/* method splice berfungsi bisa menambahkan data, bisa menghapus data pada array, bisa dua duanya sekaligus tergantung isi parameter yang kalian berikan pada splice
contoh .splice(0,1,"gajah", "macan") 
simplenya .splice(param1, param2, ...param-sisanya) //...berarti parameternya bisa ada banyak data
parameter pertama sebagai penentuan posisi mau di index ke berapa
parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak
*/

let hewan = ["Ayam","Kucing","Burung","Kuda","Kambing"];
// hewan.splice(2,1); contoh menghapus 1 item dari index nomor 1
// hewan.splice(2,0,"Jerapah"); //contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 2 di sesuaikan dengan kebutuhan
// hewan.splice(0,2,"Bebek"); //contoh menambahkan 1 item dan menghapus 2 item, dari index nomor 0
   hewan.splice(1,4, "Menir","kalkun","kelelawar");
console.log(hewan);

console.log('');

/* method slice berfungsi untuk memotong array tergantung dari nilai parameter yang kalian kasih
contoh .slice(1, 4)
simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
parameter pertama dari-mana (wkwk), itu berfungsi mau motong array dari mana
parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yg kita potong
boleh hanya memasang 1 parameter saja, contoh .slice(1) */

// Slice
let tokoSembako = ["Beras","Minyak","Telor","Air","Mie","Bumbu","Sabun"];
// untuk mengasilkan output menggunakan 2 cara yang pertama langusng di output yanf kedua lewat variabel baru

//Bisa langsung di hajar di output contohnya 
// console.log(tokoSembako.slice(1));
// let slicetokoSembako = tokoSembako.slice(3);
// console.log(slicetokoSembako);

// yak biasanya sih ditampung di variabel baru 
//contoh memotong dari index 1 sampai sebelum index ke 3
let slicetokoSembako = tokoSembako.slice(1,3);
console.log(slicetokoSembako);




