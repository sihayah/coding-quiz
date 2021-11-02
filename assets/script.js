quizBody = document.querySelector("body");

var headerEl = document.createElement("header");
quizBody.appendChild(headerEl);


let questionCounter = 0;
let score = 0;
let availableQuestions= [];
let acceptingQuestions = false;
let choices = [];
let widthValue = 0;

var questionArr = [
    {
    question: "What symbol indicates a tag?",
    choices: {
        1: "commas", 
        2: "quotes",
        3: "exclamation marks",
        4: "angle brackets"
    },
    correctAnswer:3
    },
    {
    question: "Which is the correct format for changing text color to 'red' in CSS?",
    choices: {
        1: "classname { background-color: red; }", 
        2: "classname { font-family: red; }",
        3: "classname { font-style: red; }",
        4: "classnmae { color: red; }"
    },
    correctAnswer: 3
    },
    {
    question: "Which of the following is a universal selector in CSS?",
    choices: {
        1: ".U", 
        2: "*",
        3: "$",
        4: "+"
    },
    correctAnswer: 1
    },
    {
    question: "Media queries are used to:",
    choices: {
        1: "create responsive layouts", 
        2: "adjust to viewport width",
        3: "modify site or app for different devices",
        4: "all of the above"
    },
    correctAnswer: 3
    },
    {
    question: "Inside which HTML element do we place the JavaScript?",
    choices: {
        1: '<script src = "myscript.js">', 
        2: '<script = "myscript.js">',
        3: '<script name = "myscript.js">',
        4: '<script href = "myscript.js">'
    },
    correctAnswer: 0
    },
    {
    question: "How would you write Hello in the devtools console?",
    choices: {
        1: 'msg("hello")', 
        2: 'console.log("hello")',
        3: 'console.log.hello',
        4: 'alert(hello)'
    },
    correctAnswer: 1
    },
    {
    question: "How do you call a function named myFunction?",
    choices: {
        1: "myFunction()", 
        2: "var myFunction = function()",
        3: "call myFunction()",
        4: "call = myFunction"
    },
    correctAnswer: 0
    },
];

var quizContainer = document.createElement("div");
quizContainer.className = "quiz-container-div";
quizBody.appendChild(quizContainer);
var quizIntro = document.createElement("div");
quizIntro.className = "quiz-intro-div";
var quizTitleEl = document.createElement("h1");
var quizInstEl = document.createElement("p");  
quizTitleEl.className = "quiz-title";
quizTitleEl.textContent = "Coding Quiz Challenge";    
quizInstEl.className = "inst-p";
quizInstEl.textContent = ".........Try to answer as many questions as you can before time runs out .........";
var startBtnEl = document.createElement("button");
startBtnEl.className = "all-btn";
startBtnEl.textContent = "START QUIZ"; 
var questionH = document.createElement("h3"); 
var questionContainer = document.createElement("div");
questionContainer.className = "question-div";
var quizTimer = document.createElement('h4');
quizTimer.className = "quiz-timer";
let counterLine;
let counter;


// Quiz intro screen 
startQuiz = () => {
    questionCounter= 0;
    score= 0;
    availableQuestions.push(...questionArr);
  
    quizContainer.appendChild(quizIntro);
    quizIntro.appendChild(quizTitleEl);
    quizIntro.appendChild(quizInstEl);
    quizIntro.appendChild(startBtnEl);

    startBtnEl.addEventListener('click', (event) => {
    quizContainer.replaceChild(questionContainer, quizIntro);
    runQuiz();
    });

};

