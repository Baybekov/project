"use strict";

// // let number = 5;
// // const leftBorderWith = 1;

// // number = 5;
 
// // console.log(number);

// // const obj = {

// //     name: "John",
// //     age: 25,
// //     isMarried: false

// // };


// // // console.log(obj.name);
// // console.log(obj["name"]);



// // let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {} , []];
// // console.log(arr[1]);

// // const result = confirm("Are you here?");

// // console.log(result);

// // const answer = prompt("Are you gay?", "Yes");

// // console.log(typeof(answer));

// // const answers = [];

// // // answers[0] = prompt('Как ваше имя?', '');
// // // answers[1] = prompt('Как ваша фамилия?', '');
// // // answers[2] = prompt('Сколько вам лет?', '');

// // console.log(typeof(answers));

// // const category = 'toys';

// // console.log(`https://someurl.com/${category}/5`);

// // const user = "Ivan";

// // alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + + " 5 ");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);


// console.log(5%2);

// const isChecked = true,
//     isClose = false;

//     console.log(isChecked || isClose);


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних посмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних посмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 50;    

// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log('Neverno');
//         break;
//     case 51:
//         console.log('DAAAA!!!');
//         break;
//     default:
//         console.log('Not this time!');
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;

// for(let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }




// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних посмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// if (personalMovieDB.count < 10) {
//     console.log("Malo filmov");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Norm smotrish");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Kinoman ueban");
// } else {
//     console.log("ERROR");
// }

// console.log(personalMovieDB);

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 20;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello!");
// };

// logger();

// const calc = (a, b) => a + b;

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.length);
// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));
// // console.log(arr.length);

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));


// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних посмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

 rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Malo filmov");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Norm smotrish");
    } else if (personalMovieDB.count >= 30) {
        console.log("Kinoman ueban");
    } else {
        console.log("ERROR");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('Javascript', done);