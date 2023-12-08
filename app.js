
//  CHAP 5
//      practice 5.1
//  Create a variable to be used as the max value for the number guessing game.
// 2. Generate a random number for the solution using Math.random() and
// Math.floor(). You will also need to add 1 so that the value is returned as
// 1-[whatever the set max value is]. You can log this value to the console for
// development to see the value as you create the game, then when the game is
// complete you can comment out this console output.

// 3. Create a variable that will be used for tracking whether the answer is correct
// or not and set it to a default Boolean value of false. We can update it to be
// true if the user guess is a match.
// 4. Use a while loop to iterate a prompt that asks the user to enter a number
// between 1 and 5, and convert the response into a number in order to match
// the data type of the random number.
// 5. Inside the while loop, check using a condition to see if the prompt value is
// equal to the solution number. Apply logic such that if the number is correct,
// you set the status to true and break out of the loop. Provide the player with
// some feedback as to whether the guess was high or low, and initiate another
// prompt until the user guesses correctly. In this way we use the loop to keep
// asking until the solution is correct, and at that point we can stop the iteration
// of the block of code.
// let maxNumber=5;
// let generateNumber = Math.floor(Math.random()*maxNumber)+1;

// console.log(`generated number is ${generateNumber}`);
// let isCorrect = false;
// while(!isCorrect){
//     var userGuess = prompt("Enter a number between 1 and " + maxNumber);
//     var  convertResponse = parseInt(userGuess);

//     if(convertResponse === generateNumber){
//         isCorrect=true;
//         alert("congratulation your Guess is true")
//     }
//     else{
//         if(convertResponse > generateNumber)
//         alert("The Guess is too High");
//         else{
//             alert("VERY low!try again")
//         }
//     }
    
// }

// Practice exercise 5.2
// In this exercise, we will create a basic counter that will increase a dynamic variable
// by a consistent step value, up to an upper limit.
// 1. Set the starting counter to 0
// 2. Create a variable, step, to increase your counter by
// 3. Add a do while loop, printing the counter to the console and incrementing it
// by the step amount each loop
// 4. Continue to loop until the counter is equal to 100 or more than 100
//  let counter = 0;
//  let step = 12;
//  do{
//     console.log(`the current counter is ${counter}`);
//     counter +=step;

//  }while(counter<100);
//  console.log("counter has reached 100 0r more!!")

//                                 Practice exercise 5.3
// In this exercise we will use a for loop to create an array that holds objects. Starting
// with creating a blank array, the block of code within the loop will create an object
// that gets inserted into the array.
// 1. Setup a blank array, myWork.
// 2. Using a for loop, create a list of 10 objects, each of which is a numbered
// lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false
// status for every other item to indicate whether the class will be running this
// year. For example:
// name: 'Lesson 1', status: true
// 3. You can specify the status by using a ternary operator that checks whether
// the modulo of the given lesson value is equal to zero and by setting up a
// Boolean value to alternate the values each iteration.
// 4. Create a lesson using a temporary object variable, containing the name
// (lesson with the numeric value) and predefined status (which we set up in
// the previous step).
// 5. Push the objects to the myWork array.
// 6. Output the array to the console.
// let myWork =[]
// for(let i=0 ; i < 10 ; i++){
// let object = {
//     name : `Lesson ${i}`,
//     status: i%2 == 0 ? true : false 
// }
// myWork.push(object)
// }
// console.log(myWork);

