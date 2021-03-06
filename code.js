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
