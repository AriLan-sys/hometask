const user = {
    name: 'Ariadna',
    age: 18,
    lastName: 'Lantsova',
    sayHello(name) {
        return `Hello ${name}`
    }
}

let noAdmins = 0

const users = [
    {
        name: 'Kirill',
        age: 22,
        admin: true
    },
    {
        name: 'Lana',
        age: 19,
        admin: false
    },
    {
        name: 'Denis',
        age: 20,
        admin: false
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].admin === false) { noAdmins++ }
}

console.log(noAdmins)