const numbers = [15, 34, 16, 17, 59, 61, 28, 46, 98];
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
    // console.log(number);
    i++;
};
//object
const student = {
    id: 101,
    name: {
        titel: 'Md',
        first: 'Shakhawath',
        last: 'Hossain'
    },
    address: 'Dhaka',
    friends: ['Abdullah', 'Shohel', 'Karim', 'Rahim']
};
const friendsName = student.friends[2];
console.log(friendsName);
const studentName = student.name.first;
console.log(studentName);

// function
function evenNumbers(numbers) {
    const evenNum = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        if (num % 2 == 0) {
            evenNum.push(num)
        }
    }
    return evenNum;
}
// console.log(evenNumbers(numbers));
// find largest num
function largestNum(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num > largestNumber) {
            largestNumber = num;
        }
    }
    return largestNumber;
};
console.log(largestNum(numbers));