//                              Practice exercise 5.4
// 1. To create a table generator, first create an empty array, myTable, to hold your
// table data.
// 2. Set variable values for the number of rows and columns. This will allow us
// to dynamically control how many rows and columns we want within the
// table. Separating the values from the main code helps make updates to the
// dimensions easier.
// 3. Set up a counter variable with an initial value of 0. The counter will be used
// to set the content and count the values of the cells within the table.
// 4. Create a for loop with conditions to set the number of iterations, and to
// construct each row of the table. Within it, set up a new temporary array
// (tempTable) to hold each row of data. The columns will be nested within
// the rows, generating each cell needed for the column.
// 5. Nest a second loop within the first to count the columns. Columns are run
// within the row loop so that we have a uniform number of columns within
// the table.
// 6. Increment the main counter each iteration of the inner loop, so that we track
// a master count of each one of the cells and how many cells are created.
// 7. Push the counter values to the temporary array, tempTable. Since the array is
// a nested array representing a table, the values of the counter can also be used
// to illustrate the cell values next to each other in the table. Although these are
// separate arrays representing new rows, the value of the counter will help
// illustrate the overall sequence of cells in the final table.
// 8. Push the temporary array to the main table. As each iteration builds a new
// row of array items, this will continue to build the main table in the array.
// 9. Output into the console with console.table(myTable). This will show you a
// visual representation of the table structure
// let myTable = [];
// let row = 4;
// let column = 2;
// let counter = 0 ;
// for (let i=0 ; i < row ; i++){
//     let tempTable = [];
//     for(let j=0 ; j < column ; j++){
//         counter++;
//         tempTable.push(`Counter value ${counter}`);
//     }
//     myTable.push(tempTable)
// }
// console.table(myTable)

//                                      Practice exercise 5.5
// 1. Create a grid array variable.
// 2. Set a value of 64 for the number of cells.
// 3. Set a counter to 0.
// 4. Create a global variable to be used for the row array.
// 5. Create a loop that will iterate up to the number of cells you want in the array,
// plus one to include the zero value. In our example, we would use 64+1.
// 6. Add an outer if statement, which uses modulo to check if the main counter
// is divisible by 8 or whatever number of columns you want.
// 7. Inside the preceding if statement, add another if statement to check if the
// row is undefined, indicating whether it is the first run or whether the row
// is complete. If the row has been defined, then add the row to the main grid
// array.
// 8. To finish off the outer if statement, if the counter is divisible by 8, clear the
// row array—it has already been added to the grid by the inner if statement.
// 9. At the end of the for loop, increment of the main counter by 1.
// 10. Set up a temporary variable to hold the value of the counter and push it to
// the row array.
// 11. Within the loop iteration, check if the value of the counter is equal to the total
// number of columns you want; if it is, then add the current row to the grid.
// 12. Please note that the extra cell will not be added to the grid since there aren't
// enough cells to make a new row within the condition that adds the rows to
// the grid. An alternative solution would be to remove the +1 from the loop
// condition and add grid.push(row) after the loop is completed, both of which
// will provide the same solution output.
// 13. Output the grid into the console.
// let gridArray = []
// let cells = 64
// let count = 0
// let row = []
// for (let i = 0; i <= cells; i++) {
//     if (count % 8 == 0) {
//         row = []
//         if (row != undefined) {
//             gridArray.push(row)
//         }
//     }
//     count++
//     let temp = count;
//     row.push(temp)
//     if (count == 8) {
//         gridArray.push(row)
//     }
// }
// console.log(gridArray);

//                               Practice exercise 5.6
// This exercise will construct an array as it loops through the incrementing values of
// x. Once the array is done, this exercise also will demonstrate several ways to output
// array contents.
// 1. Create an empty array
// 2. Run a loop 10 times, adding a new incrementing value to the array
// 3. Log the array into the console
// 4. Use the for loop to iterate through the array (adjust the number of iterations
// to however many values are in your array) and output into the console
// 5. Use the for of loop to output the value into the console from the array
// let array = []
// for(let i=1 ; i<= 10 ; i++){
//     array.push(i)
// }
// console.log(array);
// for(let j=0 ; j<array.length ; j++){
// console.log(array[j]);
// }
// for (let values of array){
//     console.log(values);
// }

