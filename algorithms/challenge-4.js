function calculateGrade(marks) {
    let average = 0
  let total = 0

    for(i = 0; i < marks.length; i++) {
      total += marks[i]
    }
    average = total / marks.length;

  if(average >= 1 && average < 50) {
    return "F"
  } else if (average >= 50 && average < 60) {
    return "E"
  } else if (average >= 60 && average < 70) {
    return "D"
  } else if (average >= 70 && average < 80) {
    return "C"
  } else if (average >= 80 && average < 90) {
    return "B"
  } else if (average >= 90 && average <= 100) {
    return "A"
  } else {
    return "Invalid score(s) inputed!"
  }
 }
  module.exports =calculateGrade
