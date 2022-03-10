const numbers = [3, 9, 12, 6, 71, 21, 23, 17];
// operation map
const opeMap = numbers.map(num => num * 2);
// console.log(opeMap);
// operation forEach
// numbers.forEach(num => console.log(num + 2));
// operation filter
const opeFilter = numbers.filter(num => num > 20);
// console.log(opeFilter);
const friends = ['Abdullah', 'Shohel', 'Karim', 'Rahim'];
const filterA = friends.filter(friend => friend.toLocaleLowerCase().includes('r'));
// console.log(filterA);
// operation find
const findBest = friends.find(friend => friend.includes('S'));
// console.log(findBest);
const findNum = numbers.find(num => num > 10);
// console.log(findNum);

// ternary operator
const money = 400;
const khabar = (money > 300 ? 'Kacchi' : money > 200 ? 'Biryani' : 'Vaat');
console.log(khabar);



const active = true;
if (active !== active) {
    console.log('Yes');
}
else {
    console.log('No')
}
// JSON stringify
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
const stringifyStudent = JSON.stringify(student);
const parseStudent = JSON.parse(stringifyStudent);
console.log(stringifyStudent);
console.log(parseStudent);