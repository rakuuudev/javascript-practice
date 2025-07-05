for (let countdown = 10; countdown >= 1; --countdown) {
    setTimeout(() => {
        console.log(countdown);
        }, countdown * 1000);
}