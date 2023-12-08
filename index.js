const container = document.querySelector("#container");
const startComponent = document.querySelector("#startComponent");
const listComponent = document.querySelector("#listComponent");
const questionComponent = document.querySelector("#questionComponent");
const answerComponent = document.querySelector("#answerComponent");
let questionIndex = 0;
let score = 0;

const scoreGifs = [
  {
    winner1: "assets/gifs/score/winner-1.gif",
  },
  {
    winner2: "assets/gifs/score/winner-2.gif",
  },
  {
    winner3: "assets/gifs/score/winner-3.gif",
  },
];

const questions = [
  {
    question: "Who got stuck in a pair of leather pants?",
    answer: ["Chandler", "Ross", "Joey", "Monica"],
    correctAnswer: "Ross",
    gif: "assets/gifs/1.gif",
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
    gif: "assets/gifs/2.gif",
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
    gif: "assets/gifs/3.gif",
  },
  {
    question: "Who peed on Monica after she was stung by a jellyfish?",
    answer: ["Chandler", "Ross", "Joey", "Phoebe"],
    correctAnswer: "Chandler",
    gif: "assets/gifs/4.gif",
  },
  {
    question: "What Joey doesn't share?",
    answer: ["Socks", "Food", "Pizza", "Sandwich"],
    correctAnswer: "Food",
    gif: "assets/gifs/5.gif",
  },
  {
    question:
      "What did Joey get stuck in his own body during Thanksgiving dinner?",
    answer: ["A refrigerator", "A turkey", "A pumpkin", "A washing machine"],
    correctAnswer: "A turkey",
    gif: "assets/gifs/6.gif",
  },
  {
    question: "What is the name of Phoebe's twin sister?",
    answer: ["Ursula", "Regina Phalange", "Gladys", "Leslie"],
    correctAnswer: "Ursula",
    gif: "assets/gifs/7.gif",
  },
  {
    question: "What does Ross scream while moving his new couch upstairs?",
    answer: ["Upward!", "Turn!", "Push!", "Pivot!"],
    correctAnswer: "Pivot!",
    gif: "assets/gifs/8.gif",
  },
  {
    question:
      "What is the name of Chandler's annoying ex-girlfriend who nobody likes?",
    answer: ["Kathy", "Angela", "Mindy", "Janice"],
    correctAnswer: "Janice",
    gif: "assets/gifs/9.gif",
  },
  {
    question: "According to Ross, what does the term 'Unagi' mean?",
    answer: [
      "A type of sushi roll",
      "Meditation practice",
      "Self-defense technique",
      "A state of total awareness",
    ],
    correctAnswer: "A state of total awareness",
    gif: "assets/gifs/10.gif",
  },
];

const onStart = () => {
  container.innerHTML = "";
  const clone = startComponent.content.cloneNode(true);
  container.append(clone);

  const btnStart = document.querySelector("#btnStart");

  btnStart.addEventListener("click", () => {
    renderQuestionCheck(questions[questionIndex]);
  });
};

const renderQuestionCheck = (questionByIndex) => {
  container.innerHTML = "";
  const clone = checkComponent.content.cloneNode(true);
  container.append(clone);
  const question = document.querySelector("#question");
  question.innerText = questionByIndex.question;
  const answerList = document.querySelector("#answerList");

  for (let answer of questionByIndex.answer) {
    const cloneAnswer = listComponent.content.cloneNode(true);
    const answerField = cloneAnswer.querySelector(".answer");
    answerField.setAttribute("value", answer);
    const answerText = cloneAnswer.querySelector(".answerText");
    answerText.innerText = answer;
    answerList.append(cloneAnswer);
  }

  const btnCheck = document.querySelector("#btnCheck");

  btnCheck.addEventListener("click", () => {
    const selectedAnswer = document.querySelector(
      "input[name='answer']:checked"
    );
    if (selectedAnswer) {
      if (selectedAnswer.value === questions[questionIndex].correctAnswer) {
        score++;
      }
      renderAnswer(questionByIndex);
    } else {
      alert("Please select one of the optionce");
    }
  });
};

const renderAnswer = (questionByIndex) => {
  container.innerHTML = "";
  const clone = answerComponent.content.cloneNode(true);
  container.append(clone);
  const gif = document.querySelector("#gif");
  gif.setAttribute("src", questionByIndex.gif);
  const answer = document.querySelector("#answer");
  answer.innerText = questionByIndex.correctAnswer;
  const btnNext = document.querySelector("#btnNext");
  btnNext.addEventListener("click", () => {
    onNext();
  });
};

const onNext = () => {
  questionIndex++;

  if (questionIndex < questions.length) {
    renderQuestionCheck(questions[questionIndex]);
  } else {
    container.innerHTML = "";
    const clone = scoreComponent.content.cloneNode(true);
    container.append(clone);
    const scoreText = document.querySelector(".scoreText");
    scoreText.innerText = score;
    const gif = document.querySelector("#gif");
    if (score >= 8) {
      gif.setAttribute("src", scoreGifs[0].winner1);
    } else if (score >= 5 && score < 8) {
      gif.setAttribute("src", scoreGifs[1].winner2);
    } else {
      gif.setAttribute("src", scoreGifs[2].winner3);
    }

    onRestart();
  }
};

const onRestart = () => {
  const btnRestart = document.querySelector("#btnRestart");
  btnRestart.addEventListener("click", () => {
    score = 0;
    questionIndex = 0;
    onStart();
  });
};

const onCheck = () => {
  const selectedAnswer = document.querySelector("input[name='answer']:checked");
  if (selectedAnswer) {
    if (selectedAnswer.value === questions[questionIndex].correctAnswer) {
      score++;
    }
  } else {
    alert("Please select one of the optionce");
  }
};

onStart();
