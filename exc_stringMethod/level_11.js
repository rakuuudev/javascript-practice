function isEmailValidate(email) {
    const emailPattern =  /@\./;
    return emailPattern.test(email);
} 

console.log(isEmailValidate('iceunaka@gmailcom'));