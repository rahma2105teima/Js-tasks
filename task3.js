function runTask3() {
    function getValidName() {
        let name;
        do {
            name = prompt("Please enter your name (letters only):");
        } while (!name || !/^[a-zA-Z]+$/.test(name));
        return name;
    }

    function getValidBirthYear() {
        let birthYear;
        do {
            birthYear = prompt("Please enter your birth year (must be a number less than 2010):");
            birthYear = Number(birthYear);
        } while (isNaN(birthYear) || birthYear >= 2010);
        return birthYear;
    }

    const name = getValidName();
    const birthYear = getValidBirthYear();
    const age = new Date().getFullYear() - birthYear;

    const userDetails = `
        <strong>Name:</strong> ${name} <br>
        <strong>Birth Year:</strong> ${birthYear} <br>
        <strong>Age:</strong> ${age}
    `;
    document.getElementById('user-details').innerHTML = userDetails;
}
