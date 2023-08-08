let num = prompt("Input number1");

console.log(num);

if (num === null || num.trim() === '' || isNaN(num)) 
{
    alert("Invalid Number!");
}
else if (+num > 0) {
    alert ("Positive Number");
} else if (+num == 0) {
    alert ("ゼロ");
} else if (+num < 0) {
    alert ("Negative Number");
}


