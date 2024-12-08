function runTask2() {
    const temperature = prompt("Enter today's temperature:");
    if (temperature !== null && temperature !== "") {
        const result = temperature >= 30 ? 'HOT' : 'COLD';
        document.getElementById('output').innerText = `The weather is ${result}.`;
    } else {
        document.getElementById('output').innerText = 'No temperature provided.';
    }
}
