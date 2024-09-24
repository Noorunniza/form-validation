function validateForm() {
    // Get form values
    const name = document.getElementById('namee').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const technologies = document.querySelectorAll('input[name="Tech[]"]:checked');

    // Validate name
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate email
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    // Validate gender
    if (!gender) {
        alert("Please select a gender");
        return false;
    }

    // Validate at least one technology is selected
    if (technologies.length === 0) {
        alert("Please select at least one technology");
        return false;
    }

    return true;  // If all validations pass
}