//                                 Practice exercise 5.7
// In this exercise, we will experiment with looping over objects and internal arrays.
// 1. Create a simple object with three items in it.
// 2. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
// 3. Create an array containing the same three items. Using either the for loop or
// the for in loop, output the values from the array into the console.
// let myFriends = {
//     name1 : "namrita" ,
//     name2: "sania" ,
//     name3 : "misbah"
// }
// for(let friends in myFriends){
//     console.log(myFriends[friends]);
// }
// let myFriendsArray = ["namrita ","misbah","sania"]
// console.log("\nBy Array\n\n");
// for(let friends in myFriendsArray){
//     console.log(myFriendsArray[friends]);
// }

//                                 Practice exercise 5.8
// This exercise will demonstrate how to create a string with all the digits as it loops
// through them. We can also set a value to skip by adding a condition that will use
// continue, skipping the matching condition. A second option is to do the same
// exercise and use the break keyword.
// 1. Set up a string variable to use as output.
// 2. Select a number to skip, and set that number as a variable.
// 3. Create a for loop that counts to 10.
// 4. Add a condition to check if the value of the looped variable is equal to the
// number that should be skipped.
// 5. If the number is to be skipped in the condition, continue to the next number.
// 6. As you iterate through the values, append the new count value to the end of
// the main output variable.
// 7. Output the main variable after the loop completes.
// 8. Reuse the code, but change the continue to break and see the difference. It
// should now stop at the skip value.
// let string = '';
// let number = 5 ;
// for(let i=0 ; i < 10 ; i++){
//     if(i === number){
//         continue
//     }
//     string += i;
// }
// console.log(string);
// string = ''
// for(let i=0 ; i < 10 ; i++){
//     if(i === number){
//         break
//     }
//     string += i;
// }
// console.log(string);

//                                     Chapter project
//                                 Math multiplication table
// 1. Set up a blank array to contain the final multiplication table.
// 2. Set a value variable to specify how many values you want to multiply with
// one another and show the results for.
// 3. Create an outer for loop to iterate through each row and a temp array to store
// the row values. Each row will be an array of cells that will be nested into the
// final table.
// 4. Add an inner for loop for the column values, which will push the multiplied
// row and column values to the temp array.
// 5. Add the temporary row data that contains the calculated solutions to the
// main array of the final table. The final result will add a row of values for the
// calculations.
// let finalMultiplicationArray = []
// let maxNumber = 4;
// for (let i = 2; i <= maxNumber; i++) {
//     tempArray = []
//     for (let j = 1; j <= 10; j++) {
//         tempArray.push(i * j)
//     }
//     finalMultiplicationArray.push(tempArray)
// }
// console.table(finalMultiplicationArray);

//                       CHAPTER 6:
//             Practice exercise 6.1
// Create a function that takes two parameters, adds the parameters together,
// and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using
// console.log.
// 4. Create a second call to the function using two more numbers as arguments
// sent to the function.

// function addNum(num1,num2){
//    return num1 + num2;
// }
// let a =20;
// let b =15; 
// let result1 = addNum(a,b);
// console.log(`the sum of ${a} and ${b} is:`,result1);
// let result2 = addNum(13,12)
// console.log(`the sum of 13 and 12 is:`,result2);

//             Practice exercise 6.2
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array
// value.
// 5. Invoke the function

// let descriptiveWords = ["define","detail","breifly"]
// function describeName(){
//    let userName = prompt("Enter your Name")
//    if(userName){
//    let randomIndex = Math.floor(Math.random()* descriptiveWords.length);
//     let randomDescriptor = descriptiveWords[randomIndex];
//     console.log(`The name ${userName} is ${randomDescriptor}!`);
//   } else {
//     console.log("You did not enter a name.");
//   }
//    }
//    describeName();

