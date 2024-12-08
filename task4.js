function runTask4() {
    document.getElementById('output').innerHTML = ''; // Clear previous output
    let headers = '';
    for (let i = 1; i <= 6; i++) {
        headers += `<h${i}>Welcome to my page</h${i}>`;
    }
    document.getElementById('output').innerHTML = headers;
}
