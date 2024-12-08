function runTask1() {
    alert("Welcome to my site");
    const userName = prompt("Please enter your name:");
    const message = userName ? `Welcome, ${userName}!` : 'Welcome, Guest!';
    document.getElementById('output').innerText = message;
}
