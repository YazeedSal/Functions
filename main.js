// const sum = function (num1,num2) {
//     const sum = num1+num1
//     return sum
// }
// console.log(sum(4,4));


// const specailCharacters = function (messege, specialCharachters) {


//     let counter = 0
//     for (let i = 0; messege[i]; i++) {

//         for (let j = 0; specialCharachters[j]; j++) {
//             if (messege[i] == specialCharachters[j]) {
//                 counter++
//             }
//         }

//     }
//     return counter

// }

// console.log(specailCharacters('yazeed------', '-'));



// const factorialNumbers = function (num) {   //This function computes the factorial of the input

//     sum = 1
//     for (let i = num; i > 1; i--) {

//         sum = sum * i


//     }
//     return sum
// }

// console.log(factorialNumbers(5));




const findKey = function (str) { // this function finds the word that is surroned with hashtags
    let key = ''
    let watcher = false
    for (let i = 0; str[i]; i++) {
        if (str[i] == '#') {
            watcher = !watcher
        }
        if (watcher && str[i] != "#") {
            key = key + str[i]
        }
    }
    return key
}

console.log(findKey('u#cat#'));

