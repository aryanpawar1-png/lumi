// ===== CHATBOT =====
const responses = {
    "stress": "Take 3 deep breaths. You've got this.",
    "exam": "Break study into 25-min chunks with 5-min breaks.",
    "math": "Try writing out the formula 3 times by hand.",
    "science": "Draw a diagram. Your brain remembers pictures better.",
    "english": "Read one short story today. Just one.",
    "tired": "Stand up. Stretch. Drink water. Try again.",
    "scared": "Being scared means you care. That's a good thing.",
    "focus": "Put your phone in another room. Yes, really.",
    "default": "I'm still learning! Try words like exam, tired, focus."
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-output");
    const lowerInput = userInput.toLowerCase();
    let reply = responses["default"];

    // Loop through every keyword and check the user's message
    for (const keyword in responses) {
        if (lowerInput.includes(keyword) && keyword !== "default") {
            reply = responses[keyword];
        }
    }

    chatBox.innerHTML += "<p><b>You:</b> " + userInput + "</p>";
    chatBox.innerHTML += "<p><b>Lumi:</b> " + reply + "</p>";
    document.getElementById("user-input").value = "";
}

// ===== STUDY PLAN =====
function makePlan() {
    const subject = document.getElementById("subject").value;
    const days = document.getElementById("days").value;
    const hours = document.getElementById("hours").value;
    const planBox = document.getElementById("plan-output");

    if (subject === "" || days === "" || hours === "") {
        planBox.innerHTML = "<p>Please fill in all 3 boxes first!</p>";
        return;
    }

    let plan = "<h3>Your " + subject + " Study Plan</h3>";
    for (let i = 1; i <= days; i++) {
        if (i == days) {
            plan += "<p>Day " + i + " — Full revision day! " + hours + " hours.</p>";
        } else {
            plan += "<p>Day " + i + " — Study " + subject + " for " + hours + " hours.</p>";
        }
    }
    planBox.innerHTML = plan;
}

// ===== PEP TALK =====
const pepTalks = [
    "You don't have to be perfect. You just have to keep going.",
    "Hard things become easy after you have done them once.",
    "One page of notes today is better than a perfect plan tomorrow.",
    "Your brain is tired, not broken. Rest, then come back.",
    "You learned to walk, talk, and read. You can learn this too.",
    "Small focused 20 minutes beats a distracted 2 hours.",
    "Mistakes are how your brain grows. Every wrong answer teaches."
];

function getPepTalk() {
    const randomIndex = Math.floor(Math.random() * pepTalks.length);
    const message = pepTalks[randomIndex];
    document.getElementById("pep-output").innerHTML = message;
}

// ===== MOOD LOG =====
const moodHistory = [];

function logMood(feeling) {
    const now = new Date();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeText = now.getHours() + ":" + minutes;

    moodHistory.push(feeling + " at " + timeText);

    let listHTML = "";
    for (let i = 0; i < moodHistory.length; i++) {
        listHTML += "<li>" + moodHistory[i] + "</li>";
    }

    document.getElementById("mood-log").innerHTML = listHTML;
}
