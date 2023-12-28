// function addTwoNums (a, b){
//     try {
//         if (typeof(a) !== 'number'){
//             throw new ReferenceError(`the first argument is not a number`)
//         } else if(typeof(b) !== 'number'){
//             throw new ReferenceError(`the second argument is not a number`)
//         }
//         else{
//             console.log(a + b)
//         }
//     }catch(err){
//         console.log(`Error!`,err)
//     }
// }

// addTwoNums(`5`, `5`)
// console.log(`it still works`)

// function letterFinder(word, match) {
//     let condition1 = typeof(word) == 'string' && word.length >=2;
//     let condition2 = typeof(match) == 'string' && match.length ==1;
//     if (condition1 && condition2){
//         for(i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     }
//     else {
//         console.log(`please pass correct arguments`)
//     }
// }
// letterFinder(`test`, `t`)





// let n = 32014;
// let arr1 = [];
// sortedArr = [];
// let myMin = 0
// while (n > 10){
//     let r = n % 10;
//     n = Math.trunc(n/10);
//     arr1.push(r);
// }
// arr1.push(n);
// console.log(arr1)


// const fruits = ['kiwi','mango','apple','pear'];
// fruits.forEach((fruit, index) => console.log(`${index}, ${fruit}`));


// const nums = [0,10,20,30,40,50];
// const newArray = nums.filter(num => num > 20)
// console.log (newArray)


// const nums1 = [0,10,20,30,40,50];
// const newArray1 = nums1.map(num => num > 20)
// console.log (newArray1)


// const nums2 = [0,10,20,30,40,50];
// const newArray2 = nums2.reduce((total, number ) => {
//     return total = total + number;
// })
// console.log (newArray2)

// console.log(typeof(newArray2))

// const myArr = [...newArray1, ...newArray];
// console.log(myArr)

// const result = [];
// const drone = {
//     speed: 100,
//     color: 'yellow'
// }
// const droneKeys = Object.keys(drone)
// console.log(droneKeys)
// droneKeys.forEach((key) => result.push(key,drone[key]))

// console.log(result)


// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers); 

// const top7 = [1, 2, 3, 4, 5, 6, 7];
// const [first, second, third, ...secondVisit] = top7;
// console.log(secondVisit, first, second, third);




// SETTERS AND GETTERS ; 
// class Thermostat{
//     constructor(fahrenheit){
//         this._fahrenheit = fahrenheit;
//     }
//     get temperature (){
//         return 5/9 * (this._fahrenheit - 32);
//     }
//     set temperature(celsius){
//         return this._fahrenheit =  celsius * 9.0 / 5 + 32;
//     }
// }
// const thermos = new Thermostat (110);
// console.log(thermos.temperature) 
// thermos.temperature = 150;
// console.log(thermos.temperature) 
function addTwo(a , b){
    return a+b;
}
export default addTwo;