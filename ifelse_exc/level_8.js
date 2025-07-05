let validatePassword = "hujandi9";
let isValid;

if (validatePassword.length >= 8) {
    isValid = "Password Valid";
} else {
    isValid = "Password too short";
}

console.log(isValid);