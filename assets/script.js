quizBody = document.querySelector("body");

var headerEl = document.createElement("header");
quizBody.appendChild(headerEl);

var quizContainer = document.createElement("div");
quizContainer.className = "quiz-intro";
quizBody.appendChild(quizContainer);

// Quiz intro screen 
var startQuiz = function(){
    var quizIntro = document.createElement("div");
    quizContainer.appendChild(quizIntro);
    var quizTitleEl = document.createElement("h1");
    quizTitleEl.className = "quiz-title";
    quizTitleEl.textContent = "Coding Quiz Challenge";
    var quizInstEl = document.createElement("p");
    quizInstEl.className = "inst-p"
    quizInstEl.textContent = "Try to answer as many questions as you can before time runs out!";
    var startBtnEl = document.createElement("button");
    startBtnEl.className = "start-btn";
    startBtnEl.textContent = "START QUIZ";
    quizIntro.appendChild(quizTitleEl);
    quizIntro.appendChild(quizInstEl);
    quizIntro.appendChild(startBtnEl);

   

    //   generate questions
    var questionContainer = document.createElement("div");
        questionContainer.className = "question-div";
        var tempFiller = document.createElement("p");
        tempFiller.textContent = "this is a test";
        questionContainer.appendChild(tempFiller);


    startBtnEl.addEventListener('click', (event) => {
        quizContainer.replaceChild(questionContainer, quizIntro);
      });
    
};




// Highscores El, upon click clears away other content to display high scores
var highscoreArr = [];
// highscore data packaged as object
var highscoreDataObj = {
    name: userInitial,
    score: userScore
    };
// send object as arguement to set score
setScore (highscoreDataObj);

// user can select to view high score by clicking "view high score"
var highScore = document.createElement("p");
    highScore.className = "highscore-p";
    highScore.textContent ="VIEW HIGH SCORES"
headerEl.appendChild(highScore);

var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "highscore-container"
var highscoreH2 = document.createElement("h2");
    highscoreH2.className = "highscore-h2";
    highscoreH2.textContent = "High Scores";
highScoreContainer.appendChild(highscoreH2);
var highscoreList = document.createElement("ol");
    highscoreList.className = "highscore-ol";
highScoreContainer.appendChild(highscoreList);
var highscoreListItem = document.createElement("li");
    highscoreListItem.className = "highscore-li";
    highscoreListItem.textContent = highscoreArr;
highscoreList.appendChild(highscoreListItem);



highScore.addEventListener('click', (event) => {

    quizBody.replaceChild(highScoreContainer, quizContainer);
});


// when the buttons is clicked the questions appear in random sequence
// upon start a timer begins and remaining time is displayed in top-righ corner of browser
// after each question a list of answer buttons appear
// when an answer is selected correct or incorrect is stated below
// number of correct answers is stored
// when time runs out the quiz stops
// user is informed of their score
// user is given the option to submit initials to save their score or skip
// after completeing entry, user is prompted to play again

// upon pageload quiz initiates
window.addEventListener('load', (event) => {
    console.log('quiz has started');
    startQuiz();
  });