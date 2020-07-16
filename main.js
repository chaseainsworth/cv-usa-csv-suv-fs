const fs = require('fs');
​
const dataRaw = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8');

const getRows = require('./get-rows.js');

const getNewCasesByDay = require('./get-new-cases-by-day.js');

const getTotalCases = require('./get-total-cases-by-day.js');

const getTotalCasesByDay = require('./get-total-cases-by-day.js');

const command = process.argv[2];

const date = process.argv[3];


const dataOrganized = getRows(dataRaw);

    if ("new" === command) {
        console.log(getNewCasesByDay(date, dataOrganized));
    }

    if ("total" === command) {
        console.log(getTotalCases(date, dataOrganized));
    }

    // return "Please enter a valid command";

