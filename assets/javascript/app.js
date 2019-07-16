// Toggle
let gameStart = true;

// Button to start game
let clickToStart = $('<button>');
clickToStart.text("Start Game");
clickToStart.css('padding', '20px');
clickToStart.css('margin', '20px');
clickToStart.attr('id', 'button-start');

// Button to proceed to next question
let nextQuestion = $('<button>');
nextQuestion.text('Next Question');
nextQuestion.css('padding', '20px');
nextQuestion.css('margin', '20px');
// nextQuestion.attr('id', 'button-next');

// Counter
var totalCorrect = 0;
var totalWrong = 0;

// Questions assigned to individual constants as strings
const questionOne = "Who is Gon Freecss' best friend in Hunter x Hunter?";
const questionTwo = "Who does Agumon digi-evolve into?";
const questionThree = "What is the name of the nine-tailed beast that was sealed inside Naruto Uzumaki when he was an infant?";
const questionFour = "What is the name of the character in the first season of Yu-Gi-Oh! who is known for having three Blue Eyes White Dragons?";
const questionFive = "What is the name of the character in Avatar the Last Airbender who is an earth bender?";

// Array holding answer choices for their respect question
// questionOne pertains to the object at index 0, questionTwo pertains to the object at index 1, and so on
const questionsArr = [{
    question: {
        correct: "Killua Zoldyck",
        wrongOne: "Hisoka Morow",
        wrongTwo: "Isaac Netero",
        wrongThree: "Silva Zoldyck"
    }
}, {   
    question: {
        correct: "Greymon",
        wrongOne: "Angemon",
        wrongTwo: "Kabuterimon",
        wrongThree: "Garurumon"
    }
}, {
    question: {
        correct: "Kurama",
        wrongOne: "Gyuki",
        wrongTwo: "Kokuo",
        wrongThree: "Matatabi"
    }
}, {
    question: {
        correct: "Seto Kaiba",
        wrongOne: "Maximillion Pegasus",
        wrongTwo: "Weevil Underwood",
        wrongThree: "Dinosaur Ryuzaki"
    }
}, {
    question: {
        correct: "Toph",
        wrongOne: "Sokka",
        wrongTwo: "Katara",
        wrongThree: "Zuko"
    }
}];

// 
function newGame(){
    if(gameStart === true){
        $('#time-remaining').text('');
        $('#current-question').text('');
        $('#answer-choices').text('');
        $('#game-button').append(clickToStart);
    } else{
        // start questions
        // call function for executing trivia questions
        $('#game-button').text('');
        $('#game-button').append(nextQuestion);
        triviaQuestions();
    }
}

newGame();

// Click event to start game
$('#button-start').on('click', function(){
    gameStart = false;
    newGame();
})

// Click event to proceed to next question
$(nextQuestion).on('click', function(){
    $('#answer-choices').text('');
    triviaQuestions();
})

// Randomly choose a question and its answers to be displayed on the browser
function triviaQuestions(){

    // for(var i = 0; i < questionsArr.length; i++){
        let randomQuestion = Math.floor(Math.random() * questionsArr.length);
        // let randomQuestion = 0;

        if(randomQuestion === 0){
            $('#current-question').text(questionOne);

            let answerOne = $('<button>');
            let answerTwo = $('<button>');
            let answerThree = $('<button>');
            let answerFour = $('<button>');

            answerOne.text(questionsArr[0].question.correct);
            answerTwo.text(questionsArr[0].question.wrongOne);
            answerThree.text(questionsArr[0].question.wrongTwo);
            answerFour.text(questionsArr[0].question.wrongThree);

            $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);

        } else if(randomQuestion === 1){
            $('#current-question').text(questionTwo);

            let answerOne = $('<button>');
            let answerTwo = $('<button>');
            let answerThree = $('<button>');
            let answerFour = $('<button>');

            answerOne.text(questionsArr[1].question.correct);
            answerTwo.text(questionsArr[1].question.wrongOne);
            answerThree.text(questionsArr[1].question.wrongTwo);
            answerFour.text(questionsArr[1].question.wrongThree);

            $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);
        } else if(randomQuestion === 2){
            $('#current-question').text(questionThree);

            let answerOne = $('<button>');
            let answerTwo = $('<button>');
            let answerThree = $('<button>');
            let answerFour = $('<button>');

            answerOne.text(questionsArr[2].question.correct);
            answerTwo.text(questionsArr[2].question.wrongOne);
            answerThree.text(questionsArr[2].question.wrongTwo);
            answerFour.text(questionsArr[2].question.wrongThree);

            $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);
        } else if(randomQuestion === 3){
            $('#current-question').text(questionFour);

            let answerOne = $('<button>');
            let answerTwo = $('<button>');
            let answerThree = $('<button>');
            let answerFour = $('<button>');

            answerOne.text(questionsArr[3].question.correct);
            answerTwo.text(questionsArr[3].question.wrongOne);
            answerThree.text(questionsArr[3].question.wrongTwo);
            answerFour.text(questionsArr[3].question.wrongThree);

            $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);
        } else if(randomQuestion === 4){
            $('#current-question').text(questionFive);

            let answerOne = $('<button>');
            let answerTwo = $('<button>');
            let answerThree = $('<button>');
            let answerFour = $('<button>');

            answerOne.text(questionsArr[4].question.correct);
            answerTwo.text(questionsArr[4].question.wrongOne);
            answerThree.text(questionsArr[4].question.wrongTwo);
            answerFour.text(questionsArr[4].question.wrongThree);

            $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);
        }
    // }
}
