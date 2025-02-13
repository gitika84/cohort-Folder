let myArray = [1, 4, 6, 7, 9]


function Sum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum
}

console.log(Sum(myArray))