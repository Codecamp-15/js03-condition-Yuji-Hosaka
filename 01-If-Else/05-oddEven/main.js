let num = prompt("Input number1");

console.log(num);


if (num === null || num.trim() === '' || isNaN(num)) 
{
    alert("Invalid Number!");
}
else if (+num % 2) 
{
    alert("Even number");
}
else {
    alert("Odd number")
}






