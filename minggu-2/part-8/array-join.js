/* Method join() berfungsi untuk menggabungkan element array menjadi string. Method ini
memiliki 1 argumen, yakni karakter pembatas sebagai pemisah antar element. Method join()
merupakan kebalikan dari method split() dari String Object.
Berikut contoh penggunaan method join(): */

let foo = ["a","b","c","d","e"];
console.log(foo.join());
console.log(foo.join("-"));
console.log(foo.join(" "));
console.log(foo.join(" # "));
