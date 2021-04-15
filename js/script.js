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


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних посмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних посмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

    