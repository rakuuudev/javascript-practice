function isVowel (char) {
    let vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    return vowels.includes(char)
}

console.log(isVowel('a'));