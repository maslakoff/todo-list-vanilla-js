import 'regenerator-runtime/runtime';

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

// main();



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


function getTasks() {
    const getTask = fetch('http://localhost:3000/todos');
    getTask
    .then(promise => {
        console.log(promise)
        return promise.json();
    })
    .then(promise => {
        console.log(promise);
    })
    .catch(err => {
        console.log('Error:', err)
    })
}

const TODO_URL = 'http://localhost:3000/todos';
async function app() {
    
    async function getTasksAsync() {
        const response = await fetch(TODO_URL);
        const data = await response.json();
        return data;
    }

    async function getTaskAsync(id) {
        const res = await fetch(`${TODO_URL}/${id}`);
        const dataRes = await res.json();
        return dataRes;
    }

    async function createTaskAsync(task) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
             
            body:  JSON.stringify(task),
        };
        const newRecordResponse = await fetch(TODO_URL, options);
        const dataRes = await newRecordResponse.json();
        return dataRes;
    }

    async function updateTaskAsync(task) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(task),
        };
        const url = `${TODO_URL}/${task.id}`;
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    async function deleteTaskAsync(id) {
        
    }


    const tasks = await getTasksAsync();
    console.log('List', tasks)

    const task = await getTaskAsync(2);
    console.log('Single task', task);

    // const createdTask = await createTaskAsync(
    //     {
    //         "text": "Created from JS",
    //         "completed": false,
    //     }
    // )
    // console.log(createdTask);


    // const updatedTask = await updateTaskAsync(
    //     {
    //         "text": "Updated from JS",
    //         "completed": true,
    //         id: 5,
    //     }
    // )
    // console.log('updatedTask', updatedTask);

    const deleted = await deleteTaskAsync(2);
    console.log(delete);

    
}

app();