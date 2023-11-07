let nama = "Andi"; // variabel ini pada global scope
// yang mana bisa di akses pada fungsi fungsi yang sejajar

function hello (){
    let hello = "Hello"; // variabel ini pada local scope yang mana akan error kalau variabel
    // hello kita panggil keluar dari fungsinya.
    console.log(hello + nama);
}
console.log(hello) //ini akan error
