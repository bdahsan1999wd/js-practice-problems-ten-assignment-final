function sendNotification(email) {

    // Check if input is a string
    if (typeof email !== 'string') {
        return 'Invalid Email';
    }

    // Check if '@' exists in the email
    if (email.indexOf('@') === -1) {
        return 'Invalid Email';
    }

    // Split the email into username and domain
    const emailParts = email.split('@');

    // Check if there are exactly two parts
    if (emailParts.length !== 2) {
        return 'Invalid Email';
    }

    // Extract username and domain
    const username = emailParts[0];
    const domain = emailParts[1];

    // Check if username or domain is empty
    if (username.length === 0 || domain.length === 0) {
        return 'Invalid Email';
    }

    // Create notification message part by part
    let messagePart1 = username;
    let messagePart2 = ' sent you an email from ';
    let messagePart3 = domain;

    // Combine all parts into the final message
    let finalMessage = messagePart1 + messagePart2 + messagePart3;

    // Return the final message
    return finalMessage;
}

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));