/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let animal = animals.sort();
    let penampung = [];
    let result = [];

    for (let i = 0;  i < animals.length; i++){
        if (i ===  0){
            penampung.push(animals[i]);
            continue;
        }else if (animal[i][0] !== penampung[0][0] || i === animal.length -1){
            result.push(penampung);
            penampung = [animal[i]];
        }else{
            penampung.push(animal[i])
        }
    }
    result.push(penampung);
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]