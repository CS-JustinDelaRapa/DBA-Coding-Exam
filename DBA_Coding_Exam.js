//find the duplicate numbers =========================================>
const numList = [5,1,4,6,7,3,5,7,3];

//create a reusable function
function findDuplicate(arr) {
    //filter and return all the duplicate numbers
    return arr.filter((number, index) => arr.indexOf(number) !== index);
};

console.log(findDuplicate(numList));

console.log()//print a number waterfall =========================================>

//create a reusable function
function printWaterfall(rows) {
    //loop through specified number of rows
    for (let i = 1; i <= rows; i++) {
        //conctenate index to itself time its value
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
};

printWaterfall(6);

console.log()//Create a simple program =========================================>

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the Number of newly hired males: ', (newMale) => {
  rl.question('Enter the Number of newly hired females: ', (newFemale) => {
    rl.question('Enter the Number of permanent position males: ', (permMale) => {
      rl.question('Enter the Number of permanent position females: ', (permFemale) => {
        rl.question('Enter the Number of resigned males: ', (resignMale) => {
          rl.question('Enter the Number of resigned females: ', (resignFemale) => {
            // Calculate total numbers
            const totalHired = parseInt(newMale) + parseInt(newFemale);
            const totalPermanent = parseInt(permMale) + parseInt(permFemale);
            const totalResigned = parseInt(resignMale) + parseInt(resignFemale);

            // Calculate percentages
            const percentNewMale = ((parseInt(newMale) / totalHired) * 100).toFixed(2);
            const percentNewFemale = ((parseInt(newFemale) / totalHired) * 100).toFixed(2);
            const percentPermMale = ((parseInt(permMale) / totalPermanent) * 100).toFixed(2);
            const percentPermFemale = ((parseInt(permFemale) / totalPermanent) * 100).toFixed(2);
            const percentResignMale = ((parseInt(resignMale) / totalResigned) * 100).toFixed(2);
            const percentResignFemale = ((parseInt(resignFemale) / totalResigned) * 100).toFixed(2);

            // Display summary
            console.log("==");
            console.log("Thank you for the information");
            console.log("==");
            console.log("Here is the Summary !!!");
            console.log();
            console.log(`Number of hired employee = ${totalHired}`);
            console.log(`Male = ${percentNewMale}%`);
            console.log(`Female = ${percentNewFemale}%`);
            console.log();
            console.log(`Number of Permanent employee = ${totalPermanent}`);
            console.log(`Male = ${percentPermMale}%`);
            console.log(`Female = ${percentPermFemale}%`);
            console.log();
            console.log(`Number of Resigned employee = ${totalResigned}`);
            console.log(`Male = ${percentResignMale}%`);
            console.log(`Female = ${percentResignFemale}%`);

            rl.close();
          });
        });
      });
    });
  });
});
