let array = [[1,2,3,4,'Mie',true],[false,4.20,'ayam']];

console.log(array);

for (let i = 0; i < array.length; i++){
    for(let j = 0;  j < array[i].length; j++){
        console.log(array[i][j]);
    }
}

console.log('');

// latihan dari yt kang dea afrizal

const myArray = [3,5,12];
let result = 0;
for(let i = 0; i < myArray.length; i++ ){
   result += myArray[i];
}
console.log(myArray);
console.log(`total nilai adalah ${result} karena ${myArray[0]} + ${myArray[1]} + ${myArray[2]} = ${result}`);

const myArray2 = [3,5,12];
let result2 = 0;
let j = 0;

while( j < myArray2.length){
    result2 += myArray[j];
    j++;
}
console.log(myArray2);
console.log(`total nilai adalah ${result} karena ${myArray[0]} + ${myArray[1]} + ${myArray[2]} = ${result}`)

const myArray3 = [10,5,4,9];
let result3 = 0;
let k = 0;

do{
    result3 += myArray3[k];
    k++;
}while( k < myArray3.length)
console.log(myArray3);
console.log(`total nilai adalah ${result} karena ${myArray3[0]} + ${myArray3[1]} + ${myArray3[2]} = ${result}`);