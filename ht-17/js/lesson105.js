const users = [
    {
        name: 'max',
        age: 23
    },
    {
        name: 'ivan',
        age: 25
    },
    {
        name: 'robert',
        age: 12
    }
]

users.forEach((user) => {
    console.log(user)
})

const usersName = []

users.forEach((user) => {
    usersName.push(user.name)
})

console.log(usersName)