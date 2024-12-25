function submitInput() {
    const userInput = document.getElementById('userInput').value;
    const score = parseInt(userInput);

    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 50) {
        grade = 'C';
    } else {
        grade = 'Fail';
    }

    alert('Your grade is: ' + grade);
}