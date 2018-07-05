// const person = {
//     name: 'Dave',
//     age: 28,
//     location: {
//         city: 'Irvine',
//         temp: 80
//     }
// };


// const { name: firstName = 'anonymous', age} = person;
// // const name = person.name;
// // const age = person.age; 

// console.log(`${firstName} is ${age}.`);

// const { city,temp: temperature } =person.location;
// if (city && temperature) {
//     console.log(`its ${temperature} in ${city}.`);
// }

////////////////////////////////////////////////////////////////////////

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];

const [street,city,state,zip] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [food, , medCost] = item;
console.log(`A medium ${food} costs ${medCost}`);