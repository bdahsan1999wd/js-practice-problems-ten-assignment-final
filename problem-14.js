function password(obj) {

    // Validate input first
    if (
        obj.name === undefined ||
        obj.birthYear === undefined ||
        obj.siteName === undefined ||
        obj.birthYear.toString().length !== 4
    ) {
        return 'Invalid';
    }

    // Capitalize first letter of siteName
    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);

    // Generate password string
    let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;

    return passwordString;
}

console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));