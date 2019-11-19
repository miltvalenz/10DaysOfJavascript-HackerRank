function getGrade(score) {
    let grade;
    // Write your code here
    if(score >= 0 &&  score <= 30) {
        if(score >= 25){
            grade = "A";
            return grade;
        } else if(score >= 20) {
            grade = "B";
            return grade;
        } else if(score >= 15) {
            grade = "C";
            return grade;
        } else if(score >= 10) {
            grade = "D";
            return grade;
        } else if(score >= 5) {
            grade = "E";
            return grade;
        } else if(score >= 0) {
            grade = "F";
            return grade;
        }
    } else {
        return "no valid";
    }
    return grade;
}