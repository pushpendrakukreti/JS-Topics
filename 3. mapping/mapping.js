const users = [
    {
        id: 1,
        name: "Jack",
        isActive: false,
        age: 30
    },
    {
        id: 2,
        name: "Harry",
        isActive: true,
        age: 20
    },
    {
        id: 3,
        name: "Lucy",
        isActive: true,
        age: 28
    },
    {
        id: 4,
        name: "PK",
        isActive: true,
        age: 25
    },
];

// const names = [];
/*Using for loop*/
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
// }

/*Using forEach loop*/
// users.forEach(user=>{
//    names.push(user.name); 
// });

/*Using map function*/
const names = users
    .sort((user1, user2) => (user1.age < user2.age) ? 1 : -1)
    .filter((user) => user.isActive)
    .map((user) => user.name);

console.log(names);