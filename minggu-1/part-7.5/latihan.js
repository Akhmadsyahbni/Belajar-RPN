/* Fungsi merupakan bagian penting dalam bahasa pemrograman. Tanpa sadar, 
sebenarnya kita sudah menggunakan sebuah fungsi pada contoh kode yang ada sebelumnya. log() pada console.log() 
merupakan sebuah function yang berguna untuk menampilkan data pada konsol. 
Tapi sebenarnya apa itu function? Bagaimana ia bisa bekerja? */

//dan fungsi adalah untuk menghasilkan output dari berdasarkan input atau proses tertentu.

/* Fungsi dideklarasikan dengan keyword function dan nama fungsinya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, 
lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.
terkadang di dalam tanda kurung membutuhkan infromasi tambahan yang di sebut parameter Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya
baik itu string dan tipe data lainya.
*/

// Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. 
// Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer.

// Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi. Contoh:

//function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan 
//matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel. Contohnya seperti ini:
function multiply(a, b, c) {
    return a * b + c
}

// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
let result = multiply(2, 4, 2);

console.log(result);


function greeting(name, language) {
    if (language == 'english') {
        console.log(`Good Morning ${name}`);
    } else if (language == 'france') {
        console.log(`Bonjour ${name}`);
    }
    if (language == 'Germany') {
        console.log(`Gutten Morgen ${name}`);
    } else {
        console.log(`Selamat Pagi ${name}`);
    }
}

greeting('Bryan', 'Germany');

console.log('');

// global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b';

    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

function perkalian(num){
    total = num * num;
    return total;
}

let total = 9
let angka = perkalian(20);

console.log(total);

console.log('');

// Closure Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.

function init(){
    const name = "Babandot"; // Variabel lokal di dalam scope fungsi init

    function greeting(){ // Inner function, merupakan contoh closure
        console.log(`Halo ${name}`);
    }

    greeting() // Memanggil variabel yang dideklarasikan di parent function

}
init() // Memanggil function parent untuk menampilkan outputnya

/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */
// TODO

function minimal (a,b){
    if(a < b){
        console.log(`a lebih kecil dari b`);
    }else if(a > b){
        console.log(`a lebih besar dari  b`);
    }else if(a == b){
        console.log(`a sama dengan b`);
    }else{
        console.log('eror');
    }
}

minimal(3,4);
minimal(10,4);
minimal(3,3);

console.log('');

function power(a,b){
    resultPower = a ** b;
    return resultPower;
}

console.log(power(3, 3));
console.log(power(7, 3));