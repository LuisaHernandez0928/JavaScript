// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var users = {
    username: "luisa",
    password: "test123"
};
// 2. Create an array which contains the object you have made above and name the array "database".
var database = [{
    username: "luisa",
    password: "test123"
}]
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
        username: "patricia",
        timeline: "Hey, come on..let's go to SF"
    },
    {
        username: "jorge",
        timeline: "ohh no, that is so expensive to live"
    },
    {
        username: "maria",
        timeline: "Money is not my problem"

    }
]

var userPrompt = prompt("what is your user?");
var passwordPrompt = prompt("what is your password?");
function signIn(user, password) {
    if (user ===database[0].username && password ===database[0].password) {
        console.log("valid credential, welcome back!",newsfeed);
    } else { 
        alert("invalid credentials");
    }
}
signIn(userPrompt,passwordPrompt);