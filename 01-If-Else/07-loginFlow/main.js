let user = prompt("Input USERNAME")
let pass = prompt("Password:")

// if(user == null || user.trim() =="" || user !== "admin","john") {
//     alert("invalid username or password")
// }

// if(user === "admin" && pass === "1234") {
//     alert(`Hello ${user}`);
// }
// else if(pass ==='' || pass === null) {
//     alert('password is required')
// }
// else{
//     alert('invalid password')
// }


if ((user === null || user.trim() === '') && (pass === null || pass.trim() === '')) {
    alert('username or password is required');
}
else if ((user == 'admin' && pass == '1234') || (user == 'john' && pass == 'qwerty')) {
    alert('Hello' + " " + user);
}
else {
    alert('invalid username or password');
}