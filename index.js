const container = document.querySelector("#container");
const startComponent = document.querySelector("#startComponent");
const answerComponent = document.querySelector("#answerComponent");
const questionComponent = document.querySelector("#questionComponent");
const questionIndex = 0;
const score = 0;

const questions = [
  {
    question: "Who got stuck in a pair of leather pants?",
    answer: ["Chandler", "Ross", "Joey", "Monica"],
  },
  {
    question: "What was the name of Joey's character on 'Days of Our Lives'?",
    answer: [
      "Dr. Drake Ramoray",
      "Dr. Richard Burke",
      "Mr. Heckles",
      "Gunther",
    ],
  },
];

const onStart = () => {
  container.innerHTML = "";
  const clone = startComponent.content.cloneNode(true);
  container.append(clone);

  const btn = document.querySelector("#btnStart");

  btn.addEventListener("click", () => {
    renderQuestion(questions[questionIndex]);
  });
};

const renderQuestion = (questionByIndex) => {
  container.innerHTML = "";
  const clone = questionComponent.content.cloneNode(true);
  container.append(clone);
  const question = document.querySelector("#question");
  question.innerText = questionByIndex.question;
  const answerList = document.querySelector("#answerList");

  for (let answer of questionByIndex.answer) {
    const cloneAnswer = answerComponent.content.cloneNode(true);
    console.log(cloneAnswer.children);

    console.log(cloneAnswer.innerHTML);
    console.log("meow");
    console.log(answer);
    const answerField = cloneAnswer.querySelector(".answer");
    console.log(answerField);
    answerField.setAttribute("value", answer);
    const answerText = cloneAnswer.querySelector(".answerText");
    answerText.innerText = answer;
    answerList.append(cloneAnswer);
  }
};

onStart();
