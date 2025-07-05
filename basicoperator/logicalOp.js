let loggedIn = true;
let isAdmin = false;
let canAccess = loggedIn && isAdmin;

console.log(canAccess);


function logicalOp (x, y) {
    return x || y && x;
}

console.log(logicalOp(false, true));