//            Practice exercise 6.3
// Create a basic calculator that takes two numbers and one string value indicating
// an operation. If the operation equals add, the two numbers should be added. If the
// operation equals subtract, the two numbers should be subtracted from one another.
// If there is no option specified, the value of the option should be add.
// The result of this function needs to be logged. Test your function by invoking it
// with different operators and no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value
// within its parameters. Use those values with a condition to check if the
// operator is + or -, and add or subtract the values accordingly (remember if
// not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output
// the response to the console.
// 5. Update the operator value to be the other operator type—either plus or
// minus—and call to the function again with the new updated arguments.


// let num1 = 10;
// let num2 = 2;
// let operator = '+';
// function calculate(value1 ,value2, operation) {
//     if(operator === '+'){
//         return value1 + value2;
//     }
//     else if(operator === '-'){
//         return value1 - value2;
//     }
//     else{
// return value1 + value2;
//     }
// }

// let result1 =calculate(num1, num2, operator);
// console.log(`Result of ${num1} ${operator} ${num2} is:`, result1);

// operator = '-';
// let result2 =calculate(num1, num2, operator);
// console.log(`Result of ${num1} ${operator} ${num2} is:`, result2);


//                     Practice exercise 6.4
// Modify the calculator that you made in Practice exercise 6.2 to return added values
// instead of printing them. Then, call the function 10 or more times in a loop, and store
// the results in an array. Once the loop finishes, output the final array into the console.
// 1. Set up an empty array to store the values that will be calculated within the
// loop.
// 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two
// values each iteration. For the first value, multiply the value of the loop count
// by 5. For the second value, multiply the value of the loop counter by itself.
// 3. Create a function that returns the value of the two parameters passed into the
// function when it is called. Add the values together, returning the result.
// 4. Within the loop, call the calculation function, passing in the two values as
// arguments into the function and storing the returned result in a response
// variable.
// 5. Still within the loop, push the result values into the array as it iterates
// through the loop.
// 6. After the loop is complete, output the value of the array into the console.
// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for
// the array in the console.

// let emptyArr =[];
// function addNum(num1,num2){
//        return num1 + num2;
//     }
// for(i =0;i<10; i++){
//     let value1= i*5;
//     let value2= i*i;
// let result = addNum( value1,value2);
// emptyArr.push(result)
// }
// console.log(emptyArr)


//             Practice exercise 6.5
// Use IIFE to create a few immediately invoked functions and observe how the scope is
// affected.
// 1. Create a variable value with let and assign a string value of 1000 to it.
// 2. Create an IIFE function and within this function scope assign a new value to
// a variable of the same name. Within the function, print the local value to the
// console.
// 3. Create an IIFE expression, assigning it to a new result variable, and assign
// a new value to a variable of the same name within this scope. Return this
// local value to the result variable and invoke the function. Print the result
// variable, along with the variable name you've been using: what value does it
// contain now?
// 4. Lastly, create an anonymous function that has a parameter. Add logic that
// will assign a passed-in value to the same variable name as the other steps,
// and print it as part of a string sentence. Invoke the function and pass in your
// desired value within the rounded brackets.

// let value = 1000;
// (function() {
//     let value = "IIFE Value";
//     console.log("Inside IIFE:", value);
//   })();
//   let result = (function() {
//     let value = "IIFE Expression Value";
//     return value;
//   })();
//   console.log("IIFE Expression Result:", result);

//   let anonymousFunction = function(paramValue) {
//     value = paramValue;
//     console.log("Anonymous Function Result:", value);
//   };
//   anonymousFunction("Anonymous Function Value");


//               Practice exercise 6.6
// A common problem that we can solve with recursion is calculating the factorial.
// How are recursive functions going to help us calculate the factorial? We are going to
// call the function with a lower number until we reach 0. In this exercise, we will use
// recursion to calculate the factorial result of a numeric value set as the argument of a
// function.
// 1. Create a function that contains a condition within it checking if the argument
// value is 0.
// 2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it
// should return the value of the argument multiplied by the value returned
// from the function itself, subtracting one from the value of the argument
// that is provided. This will result in running the block of code until the value
// reaches 0.
// 3. Invoke the function, providing an argument of whatever number you want
// to find the factorial of. The code should run whatever number is passed
// initially into the function, decreasing all the way to 0 and outputting the
// results of the calculation to the console. It could also contain a console.log()
// call to print the current value of the argument in the function as it gets
// invoked.
// 4. Change and update the number to see how it affects the results.


