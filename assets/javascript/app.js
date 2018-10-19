/**
 * Clock object that acts as a timer for the game
 */
let clock = {
    totalTime: 10,
    interval: "",
    start: function() {
        let timeRemaining = clock.totalTime;
        this.interval = setInterval(function() {
            timeRemaining--;
            if (timeRemaining >= 0) {
                $(page.timerSelector).html(timeRemaining);
            }
            if (timeRemaining === 0) {
                clearInterval(timeRemaining);
                game.numberUnanswered++;
                page.renderResultsSection("Out of time! <br> <br> The correct answer is: " + 
                    questions[game.currentQuestion].answer);
                setTimeout(function(){
                    if (game.isGameOver()){
                        game.calculateFinalResults();
                    }
                    else{
                        game.currentQuestion++;
                        page.renderTriviaSection();
                        clock.start();
                    }
                }, 3000);
            }
        }, 1000);
    },
    pause: function () {
        clearInterval(this.interval);
    }
};

/**
 * This object contains the game logic
 */
let game = {
    currentQuestion: 0,
    numberCorrect: 0,
    numberIncorrect: 0,
    numberUnanswered: 0,
    maxQuestions: 5,
    startGame: function(){
        $(page.startButtonSelector).on("click", function(){
            clock.start();
            page.renderTriviaSection();
        });
    },
    isAnswerCorrect: function(){
        clock.pause();
        page.renderResultsSection(game.evaluateUserAnswer);
        setTimeout(function(){
            if (game.isGameOver()){
                game.calculateFinalResults();
            }
            else{
                game.currentQuestion++;
                page.renderTriviaSection();
                clock.start();
            }
        }, 3000);
    },
    evaluateUserAnswer: function(){
        let userAnswer = $(page.radioButtonSelector + ":checked").val();
        let answer = questions[game.currentQuestion].answer;
        let displayMessage = "";

        if(userAnswer === answer){
            displayMessage = userAnswer + " is correct!";
            game.numberCorrect++;
        }
        else{
            displayMessage = userAnswer + " is incorrect. <br> <br> The correct answer is: " + answer;
            game.numberIncorrect++
        }

        return displayMessage;
    },
    isGameOver: function(){
        // adding 1 to current question because it is zero based.
        return game.currentQuestion+1 === game.maxQuestions;
    },
    calculateFinalResults: function(){
        let displayMessage = "You have completed the JavaScript Trivia Game! <br><br>" +
            "Correct: " + game.numberCorrect + "<br>" +
            "Incorrect: " + game.numberIncorrect + "<br>" +
            "Unanswered: " + game.numberUnanswered;
        page.renderResultsSection(displayMessage);
        page.rendorStartOverSection();
    },
    resetGame: function(){
        game.currentQuestion = 0;
        game.numberCorrect = 0;
        numberIncorrect = 0;
        numberUnanswered = 0;
    }
};

/**
 * The sole purpose of this object is to render the page
 */
let page = {
    startButtonSelector: "#start-button",
    submitButtonSelector: "#submit-button",
    introSectionSelector: "#intro-section",
    timerSectionSelector: "#timer-section",
    triviaSectionSelector: "#trivia-section",
    resultsSectionSelector: "#results-section",
    currentQuestionSelector: "#current-question",
    radioButtonSelector: "input[name='rbnChoice']",
    radioButtonLabelSelector: "label[name='labelChoice']",
    triviaElementSelector: ".trivia-element",
    radioButtonLabel: "",
    timerSelector: "#timer",
    timerDivSelector: "#timer-div",
    answerSectionSelector: "#answer-section",
    currentAnswerSelector: "#current-answer",
    startOverElementSelector: "#start-over",
    renderTriviaSection: function(){

        $(page.introSectionSelector).hide();
        $(page.resultsSectionSelector).hide();
        $(page.timerSectionSelector).show();
        $(page.triviaSectionSelector).show();
        $(page.triviaElementSelector).detach();

        let currentQuestionDivSelector = $(page.triviaSectionSelector).find(".jumbotron");
        let triviaQuestionObject = questions[game.currentQuestion];
        let triviaQuestion = triviaQuestionObject.question;
        let triviaChoices = triviaQuestionObject.choices;

        let currentQuestionParagraphElement = $("<p>", {
            id: "current-question",
            class: "text-left ml-3 trivia-element"
        });
        
        page.renderTimerSection();

        // set the current question
        currentQuestionParagraphElement.text(triviaQuestion);

        // add the question to the div
        $(currentQuestionDivSelector).append(currentQuestionParagraphElement);

        // render all of the choices (displayed as radio buttons)
        page.renderTriviaChoices(triviaChoices, currentQuestionDivSelector);

        let submitButton = $("<input>", {
            id: "submit-button",
            type: "button",
            class: "btn btn-secondary ml-3 mt-5 trivia-element",
            val: "Submit"
        });

        // submitButton.text("Submit");
        $(currentQuestionDivSelector).append(submitButton);

        // set up onclick event for the submit button
        $(page.submitButtonSelector).on("click", function(){
            game.isAnswerCorrect();
        });
    },
    renderTriviaChoices: function(triviaChoices, currentQuestionDivSelector){
        for(let index in triviaChoices){
            let currentChoice = triviaChoices[index];
            let choiceElement = $("<input>", {
                "type": "radio",
                "value": currentChoice,
                "class": "text-left ml-3 trivia-element",
                "name": "rbnChoice"
            })

            let currentChoiceLabelElement = $("<label>", {
                class: "text-left ml-3 trivia-element",
                name: "labelChoice"
            });

            $(currentQuestionDivSelector).append(choiceElement);
            currentChoiceLabelElement.text(currentChoice);
            $(currentQuestionDivSelector).append(currentChoiceLabelElement);
            $(currentQuestionDivSelector).append("<br class=\"trivia-element\">");
        }
    },
    renderResultsSection: function(displayMessage){
        $(page.introSectionSelector).hide();
        $(page.timerSectionSelector).show();
        $(page.triviaSectionSelector).hide();
        $(page.resultsSectionSelector).show();
        $(page.currentAnswerSelector).detach();

        let currentAnswerParagraphElement = $("<p>", {
            id: "current-answer",
            class: "text-left ml-3 trivia-element"
        });

        currentAnswerParagraphElement.html(displayMessage);

        $(page.resultsSectionSelector).find(".jumbotron").append(currentAnswerParagraphElement);
    }, 
    renderTimerSection: function(){
        $(page.timerSelector).detach();
        let timerElement = $("<span>",{
            id: "timer",
        }).text(10);

        $(page.timerDivSelector).append(timerElement);
    },
    rendorStartOverSection: function(){
        let startOverTextElement = $("<p>", {
            id: "start-over",
            class: "text-center ml-3"
        }).text("Click to Start Over");

        $(page.resultsSectionSelector).find(".jumbotron").append(startOverTextElement);

        $(page.startOverElementSelector).on("click", function(){
            $(this).detach();
            game.resetGame();
            page.renderTriviaSection();
            clock.start();
        });
    }
};

/************************************* Start Game ***************************************************/

$(document).ready(function(){

    // whenever the page is loaded, we start a new game
    game.startGame();
});
/************************************* Start Game ***************************************************/