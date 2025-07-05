function ageCategory (child, teen, old) {
    let yearsOld = child < 13;
    yearsOld = teen;
    yearsOld = old >= 18;
    console.log(yearsOld);
    return yearsOld;
}

ageCategory(12, 14, 19);