appendQuestion = () => {
    var disappearingContainer = document.createElement("div");
    questionContainer.appendChild(disappearingContainer);
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    

    currentQuestion = availableQuestions[questionIndex];
    questionH.textContent = currentQuestion.question;
    disappearingContainer.appendChild(questionH);
    var choices = Object.values(currentQuestion.choices);
    choices.forEach((choice, index, correctAnswer) => {
        var choiceNum = (index);
        choice.setAttribute = 'number', 'choice';            
        choice.innerText = currentQuestion[choiceNum + 'choice'];
        var choiceBtn = document.createElement("button");
        choiceBtn.className = "choice-btn";
        choiceBtn.setId
        choiceBtn.innerText= choice;
        var buttonDiv = document.createElement("div");
        disappearingContainer.appendChild(buttonDiv);
        buttonDiv.appendChild(choiceBtn);

    choiceBtn.addEventListener('click', (event) => {
        acceptingAnswers = false;
        // if (currentQuestion = remove){
        //     changeQuestion();
        // };
        if (choiceNum === currentQuestion.correctAnswer){
            var correctText = document.createElement("p");
            correctText.innerText= "-------CORRECT!!";
            correctText.className= "result-p";
            disappearingContainer.appendChild(correctText);
            score = score+1;
            console.log(score);
            setTimeout(function(){ changeQuestion(); }, 500);
        }
        else {
            var incorrectText = document.createElement("p");
            incorrectText.innerText= "-------INCORRECT!!";
            incorrectText.className= "result-p"
            disappearingContainer.appendChild(incorrectText);
            setTimeout(function(){ changeQuestion(); }, 500);

        }
    });  

    acceptingAnswers =true;
    remove = () => {
        availableQuestions.splice(questionIndex, 1, currentQuestion);
    };
    console.log(remove);

    function changeQuestion() {
        if (availableQuestions.length>0){
            remove();
            disappearingContainer.remove();
            appendQuestion();
        }
    };
    
   
    
    });
};


runQuiz = () => {
    timeLeft = 15;
    widthValue = 15;
    acceptingQuestions =true;
    clearInterval(counter);
    clearInterval(counterLine);
    headerEl.appendChild(quizTimer)
    setQuizTimer(timeLeft);
    startQuizTimer(widthValue);
    appendQuestion();
};

// TIMER

setQuizTimer = (time) => {
    counter = setInterval(timer, 1000);
    function timer () {
        quizTimer.innerHTML = "00:"+time;
        time--;
        timeLeft -=1;
        if (time<0){
            clearInterval(counter);
            quizTimer.innerHTML = "TIME OVER"; 

            quizTimer.remove();
            questionContainer.remove();
            gameOverScreen();
            clearInterval(counterLine);
        }
    }
};

startQuizTimer = (time) => {
    counterLine = setInterval(timer, 1000);
    function timer(){
        time -= 1;
        if (time < 0){
            clearInterval(counterLine);
        }
    }
};
let userInitial;



var userHighScore = {
    userName: userInitial,
    userScore: score
};

var updatedUserHighScore =[];


gameOverScreen = () => {

    var gameOver= document.createElement("p");
    gameOver.className = "game-over-p";
    gameOver.innerHTML="GAME OVER";
    quizContainer.appendChild(gameOver);

    setTimeout(function(){ gameOver.remove(); }, 3000);
        if (score > 0){
            window.alert("SCORE =" + score)
            userInitial = window.prompt("Enter your initials to save highscore");
            console.log(userInitial)
            userName = userInitial;
            localStorage.setItem("userScore", JSON.stringify(score));
            localStorage.setItem("userName", JSON.stringify(userInitial));
            updatedUserHighScore.push(userHighScore);
           

    };
    showHighscore();
    setTimeout(function(){ location.reload(); }, 7000);
    
};


// user can select to view high score by clicking "view high score"
var highScoreP = document.createElement("p");
highScoreP.className = "highscore-p";
highScoreP.textContent ="VIEW HIGH SCORES"
headerEl.appendChild(highScoreP);



showHighscore = () => {
    var highScoreContainer = document.createElement("div");
        highScoreContainer.className = "highscore-container"
    var highscoreH2 = document.createElement("h2");
        highscoreH2.className = "highscore-h2";
        highscoreH2.innerText = "^^^highscores";
    highScoreContainer.appendChild(highscoreH2);
    var highscoreList = document.createElement("ol");
        highscoreList.className = "highscore-ol";
    highScoreContainer.appendChild(highscoreList);
    var highscoreListItem = document.createElement("li");
        highscoreListItem.className = "highscore-li";
    var savedHighScore = localStorage.getItem("userHighScore")
    savedHighScore = JSON.parse(savedHighScore);
        highscoreListItem.textContent = userInitial + ": "+score;
    highscoreList.appendChild(highscoreListItem);
    var exitHighscore = document.createElement("button");
    exitHighscore.className = "all-btn";
    exitHighscore.innerText = "EXIT highscores";
    highScoreContainer.appendChild(exitHighscore);

    quizContainer.remove();
    quizBody.appendChild(highScoreContainer);
    quizContainer.className = "fade";

    highScoreContainer.addEventListener('click', (event) => {
        location.reload();
    });
};

highScoreP.addEventListener('click', (event) => {
    showHighscore();
});


window.addEventListener('load', (event) => {
    console.log('quiz has started');
    startQuiz()
});