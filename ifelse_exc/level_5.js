let whoAmi = "user" 
let areYou;

if (whoAmi === "admin") {
    areYou = "Welcome, atmint";
} else if (whoAmi === "user") {
    areYou = "Welcome, User"
} else {
    areYou = "I dont know who you are";
}

console.log(areYou);