const grade = prompt('enter your grade here:', '')
let doUpassed;

if (grade >= 70 ) {
    doUpassed = "selamat, kamu lulus wawancara";
} else {
    doUpassed = "sayang sekali, kamu tidak lulus wawancara";
}

alert(doUpassed);   