// function calculateFactorial(number) {
//     if (number === 0) {
//         return 1;
//       } else {
//         return number * calculateFactorial(number - 1);
//     }
//   }
//   const result = calculateFactorial(5);
//   console.log("Factorial Result:", result);

//   function printFactorialSteps(number) {
//     if (number === 0) {
//       console.log("Current Value:", number);
//       return 1;
//     } else {
//       console.log("Current Value:", number);
//       return number * printFactorialSteps(number - 1);
//     }
//   }
  
//   const stepsResult = printFactorialSteps(4);
// console.log("Factorial Steps Result:", stepsResult);

//     Practice exercise 6.7
// Create a countdown loop starting at a dynamic value of 10.
// 1. Set the start variable at a value of 10, which will be used as the starting
// value for the loop.
// 2. Create a function that takes one argument, which is the countdown value.
// 3. Within the function, output the current value of the countdown into the
// console.
// 4. Add a condition to check if the value is less than 1; if it is, then return the
// function.
// 5. Add a condition to check if the value of the countdown is not less than 1,
// then continue to loop by calling the function within itself.
// 6. Make sure you add a decrement operator on the countdown so the preceding
// condition eventually will be true to end the loop. Every time it loops, the
// value will decrease until it reaches 0.
// 7. Update and create a second countdown using a condition if the value is
// greater than 0. If it is, decrease the value of the countdown by 1.
// 8. Use return to return the function, which then invokes it again and again
// until the condition is no longer true.
// 9. Make sure, when you send the new countdown value as an argument into
// the function, that there is a way out of the loop by using the return keyword
// and a condition that continues the loop if met.
// let startingValue = +prompt("enter countdown number")
// function countDown(startingValue) {
//     console.log(startingValue);
//     if(startingValue < 1){
//         return;
//     }
//     if(startingValue >= 1){
//         startingValue -- ;
//         countDown(startingValue)
//     }
// }
// countDown(startingValue)



//                                     Practice exercise 6.8
// 1. Set a variable name and assign a function to it. Create a function expression 
// with one parameter that outputs a provided argument to the console.
// 2. Pass an argument into the function.
// 3. Create the same function as a normal function declaration.
// let name = (para) => {
//     console.log(hy ${para});
// }
// name("John");
// function log(para) {
//     console.log("hy " + para);
// }
// log("bro")






// Chapter projects
//                          Create a recursive function
// Create a recursive function that counts up to 10. Invoke the function with different 
// start numbers as the arguments that are passed into the function. The function 
// should run until the value is greater than 10.
// let startingNumber = +prompt("Enter starting number")
// function count(startingNumber) {
//     if (startingNumber > 10) {
//         return;
//     }
//     console.log(startingNumber);
//     count(startingNumber + 1)
// }
// count(startingNumber)

//                                   Set timeout order
// Use the arrow format to create functions that output the values one and two to the 
// console. Create a third function that outputs the value three to the console, and then 
// invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also use 
// setTimeout() to invoke the first function immediately and then the third function.
// What does your output look like in the console? Try to get the console to output:
// Four
// Three
// One
// Two
// One
// let func1 = () => {
//     console.log("One");
// }
// let func2 = () => {
//     console.log("Two");
// }
// let func3 = () => {
//     console.log("Three");
//     func1()
//     func2()
// }
// let func4 = () => {
//     console.log("Four");
//     setTimeout(func1,1)
//     setTimeout(func3,0)
// }
// func4()

                                    