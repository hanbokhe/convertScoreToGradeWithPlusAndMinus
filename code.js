//Write a function called "convertScoreToGradeWithPlusAndMinus".

//Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

//Notes:
//(100 - 90) --> 'A'
//(89 - 80) --> 'B'
//(79 - 70) --> 'C'
//(69 - 60) --> 'D'
//(59 - 0) --> 'F'
//If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
//If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
//If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
//There are is no F+ and there is no F-.
//var output = convertScoreToGradeWithPlusAndMinus(91);
//console.log(output); // --> 'A-'

function convertScoreToGradeWithPlusAndMinus(score) {
  var grade = "";
  if (score <= 100 && score>= 90){
      grade = "A";
  }else if(score <=89 && score >= 80){
      grade = "B";
  }else if(score <=79 && score >= 70){
      grade = "C";
  }else if(score <=69 && score >= 60){
      grade = "D";
  }else if(score <=59 && score >= 0){
      grade = "F";
  }else{
      return "INVALID SCORE";
  }
  if (grade !== "F"){
    var plusMinus = score%10;
    if (score === 100 || (plusMinus >= 8 && plusMinus <= 9)){
      grade= grade + "+";
    }
    if (score !== 100 && (plusMinus >= 0 && plusMinus <= 2)){
        grade= grade + "-";
    }
  }
  return grade;
}
