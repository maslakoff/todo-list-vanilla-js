// console.log('Start');

// const timeout = (callback) =>  {
//     console.log('timeout');
//     return call
// }

// const secondFunc = () => {
//     console.log('second')
// }

// setTimeout(timeout(), 1000)

// console.log('End');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, completed: false, text: "todo" });
    }, 1000)
});


const firstCallback = (blabla) => {
    console.log('blabla', blabla)
    blabla.afsaf = 'mod'
    return blabla;
}
const secondCallback = (tratata) => {
    console.log('tratata', tratata);
    tratata.complex = 'oh';
    return tratata
}


// p
// .then(firstCallback)
// .then(secondCallback)
// .then(lastCall => console.log(lastCall))
// const fetch = require("node-fetch");

const p2 = fetch('https://jsonplaceholder.typicode.com/todosasdff');

p2.then(response => {
    return response.json();
}).then(json => {
    console.log(json)
}).catch(e => console.log('error', e));

// p.catch(e => {
//     console.log('error')
// });