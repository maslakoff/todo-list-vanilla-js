async function main() {

    const URL = 'https://jsonplaceholder.typicode.com/posts'

    const response = await fetch(`${URL}/1`);
    const data = await response.json();
    console.log(`GET data`, data);


    const newRecord = {
        userId: 1, 
        title: "our title", 
        body: "new body"
    };

    const newRecordResponse = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
    });

    const newRecordData = await newRecordResponse.json();
    console.log(`POST data`, newRecordData);
}

main();



// function callback(wwww) {
//     console.log(wwww);
//     return wwww.json();
// }

// promise
// .then(callback)
// .then((posts) => {
//     console.log(posts);
// }))

// promise
// .then((resp) => {
//     console.log(resp)
// })

// function sum(b) {
//     console.log(b);
// }

// const sumArrow = (a) => {
//     console.log(a)
// }
// const sumArrow2 = response => {
//     console.log(response)
// }



// sumArrow2(1)
// promise
// .then( (response) => {
//     console.log(response)
// })
// sum(4)


// function fetchCustom(url) {
//     return new Promise((resolve, rej) => {
//         setTimeout(() => {
//             const data = {
//                 status: 200,
//                 url: url,
//                 body: {
//                     model: 'audi',
//                     color: 'black'
//                 }
//             }
//             const err = new Error('No cars');
//             rej(err);
//         }, 1000);
//     })
// }

// // AJAX  
// // XMLHttpRequest   / 

// const pr  = fetchCustom('abv.by');

// pr
// .then(resp => {
//     console.log(resp);
// })
// .catch(err => {
//     console.log('Error: ' + err.message);
// })
