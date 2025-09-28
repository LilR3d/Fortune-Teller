function fortuneTeller(name, age) {
  const n = (name ?? "").trim();
  const a = parseInt(age, 10);
  const parts = [];

  // --- Name Rules ---
  if (n.length > 7) {
    parts.push("will marry late in life.");
  } else if (n.length < 5) {
    parts.push("will marry within a year.");
  } else {
    parts.push("will encounter a once-in-a-lifetime opportunity.");
  }

  if (n[0] && n[0].toUpperCase() === "R") {
    parts.push("will be rich.");
  }
  if (n.toLowerCase().includes("i")) {
    parts.push("will fall in love this week.");
  }

  // --- Age Rules ---
  if (Number.isNaN(a)) {
    parts.push("needs to enter a valid age.");
  } else if (a < 13) {
    parts.push("will discover a hidden talent.");
  } else if (a <= 19) {
    parts.push("will make a lifelong friend soon.");
  } else if (a <= 35) {
    parts.push("will travel to a new place this year.");
  } else if (a <= 55) {
    parts.push("will start a rewarding hobby.");
  } else {
    parts.push("will share wisdom that changes someone's life.");
  }

  const subject = n || "Someone";
  return `${subject} ${parts.join(" ")}`;
}

// --- Prompt the user + Console Output ---
const userName = prompt("What is your name?");
const userAge = prompt("How old are you?");
console.log(fortuneTeller(userName, userAge));

// --- Bonus UI ---
document.getElementById("tellFortuneBtn").addEventListener("click", function() {
  const nameInput = document.getElementById("nameInput").value;
  const ageInput = document.getElementById("ageInput").value;
  const result = fortuneTeller(nameInput, ageInput);
  document.getElementById("fortuneOutput").textContent = result;
  console.log(result);
});
