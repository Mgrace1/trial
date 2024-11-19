// Sample course and progress data
const courses = [
    { title: "Introduction to Tourism", completed: true },
    { title: "Customer Service Skills", completed: false },
    { title: "Event Planning Basics", completed: false }
];

// Function to display course progress
function updateProgress() {
    const progressContainer = document.getElementById("progressContainer");
    const progressMessage = document.getElementById("progressMessage");

    // Calculate completed courses
    const completedCourses = courses.filter(course => course.completed);
    const allCompleted = completedCourses.length === courses.length;

    // Update progress message
    if (completedCourses.length > 0) {
        progressMessage.textContent = `You have completed ${completedCourses.length} of ${courses.length} courses.`;
    } else {
        progressMessage.textContent = "You are not enrolled in any courses yet.";
    }

    // Show job opportunities if all courses are completed
    if (allCompleted) {
        document.getElementById("jobOpportunities").style.display = "block";
    }
}

updateProgress();
