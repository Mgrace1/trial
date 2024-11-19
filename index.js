// Show Register Form
function showRegisterForm() {
    document.getElementById("mainOptions").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

// Show Login Form
function showLoginForm() {
    document.getElementById("mainOptions").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Show Main Options
function showMainOptions() {
    document.getElementById("mainOptions").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
}

// Simulated database for user data
const users = {};

// Register User
function registerUser() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (name && email && password) {
        if (!users[email]) {
            users[email] = { name, password };
            document.getElementById("output").innerHTML = `Registration successful! Welcome, ${name}. Please log in.`;
            showMainOptions(); // Return to main options
        } else {
            document.getElementById("output").innerHTML = "Email is already registered. Please log in.";
        }
    } else {
        document.getElementById("output").innerHTML = "Please fill out all fields.";
    }
}

// Login User
function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (users[email] && users[email].password === password) {
        const userName = users[email].name;
        document.getElementById("output").innerHTML = `Welcome back, ${userName}!`;
        // Redirect to specific dashboard here (e.g., Trainee Dashboard)
    } else {
        document.getElementById("output").innerHTML = "Invalid email or password.";
    }
}
