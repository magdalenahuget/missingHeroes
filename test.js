/*
    DO NOT MODIFY THIS FILE

	This file is for testing purposes only.
	Don't worry if you don't understand it yet, you can come back later and check it again.
*/

import {toExport as movies} from "./corrections.js";

let error = false;

console.log("\nChecking for empty director data...");
error = movies.reduce((p,{director, title}) => director === "" ? console.log(`The director of ${title} is empty. Please fill it with "Martin Scorsese".`) : p , false) === undefined ? true : false;

console.log("\nChecking for strange release years...");
error = movies.reduce((p,{year, title}) => year < 1900 ? console.log(`The year of ${title} looks strange. Please add 1000 or 2000.`) : p , false) === undefined ? true : false;

console.log("\nChecking for mixed up actor names...");
error =  movies.reduce((p,{actors, title}) => actors.filter(e => e === "Leonardo da Vinci").length ? console.log(`The name of an actor in ${title} is Leonardo da Vinci instead of Leonardo DiCaprio.`) : p, false) === undefined ? true : false;

console.log("\nChecking for missing genres...");
error =  movies.reduce((p,{genres, title}) => genres.filter(e => e === "").length ? console.log(`  The genre in ${title} is empty. Please fill with "Drama".`) : p, false) === undefined ? true : false;


console.log(error ? `\n There are errors in your code.` : `\b Your solution seems fine, but don't forget to check the tasks' acceptance criteria.`);
