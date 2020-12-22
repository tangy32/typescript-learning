// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN , READ_ONLY, AUTHOR };

const person = {
    name : 'Hello world',
    age : 30,
    hobbies: ['sport', 'Cooking'],
    role: Role.AUTHOR
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['sport']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is admin')
}

console.log(person);