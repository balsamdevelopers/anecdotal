// --- Consequence Structure ---
const INTERVENTIONS = [
    { points: 15, consequence: "Cut of Physical Education Period" },
    { points: 30, consequence: "Cut in Art and Craft Period" },
    { points: 50, consequence: "Cut in Robotics Class" },
    { points: 75, consequence: "Meet the Vice Principal (Formal Warning)" },
    { points: 100, consequence: "Meet the Principal" },
    { points: 150, consequence: "Mandatory Parent Meeting at School" },
    { points: 200, consequence: "In-School Suspension (3 Days)" } // Added one more
];

let studentPoints = 0; // Initialize points

// Function to update the points and check the consequence
function updateConsequence() {
    document.getElementById('demeritPoints').value = studentPoints;

    // Find the highest consequence the student has reached
    let currentIntervention = "No consequence assigned yet.";
    
    // Sort consequences by points descending to find the highest threshold passed
    const sortedInterventions = INTERVENTIONS.sort((a, b) => b.points - a.points);

    for (const intervention of sortedInterventions) {
        if (studentPoints >= intervention.points) {
            currentIntervention = intervention.consequence;
            break; // Stop at the highest consequence reached
        }
    }

    document.getElementById('currentConsequence').textContent = currentIntervention;
}

// Function to add demerit points
function addDemerit(points) {
    studentPoints += points;
    updateConsequence();
    console.log(`Added ${points} points. Total points: ${studentPoints}`);
}

// Initial call to set up the page display
updateConsequence();
