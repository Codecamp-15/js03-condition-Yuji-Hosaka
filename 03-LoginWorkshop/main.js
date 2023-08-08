let user = prompt("Input username");
let pass;
if(user === null || user.trim() === "" || user !== "codecamp") {
    user = "guest";
    alert(`Welcome ${user}`);
} 
else if(user === "codecamp") {
    pass = prompt("password: ")
if (pass === "123456") {
    user = "codecamp";
    alert(`Welcome ${user}`);
}
else {
    alert("Wrong password");
}
}

