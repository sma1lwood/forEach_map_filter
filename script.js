// const numbers = [21, 37, 64, 99, 142];

// const negatives = numbers.map(function (num) {
//     return num * -1;
// });

// const doubles = numbers.map(function (num) {
//     console.log(num * 2);
// });

// const todos = [
//     {
//         id: 1,
//         text: 'walk the dog',
//         priority: 'high'
//     },
//     {
//         id: 2,
//         text: 'walk the chickens',
//         priority: 'medium'
//     },
//     {
//         id: 3,
//         text: 'feed the cats',
//         priority: 'low'
//     },
//     {
//         id: 4,
//         text: 'put out the fire in my garage',
//         priority: 'very high'
//     }
// ];

// const todoText = todos.map(function (todo) {
//     return todo.text;
// });


// const links = Array.from(document.querySelectorAll('a'));
// const urls = links.map(function (a) {
//     return a.href;
// });


// function myMap(arr, callback) {
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const val = callback(arr[i], i, arr);
//         mappedArray.push(val);
//     }
//     return mappedArray;
// }

// const priorityMap = myMap(todos, function (todo) {
//     return todo.priority
// });

// const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function (str, idx) {
//     return str.repeat(idx)
// })

const words = [
    'bagholder',
    'bullmarket',
    'bearmarket',
    'hallatosis',
    'cockadoodledo',
    'bddwq',
    'ganggreenfeet',
    'dddtttl',
    'majestic',
    'chincinnatti'
];
const containsVowel = function (word) {
    for (let char of word) {
        if (isVowel(char)) return true;
    }
    return false;
}

const isVowel = function (char) {
    return 'aeiou'.indexOf(char) !== -1;
};

const longWords = words.filter(function (word) {
    return word.length >= 12;
});

const bCWords = words.filter(function (w) {
    return w[0] === 'b' || w[0] === 'c';
});

const containsVowels = words.filter(containsVowel);
const noVowels = words.filter(function (word) {
    return !containsVowel(word);
})

