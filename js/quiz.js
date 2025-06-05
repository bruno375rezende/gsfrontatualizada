const answers = {
	q1: "d",
	q2: "c",
	q3: "b",
	q4: "a",
	q5: "d"
};

const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");

quizForm.onsubmit = (e) => {
	e.preventDefault();

	let score = 0;

	for (const key of Object.keys(answers)) {
		const selected = document.querySelector(`input[name="${key}"]:checked`);

		if (selected.value === answers[`q${i}`]) {
			score++;
		}
	}

	resultDiv.innerHTML = `<h2>Você acertou ${score} de 5 perguntas!</h2>`;
};
