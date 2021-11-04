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
        question: "Which of the following is a utility function in jQuery?",
        choices: {
            1: "jQuery.each()", 
            2: "jQuery.parseJSON()",
            3: "jQuery.noConflict()",
            4: "jQuery.Conflict()"
        },
        correctAnswer: 1
        },
    {
        question: "Which of the following is a single global function defined in the jQuery library?",
        choices: {
            1: "jQuery()", 
            2: "$()",
            3: "Queryanalysis()",
            4: "global()"
        },
        correctAnswer: 0
        },
    {
        question: "$.foo() is equivalent to:",
        choices: {
            1: "javascript.foo()", 
            2: "document.foo()",
            3: "jQuery.foo()",
            4: "None of the above"
        },
        correctAnswer: 2
        },
    {
    question: "Which built-in method returns the character at the specified index?",
    choices: {
        1: "characterAt()", 
        2: "getCharAt()",
        3: "charAt()",
        4: "None of the above"
    },
    correctAnswer: 2
    },    
    {
    question: "Which is the correct format for changing text color to 'red' in CSS?",
    choices: {
        1: "classname { background-color: red; }", 
        2: "classname { font-family: red; }",
        3: "classname { font-style: red; }",
        4: "classname { color: red; }"
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
// generate question text and choice buttons
// add to score if question is answered correctly
// change questions between answers

appendQuestion = () => {
    
    var disappearingContainer = document.createElement("div");
    questionContainer.appendChild(disappearingContainer);
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log('index',questionIndex)



    currentQuestion = availableQuestions[questionIndex];
    questionH.textContent = currentQuestion.question;
    disappearingContainer.appendChild(questionH);
    var choices = Object.values(currentQuestion.choices);

    choices.forEach((choice, index, correctAnswer) => {
        // debugger;
        var choiceNum = (index);
        console.log(choiceNum)        
        choice.innerText = currentQuestion[choiceNum + 'choice'];
        var choiceBtn = document.createElement("button");
        choiceBtn.className = "choice-btn";
        choiceBtn.setId
        choiceBtn.innerText= (choiceNum+1) + ": " +choice;
        var buttonDiv = document.createElement("div");
        disappearingContainer.appendChild(buttonDiv);
        buttonDiv.appendChild(choiceBtn);

        choiceBtn.addEventListener('click', (event) => {
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

    });
   
   

    // replace answered questin with new
    function changeQuestion() {
        if (availableQuestions.length>0){
            availableQuestions.splice(questionIndex, 1);
            console.log('length of availableQuestions', availableQuestions.length);
            disappearingContainer.remove();
            appendQuestion();
        }
        else { 
            gameOver};
    };    
};




runQuiz = () => {
    timeLeft = 3;
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
            clearInterval(counterLine);
            gameOver();
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


var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
if (!highScores) {
    highScores = {
        name: [],
        userscore: []
    };
};

var MAX_HIGH_SCORES = 7;


// intials save form
var initialsForm = document.createElement("form");
initialsForm.className = ("initials-form");
var formLabel = document.createElement("label");
formLabel.className = "form-label";
formLabel.textContent = "Enter initials to save highscore:";
var formInput = document.createElement("input");
formInput.className= "form-input"
formInput.setAttribute("type", "text");
formInput.setAttribute("value", "");
var formButton = document.createElement("button");
formButton.className=("all-btn");
formButton.textContent=("Submit");

initialsForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    var x = (formInput.value);
    var userInitials = x;
    
    var newHighScore = {
        name: userInitials,
        userscore: score
    }   

    console.log(newHighScore)
    let values = Object.values(highScores);
    highScores.push(newHighScore)
    console.log(highScores)
    highScores.sort((a, b) => b.userscore - a.userscore);
    highScores.splice(7);
    localStorage.setItem("highscores", JSON.stringify(highScores));
    initialsForm.remove();
    showHighscore();
});


initialsForm.appendChild(formLabel);
initialsForm.appendChild(formInput);
initialsForm.appendChild(formButton);
    
gameOver = () => {
 
    quizBody.appendChild(initialsForm);


    var gameOver= document.createElement("p");
    gameOver.className = "game-over-p";
    gameOver.innerHTML="GAME OVER";
    quizContainer.appendChild(gameOver);
};


// user can select to view high score by clicking "view high score"
var highScoreP = document.createElement("p");
highScoreP.className = "highscore-p";
highScoreP.textContent ="VIEW HIGH SCORES"
headerEl.appendChild(highScoreP);



function showHighscore () {
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "highscore-container"
    var highscoreH2 = document.createElement("h2");
    highscoreH2.className = "highscore-h2";
    highscoreH2.innerText = "^^^highscores";
    highScoreContainer.appendChild(highscoreH2);
    var highscoreList = document.createElement("ol");
    highscoreList.className = "highscore-ol";
    highScoreContainer.appendChild(highscoreList);

    console.log('highscores', highScores[0].name)

    for (var i=0; i<highScores.length; i++){
        var highscoreListItem = document.createElement("li");
    highscoreListItem.className = "highscore-li";
    highscoreListItem.textContent = `${highScores[i].name} - Score: ${highScores[i].userscore}`;
    highscoreList.appendChild(highscoreListItem);
    }

    // highScores = JSON.parse(localStorage.getItem("highscores"));


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