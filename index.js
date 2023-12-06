const container = document.querySelector("#container");
const startComponent = document.querySelector("#startComponent");
const answerComponent = document.querySelector("#answerComponent");
const questionComponent = document.querySelector("#questionComponent");
let questionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Who got stuck in a pair of leather pants?",
    answer: ["Chandler", "Ross", "Joey", "Monica"],
    correctAnswer: "Ross",
  },
  {
    question: "What was the name of Joey's character on 'Days of Our Lives'?",
    answer: [
      "Dr. Drake Ramoray",
      "Dr. Richard Burke",
      "Mr. Heckles",
      "Gunther",
    ],
    correctAnswer: "Dr. Drake Ramoray",
  },
  {
    question:
      "What is the name of Phoebe's alter ego, the street performer with a guitar?",
    answer: [
      "Regina Phalange",
      "Smelly Cat",
      "Gladys",
      "Princess Consuela Bananahammock",
    ],
    correctAnswer: "Regina Phalange",
  },
  {
    question: "Who peed on Monica after she was stung by a jellyfish?",
    answer: ["Chandler", "Ross", "Joey", "Phoebe"],
    correctAnswer: "Ross",
  },
  {
    question: "What is the title of Joey's soap opera?",
    answer: [
      "Days of Our Lives",
      "General Hospital",
      "The Bold and the Beautiful",
      "As the World Turns",
    ],
    correctAnswer: "Days of Our Lives",
  },
  {
    question:
      "What did Joey get stuck in his own body during Thanksgiving dinner?",
    answer: ["A refrigerator", "A turkey", "A pumpkin", "A washing machine"],
    correctAnswer: "A turkey",
  },
  {
    question: "What is the name of Phoebe's twin sister?",
    answer: ["Ursula", "Regina Phalange", "Gladys", "Leslie"],
    correctAnswer: "Ursula",
  },
  {
    question:
      "What does Ross famously scream when trying to help move his new couch up the stairs?",
    answer: ["Upward!", "Turn!", "Push!", "Pivot!"],
    correctAnswer: "Pivot!",
  },
];

const onStart = () => {
  container.innerHTML = "";
  const clone = startComponent.content.cloneNode(true);
  container.append(clone);

  const btnStart = document.querySelector("#btnStart");

  btnStart.addEventListener("click", () => {
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
    const answerField = cloneAnswer.querySelector(".answer");
    answerField.setAttribute("value", answer);
    const answerText = cloneAnswer.querySelector(".answerText");
    answerText.innerText = answer;
    answerList.append(cloneAnswer);
  }

  const btnNext = document.querySelector("#btnNext");
  btnNext.addEventListener("click", () => {
    onNext();
  });
};

const onNext = () => {
  console.log("clicked here");
  // const answerField = document.querySelector(".answer");
  // console.log(answerField);
  const selectedAnswer = document.querySelector("input[name='answer']:checked");
  console.log(selectedAnswer);
  if (selectedAnswer) {
    // console.log(selectedAnswer.value);
    //console.log(questions[questionIndex].correctAnswer);
    //console.log(questions[questionIndex]);
    if (selectedAnswer.value === questions[questionIndex].correctAnswer) {
      score++;
      questionIndex++;
      renderQuestion(questions[questionIndex]);
      console.log(score);
    } else {
      console.log(score);
      questionIndex++;
      renderQuestion(questions[questionIndex]);
    }
  } else {
    alert("Please select one of the optionce");
  }
};

onStart();
