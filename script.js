document.addEventListener("DOMContentLoaded", () => {
    // Registration Form Handling
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const user = JSON.parse(localStorage.getItem("user"));

            if (user && user.email === email && user.password === password) {
                alert(`Welcome back, ${user.name}!`);
                sessionStorage.setItem("loggedIn", "true");
                window.location.href = "courses.html";
            } else {
                alert("Login failed. Check your credentials.");
            }
        });
    }

    // Restrict Access to Courses Page
    if (window.location.pathname.includes("courses.html")) {
        const loggedIn = sessionStorage.getItem("loggedIn");
        if (!loggedIn) {
            alert("You must log in to view available courses.");
            window.location.href = "login.html";
        } else {
            // Display Courses if Logged In
            const courses = [
                "Introduction to Tourism",
                "Customer Service Excellence",
                "Sustainable Tourism Practices",
                "Women in Leadership"
            ];
            const courseList = document.getElementById("courseList");
            courses.forEach(course => {
                const li = document.createElement("li");
                li.textContent = course;
                courseList.appendChild(li);
            });
        }
    }
});

