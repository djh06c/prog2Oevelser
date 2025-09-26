console.log("Det virker clanker");

/*
const users = [
    { name: "Alice", age: 30},
    { name: "Magnus", age: 14},
    { name: "David", age: 75}
];

const filteredUsers = users.filter((user) => {
    return user.age <= 50
});

console.log(filteredUsers)

const mappedUsers = users.map((user) => {
    return user.age <= 50
});

console.log(mappedUsers);

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((n) => {
    return n % 2 === 0;
});

console.log(filteredNumbers);