// script.js
document.getElementById("calculate-bmr").addEventListener("click", calculateBMR);
document.getElementById("calculate-tdee").addEventListener("click", calculateTDEE);

function calculateBMR() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);

    let bmr = 0;

    if (gender === "male") {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else if (gender === "female") {
        bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    document.getElementById("bmr-result").textContent = bmr.toFixed(2);
}

const activityLevels = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.7,
    veryActive: 1.9
};

function calculateTDEE() {
    const selectedActivity = document.getElementById("activity").value;
    const bmr = parseFloat(document.getElementById("bmr-result").textContent);

    if (activityLevels.hasOwnProperty(selectedActivity)) {
        const tdee = bmr * activityLevels[selectedActivity];
        document.getElementById("tdee-result").textContent = tdee.toFixed(2);
    }
}

const gif = {
    1:'https://i.pinimg.com/originals/45/08/73/450873b27b506c5e1abd2f45d46f2ea3.gif',
    2:'https://i.pinimg.com/originals/f1/04/ca/f104ca9dc7a7626ca4e587792da17554.gif',
    3:'https://i.pinimg.com/originals/02/5e/91/025e9125663fc9d61bb7acd91a1db527.gif',
    4:'https://i.pinimg.com/originals/74/35/b6/7435b66d7658ea23c3bad7f0b4f9803d.gif',
    5:'https://i.pinimg.com/originals/ee/d7/71/eed771aeaaa425d9706c9fac5435899a.gif',
    6:'https://i.pinimg.com/originals/23/0d/a5/230da5a90e8aec853dcdec5b0632cc89.gif'
}

const bmrCalculatorSection = document.getElementById("bmr-calculator-gif");
let currentGifNumber = 1;
function changeBackground() {
    bmrCalculatorSection.style.backgroundImage = `url(${gif[currentGifNumber]})`;
    currentGifNumber = currentGifNumber % 6 + 1;
}
setInterval(changeBackground, 3000);
