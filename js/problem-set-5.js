/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  let step = "#";
  let space = "&nbsp;"
  let row = "";
  while(true) {
    height = Number(prompt("Enter a height of an integer between 1 and 23:"));
    if(height >=1 && height <=23 && Number.isInteger(height)) {
      for(let i=0; i<height; i++) {
        for(let x=0; x<=(height-2-i); x++) {
          row = row + space;
        }
        for(let y=0; y<=(1+i); y++) {
          row = row + step;
        }
        row = row + "<br/>";
      }
      document.getElementById("mario-easy-output").innerHTML="<code>" + row + "</code>" ;
      break;
    }
  }

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  let step = "#";
  let space = "&nbsp;"
  let row = "";
  while(true) {
    height = Number(prompt("Enter a height of an integer between 1 and 23:"));
    if(height >=1 && height <=23 && Number.isInteger(height)) {
      for(let i=0; i<height; i++) {
        for(let x=0; x<=(height-2-i); x++) {
          row = row + space;
        }
        for(let y=0; y<=(1+i); y++) {
          row = row + step;
        }
        row = row + space + space;
        for(let v=0; v<=(1+i); v++) {
          row = row + step;
        }
        row = row + "<br/>";
      }
      document.getElementById("mario-hard-output").innerHTML="<code>" + row + "</code>" ;
      break;
    }
  }
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
  let oddSumOfNumbers = 0;
  let evenSumOfNumbers = 0;
  while (true){
    card = prompt("Enter your credit card number: ");
    if ((card.length == 16 || card.length == 15 || card.length == 13) && Number.isInteger(Number(card))){
      break;
    }
  }
  for(let i = card.length - 2; i >= 0 ; i-=2) {
    let num = Number(card[i]) * 2;
    let startNumber = num.toString();
    let sumOfNumbers=0;
    for (let j = 0; j < startNumber.length; j++){
      sumOfNumbers = sumOfNumbers + Number(startNumber[j]);
    }
    evenSumOfNumbers = sumOfNumbers + evenSumOfNumbers;
    console.log(evenSumOfNumbers);
  }
  for(let k = card.length-1; k >= 0; k-=2){
    oddSumOfNumbers = oddSumOfNumbers + Number(card[k])
  }
  console.log(oddSumOfNumbers);

  if (card.length == 15 && (card[0] == 3 &&(card[1] == 7 || card[1] == 4)) && (oddSumOfNumbers + evenSumOfNumbers)%10 == 0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
  }
  else if ((card.length == 13 || card.length == 16) && card[0] == 4 && (oddSumOfNumbers + evenSumOfNumbers)%10 == 0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
  }
  else if (card.length == 16 && (card[0] == 5 && (card[1] == 1 || card[1] == 2 || card[1] == 4 || card[1] == 5)) && (oddSumOfNumbers + evenSumOfNumbers)%10 == 0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
  }
  else {
    document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>";
  }

  card=Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let numberOfAttempts = 0;
  let randomNumber = Math.floor(Math.random()*999) + 1;
  let numberFound = false;
  let numberOfUser;
  while (numberFound == false) {
    numberOfUser = Number(prompt("Enter a number to guess for an integer between 1 and 1000."));
    if (numberOfUser <= 1000 && numberOfUser >= 1 && Number.isInteger(numberOfUser)) {
      if (numberOfUser > randomNumber) {
        alert ("Guess was too high. Try a lower number.");
        numberOfAttempts+=1;
      }
      else if (numberOfUser < randomNumber) {
        alert("Guess was too low. Try a higher number.")
        numberOfAttempts+=1;
      }
      else if (numberOfUser == randomNumber) {
        alert("Guess was correct. Congrats!")
        numberOfAttempts+=1;
        numberFound = true;
        document.getElementById("guess-output").innerHTML = "Number: " + randomNumber + "<br/>Attempts: " + numberOfAttempts;
      }
    }
    else {
      continue;
    }
  }
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  while(true) {
    windspeed = Number(prompt("Enter windspeed. Category will print right after."));
    if(windspeed >= 0 && Number.isInteger(windspeed)) {
      if(windspeed >= 157) {
        document.getElementById("hurricane-output").innerHTML="Category 5 Hurricane."
      }
      if(windspeed >= 130 && windspeed <= 156) {
        document.getElementById("hurricane-output").innerHTML="Category 4 Hurricane."
      }
      if(windspeed >= 111  && windspeed <= 129) {
        document.getElementById("hurricane-output").innerHTML="Category 3 Hurricane."
      }
      if(windspeed >= 96 && windspeed <= 110) {
        document.getElementById("hurricane-output").innerHTML="Category 2 Hurricane."
      }
      if(windspeed >= 74  && windspeed <= 95) {
        document.getElementById("hurricane-output").innerHTML="Category 1 Hurricane."
      }
      if(windspeed >= 39  && windspeed <= 73) {
        document.getElementById("hurricane-output").innerHTML="Tropical Storm."
      }
      else if(windspeed <= 39) {
        document.getElementById("hurricane-output").innerHTML="The skies are calm..."
      }
      break;
    }
    else {
      continue;
    }
  }
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
  let i=1;
	while(i <= 6){
		let inputOfScore=Number(prompt("Enter your score"));
		if (inputOfScore >= 1 && inputOfScore <= 10 && Number.isInteger(inputOfScore)){
			scores.push(inputOfScore);
		i++;
		}
	}
	scores.sort(function(a,b){return a-b;})
	let maxScore = scores[5];
	let minScore = scores[0];
	let reviewedScores = [];
	for(let j = 1; j < 5; j++){
		reviewedScores.push(scores[j]);
	}
	let averageOfScores=((reviewedScores[0]+reviewedScores[1]+reviewedScores[2]+reviewedScores[3])/4).toFixed(2);
	document.getElementById("gymnastics-output").innerHTML="Discarded: " + minScore + ", " + maxScore + "</br>Score: " + averageOfScores;

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
  while (true){
		let testGrades = prompt("Enter your test score");
		if(testGrades==-1){
			break;
		}
		if(Number(testGrades)>=0 && Number(testGrades<=100)){
			testTotal=Number(testGrades) + testTotal;
			tests++;
		}

	}
	while(true){
		let quizTests = prompt("Enter your quiz score");
		if (quizTests==-1){
			break;
		}
		if(Number(quizGrade)>=0 && Number(quizGrade)<=100){
			quizTotal=Number(quizGrade) + quizTotal;
			quizzes++;
		}
	}
	while(true){
		let homeworkGrades = prompt("Enter your homework score");
		if (homeworkGrades==-1){
			break;
		}
		if(Number(homeworkGrades)>=0 && Number(homeworkGrades)<=100){
			homeworkTotal=Number(homeworkGrades) + homeworkTotal;
			homeworks++;
		}
	}
	let averageTestGrade = (testTotal/tests).toFixed(2);
	let averageQuizGrade = (quizTotal/quizzes).toFixed(2);
	let averageHomeworkGrade = (homeworkTotal/homeworks).toFixed(2);
	grade=(.6 * averageTestGrade + .3 * averageQuizGrade + .1 * averageHomeworkGrade).toFixed(2);
	document.getElementById("report-card-output").innerHTML="Tests: " + averageTestGrade + "<br/>Quizzes: " + averageQuizGrade + "<br/>Homework: " + averageHomeworkGrade + "<br/>Grade: " + grade;

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
