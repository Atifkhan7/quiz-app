const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      answer: 3,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: 0,
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
  
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
  
      questionContainer.innerText = currentQuestion.question;
  
      optionsContainer.innerHTML = "";
      currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.className = "option";
        optionButton.innerText = option;
        optionsContainer.appendChild(optionButton);
      });
  
      nextButton.style.display = "none";
      resultElement.innerText = "";
    } else {
      questionContainer.innerText = "Quiz completed! Your score: " + score + "/" + questions.length;
      optionsContainer.innerHTML = "";
      resultElement.innerText = "";
      nextButton.style.display = "none";
    }
  }
  
  function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOptionIndex === currentQuestion.answer) {
      document.getElementById("result").innerText = "Correct!";
      score++;
    } else {
      document.getElementById("result").innerText = "Incorrect!";
    }
  
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
  }
  
  loadQuestion();
  