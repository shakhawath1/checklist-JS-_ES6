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
const names = ['Shakhawath', 'Rana', 'Abdullah', 'Shohel'];
const paragraph = `
                    Hi ! I am ${student.name.first}, I'm a student. My Id : ${student.id}.
                    I my best friends is ${student.friends[0]}, My nick name is ${names[3]}
                    `;
// console.log(paragraph);

// spreatd operator
const num = [12, 48, 49, 34, 56, 47];
const num2 = [...num];
num.push(87)
// console.log(num2)
// console.log(...num);

// arrow function
// 1
const return9 = () => 9;
// console.log(return9());
// 2
const multiply12 = num => num * 12;
// console.log(multiply12(3));
// 3
const addAndDevied = (num1, num2) => (num1 + num2) / 4;
console.log(addAndDevied(2, 26));
// 4
const addAndMultiply = (num3, num4) => {
    const sum1 = num3 + 5;
    const sum2 = num4 + 5;
    const result = sum1 * sum2;
    return result;
};
// console.log(addAndMultiply(2, 2));
// default parameter
const result2 = (num5, num6 = 6) => num5 + num6;
console.log(result2(2))
// destructuring
// array
const [, , third] = num;
// console.log(third);
// object
const { name, id, address } = student;
console.log(name.first);
// shortcut object
const js = 'JavaSctipt';
const frameWork = 'react'
const frameWork2 = 'nodejs'
const programmingLanguage = { js, frameWork, frameWork2 };
// console.log(programmingLanguage);
// console.log(programmingLanguage.frameWork2);
const myName = student?.id?.last;
// console.log(myName);

console.log(Object.values(student));