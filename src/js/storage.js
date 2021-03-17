
 
// // // localStorage 
// // // sessionStorage

// // // setItem(key, value)
// // // localStorage.setItem('inputValue', 'I am input');
// // // localStorage.setItem('inputValue2', 'I am input2');
// // // sessionStorage.setItem('hi', 'I am session storage')
// // // getItem(key)
// // // console.log(localStorage.getItem('inputValue'))
// // // removeItem(key)
// // // localStorage.removeItem('inputValue')

// // // clear()
// // // localStorage.clear();
// // // .length
// // //   console.log(localStorage.length)
// // // .key(index)
 
// // // for(let i = 0; i < localStorage.length; i++ ) {
// // //     console.log(localStorage.key(i))
// // // }

// // const item = { 
// //     id: 1, 
// //     completed: false,
// //     text: 'Some txt',
// // };

// // const list = [
// //     item,
// //     item,
// //     item,
// //     item,
// //     item,
// // ]

// // const converted = JSON.stringify(item);
// // const convertedList = JSON.stringify(list);
// // // console.log(JSON.stringify(item));

// // console.log(typeof item, item)
// // console.log(typeof converted, converted)
// // localStorage.setItem(
// //     'item', 
// //     converted
// //  );

// //  const text = '{"id":1,"completed":false,"text":"Some txt"}';

// //  const obj = JSON.parse(text);
// //  console.log(typeof obj, obj)

// // // localStorage.setItem('list', list);


// console.log('Start')

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidationError';
//     }
// }
// let $someVar;

// try {
//     throw new ValidationError('We got a validation error')
// } catch(error) {
//     if (error instanceof ValidationError) {
//         $someVar.classList.add('error')
//     } else {
//         console.log('Some another error');
//     }
// } 

// console.log('end')

/* 
  Задача: Получить массив уникальных классов, 
  отсортированный по частоте использования 
*/

let classNames = [
    'header', 'menu', 
    'menu-item', 'menu-item', 
    'link',
    'menu-item', 'footer', 
    'menu', 
    'link', 'link', 'link'
  ];

  // Expected result:
  const sortedArray = ['link', 'menu-item', 'menu', 'footer', 'header'];

  // объект
  // { header: 1, menu: 2, link: 4 }
   let obj = {
       'key': 'value'
   };

   obj['key']

classNames.forEach(element => {
    if(obj[element]) {
        obj[element] = obj[element] + 1;
    } else {
        obj[element] = 1;
    }
});

console.log(obj)