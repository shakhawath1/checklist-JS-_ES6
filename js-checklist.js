const numbers = [15, 34, 16, 17, 59, 61, 28, 46];
// index
const index = numbers.indexOf(17);
console.log(index);
// lrngth
const length = numbers.length;
console.log(length);
// insert a element
numbers.push(87);
// console.log(numbers);
// remove the last elements
numbers.pop();
// console.log(numbers);
// includs
const newArray = numbers.includes(1);
console.log(newArray);
// for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
};
// while loop
let i = 0;
while (i < numbers.length) {
    const number = numbers[i];
    console.log(number);
    i++;
}
