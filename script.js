// Variables storing first name, last name, and date of birth
let firstName = "John";
let lastName = "Doe";
let dateOfBirth = "1995-06-15"; // Format: YYYY-MM-DD

// Function to calculate age
function calculateAge(dob) {
    let birthDate = new Date(dob);
    let currentDate = new Date();
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Adjust if birthday hasn't occurred this year
    let monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Function to log full name and age to the console
function logFullNameAndAge() {
    let age = calculateAge(dateOfBirth);
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Age: " + age);
}

// Event listener for button click to trigger logging
document.getElementById("showData").addEventListener("click", logFullNameAndAge);
