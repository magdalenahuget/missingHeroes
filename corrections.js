import {toExport as movies} from "./data.js";

// You can use the `movies` array here
// Please write every correction and modification of the data to this file by updating the `movies` array
// using for loops, conditionals and bracket and dot notation

// Missing Martin
console.log("------------------Missing Martin-------------------\n")

console.log(movies.director)

for (let i = 0; i < movies.length; i++) {
    if (movies[i].director === "") {
        console.log(movies[i]);
        movies[i].director = "Martin Scorsese"
    }
}
console.log(movies)

// Correct wrong release years
console.log("------------------Correct wrong release years-------------------\n")

// for...of loop version

for (let item of movies) {
    if (item.year > 900 && item.year < 1023) {
        item.year += 1000
    }
    if (item.year > 0 && item.year < 23) {
        item.year += 2000
    }
}

console.log(movies)

// for loop version

for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > 900 && movies[i].year < 1023) {
        movies[i].year += 1000
    }
    if (movies[i].year < 23) {
        movies[i].year += 2000
    }
}

console.log(movies)

// Leonardo is mixed up
console.log("-----------------Leonardo is mixed up-------------------\n")
// for ..of does not work in this task


// for (let item of movies) {
//     for (let factor of item.actors) {

//         if (factor === "Leonardo da Vinci") {
//             console.log(factor)
//             factor = "Leonardo DiCaprio"

//         }
//     }
// }

for (let i = 0; i < movies.length; i++ ) {
    for (let j = 0; j < movies[i].actors.length; j++) {
        if (movies[i].actors[j] === "Leonardo da Vinci") {
            console.log(movies[i].actors[j])
            movies[i].actors[j] = "Leonardo DiCaprio"
            
        }
    }
}

console.log(movies[17])

// Add drama
console.log("-----------------Add drama-------------------\n")

for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].genres.length; j++) {
        if (movies[i].genres[j] === "") {
            movies[i].genres[j] = "Drama"
        }
    }
}

console.log(movies[20])

// How many actors are in the list?
console.log("-----------------How many actors are in the list?-------------------\n")

let countybounty = 0

for ( let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].actors.length; j++) {
            countybounty = countybounty + 1
    }
}

console.log(countybounty)

//version number 2

countybounty = 0

for ( let i = 0; i < movies.length; i++) {
    countybounty += movies[i].actors.length
}
console.log(countybounty)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

toExport = [...movies];

export {toExport}
