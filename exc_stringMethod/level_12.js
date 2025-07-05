function getInitials(name) {
    const parts = name.trim().split(' ');
    const initials = parts.map(word => word[0]);
    return initials.join("").toUpperCase(); 
}

console.log(getInitials('John Doe'));


