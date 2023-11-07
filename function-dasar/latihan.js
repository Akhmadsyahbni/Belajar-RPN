/*    1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 * contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 */

function minimal(a,b){
    if(a < b){
        return a;
    }else if (a > b){
        return b;
    }else if(a == b){
        return a;
    }else{
        return console.log('eror');
    }
}

console.log(minimal(1,4));
console.log(minimal(3,2));
console.log(minimal(3,3));

console.log('');

function power(a,b){
    return a ** b;
}
console.log(power(7,3));
console.log(power(3,3));
console.log(power(4,0.5));
