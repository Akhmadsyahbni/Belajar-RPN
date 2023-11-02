/* Tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi. Kemudian untuk setiap kondisi 
yang mungkin terjadi, 
kita masukkan keyword case diikuti dengan nilai yang valid. Jika kondisi pada case sama dengan variabel pada switch, 
maka blok kode setelah titik dua (:) akan dijalankan.
Keyword break*/

let language =  "French";
let greeting = null;

switch (language){
    case "English":
        greeting = "Good Morning";
    break;
    case "Japanese":
        greeting = "Nandee";
    break;
    case "Germany":
        greeting = "Gutten Moninf";
    break;
    case "French" :
        greeting = "Bonjour!";
    break;
}

console.log(greeting);
