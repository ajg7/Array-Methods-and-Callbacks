import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const byFinals2014 = objs => objs["Year"] === 2014 && objs["Stage"] === "Final";

const finalsArr = fifaData.filter(byFinals2014);
const finalsObj = finalsArr[0];

const homeTeam = finalsObj["Home Team Name"];
const awayTeam = finalsObj["Away Team Name"];
const homeTeamScore = finalsObj["Home Team Goals"];
const awayTeamScore = finalsObj["Away Team Goals"];
const cupWinner = finalsObj["Win conditions"];

console.log(homeTeam, awayTeam, homeTeamScore, awayTeamScore, cupWinner);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const result = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i]["Stage"] === "Final")
        result.push(data[i]);
    }
    return result;
};

console.log(getFinals(fifaData));

/////////////////////////////////////////////////////////////

const finalsList = fifaData.filter(function(item){
    return item["Stage"] === "Final"
});

console.log(finalsList);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
/*
function getYears(getFinals) {
    const years = [];
    const yearsArray = getFinals(fifaData);
    for(let i = 0; i < yearsArray.length; i++) {
        years.push(yearsArray[i]["Year"])
    }
    return years;
};

console.log(getYears(getFinals))
*/
//////////////////////////////////////////////////////

const years = getFinals(fifaData).map(obj => obj["Year"])

console.log(years)

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
/*
function getWinners(cb) {
    const winners = [];
    for(let i = 0; i < cb.length; i++) {
        if(cb[i]["Home Team Goals"] > cb[i]["Away Team Goals"]){
            winners.push(cb[i]["Home Team Name"])
        } else {
            winners.push(cb[i]["Away Team Name"])
        }
    }
    return winners;
};

console.log(getWinners(getFinals(fifaData)))
*/
const winners = getFinals(fifaData).map(obj => {
    if (obj["Home Team Goals"] > obj["Away Team Goals"]) {
        return obj["Home Team Name"]
    } else {
        return obj["Away Team Name"]
    }
})

console.log(winners);
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(arr1, arr2) {
    const result = [];
    for(let i = 0; i < arr1.length; i++) {
        result.push(`In ${arr2[i]}, ${arr1[i]} won the world cup!`);
    }
    return result;
};

console.log(getWinnersByYear(winners, years));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

const averageHomeScores = fifaData.reduce((accumulator, obj) => {
    accumulator += obj["Home Team Goals"]
    return accumulator;
}, 0) / fifaData.length

const averageAwayScore = fifaData.reduce((accumulator, obj) => {
    accumulator += obj["Away Team Goals"];
    return accumulator
},0) / fifaData.length

console.log(averageHomeScores)
console.log(averageAwayScore)
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
