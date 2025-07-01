function greetUser() {
    const username = document.getElementById('username').value;
    const greetingElement = document.getElementById('greeting');

    if (username) {
        greetingElement.innerText = `Hello, ${username}! Welcome to the web service.`;
    } else {
        greetingElement.innerText = 'Please enter your name.';
    }
}
