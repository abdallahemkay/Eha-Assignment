function displayPrompt() {
    // Prompting user to enter name
    let username = prompt("Please enter your name:");

    // checking if name is provided to display the greeting
    if (username) {
        // Showing an alert with the greeting
        alert(`Hello ${username}!`);

        // Displaying the greeting on the webpage
        const greetingElement = document.getElementById("greeting");
        greetingElement.textContent = `Hello ${username}!`;
        greetingElement.style.display = "block";
    } else {
        alert("You didn't enter a name.");
    }
}
