const answers = {
	q1: "d",
	q2: "c",
	q3: "b",
	q4: "a",
	q5: "d",
	q6: "b",
	q7: "a",
	q8: "c",
	q9: "d",
	q10: "b"
};
const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");

quizForm.onsubmit = (e) => {
	e.preventDefault();

	let score = 0;
	const keys = Object.keys(answers);

	for (const key of keys) {
		const selected = document.querySelector(`input[name="${key}"]:checked`);

		if (selected && selected.value === answers[`q${i}`]) {
			score++;
		}
	}

	resultDiv.innerHTML = `<h2>Você acertou ${score} de ${keys.length} perguntas!</h2>`;
};
