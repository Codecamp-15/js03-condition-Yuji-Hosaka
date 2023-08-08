// let score = prompt ("Input your score");

// if (score === null || score.trim() === '' || isNaN(score)) {
//     alert("invalid number")
//     console.log(score);
// }
// else if (score >= 80) {
//     alert("A")
// }
// else if (score >= 70 && score < 80) {
//     alert("B")
// }
// else if (score >=60 && score < 70) {
//     alert("C")
// }
// else if (score >=50 && score < 60) {
//     alert("D")
// }
// else if (score >= 0 && score < 50) {
//     alert("F")
// }
// else if (score < 0) {
//     alert("invalid score")
// }

let score = prompt ("Input your score");
(score >= 80) ? console.log("A") :
(score >= 70 && score < 80) ? console.log("B") :
(score >=60 && score < 70) ? console.log("C") :
(score >=50 && score < 60) ? console.log("D") :
console.log("F") ;




