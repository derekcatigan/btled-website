const form = document.getElementById("quizForm");
const resultBox = document.getElementById("result");

const answers = {
  q1: "b",
  q2: "b",
  q3: "b",
  q4: "b",
  q5: "c",
  q6: "a",
  q7: "b",
  q8: "a",
  q9: "c",
  q10: "b",
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `You scored ${score} / 10`;

  if (score === 10) resultBox.style.background = "#d4edda";
  else if (score >= 7) resultBox.style.background = "#fff3cd";
  else resultBox.style.background = "#f8d7da";
});
