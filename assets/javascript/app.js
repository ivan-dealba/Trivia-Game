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

// Button to restart game
let restartGame = $('<button>');
restartGame.text('Restart Game');
restartGame.css('padding', '20px');
restartGame.css('margin', '20px');

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
let questionsArr = [{
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
        $('#answer-reveal').text('');
        $('#answer-image').text('');
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
    $('#current-question').text('');
    triviaQuestions();
})

// Click event to restart game
$(restartGame).on('click', function(){
    // gameStart = false;
    newGame();
})

// Counter for current question
let randomQuestion = 0;

// Randomly choose a question and its answers to be displayed on the browser
function triviaQuestions(){

    // let randomQuestion = Math.floor(Math.random() * questionsArr.length);

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

        randomQuestion++;

        $(answerOne).on('click', function(){
            totalCorrect++;
            alert('Correct');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

    } else if(randomQuestion === 1){
        $('#current-question').text(questionTwo);

        let answerOne = $('<button>');
        let answerTwo = $('<button>');
        let answerThree = $('<button>');
        let answerFour = $('<button>');

        answerOne.text(questionsArr[0].question.correct);
        answerTwo.text(questionsArr[0].question.wrongOne);
        answerThree.text(questionsArr[0].question.wrongTwo);
        answerFour.text(questionsArr[0].question.wrongThree);

        $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);

        randomQuestion++;

        $(answerOne).on('click', function(){
            totalCorrect++;
            alert('Correct');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

    } else if(randomQuestion === 2){
        $('#current-question').text(questionThree);

        let answerOne = $('<button>');
        let answerTwo = $('<button>');
        let answerThree = $('<button>');
        let answerFour = $('<button>');

        answerOne.text(questionsArr[0].question.correct);
        answerTwo.text(questionsArr[0].question.wrongOne);
        answerThree.text(questionsArr[0].question.wrongTwo);
        answerFour.text(questionsArr[0].question.wrongThree);

        $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);

        randomQuestion++;

        $(answerOne).on('click', function(){
            totalCorrect++;
            alert('Correct');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

    } else if(randomQuestion === 3){
        $('#current-question').text(questionFour);

        let answerOne = $('<button>');
        let answerTwo = $('<button>');
        let answerThree = $('<button>');
        let answerFour = $('<button>');

        answerOne.text(questionsArr[0].question.correct);
        answerTwo.text(questionsArr[0].question.wrongOne);
        answerThree.text(questionsArr[0].question.wrongTwo);
        answerFour.text(questionsArr[0].question.wrongThree);

        $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);

        randomQuestion++;

        $(answerOne).on('click', function(){
            totalCorrect++;
            alert('Correct');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

    } else if(randomQuestion === 4){
        $('#current-question').text(questionFive);

        let answerOne = $('<button>');
        let answerTwo = $('<button>');
        let answerThree = $('<button>');
        let answerFour = $('<button>');

        answerOne.text(questionsArr[0].question.correct);
        answerTwo.text(questionsArr[0].question.wrongOne);
        answerThree.text(questionsArr[0].question.wrongTwo);
        answerFour.text(questionsArr[0].question.wrongThree);

        $('#answer-choices').append(answerOne, answerTwo, answerThree, answerFour);
        randomQuestion++;

        $(answerOne).on('click', function(){
            totalCorrect++;
            alert('Correct');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#answer-choices').text('');
            questionsArr.splice(0,1);
        })
    } else if(randomQuestion === 5){
        $('#main-content').append(`Total correct: ${totalCorrect}`);
        $('#main-content').append('<br>');
        $('#main-content').append(`Total wrong: ${totalWrong}`);

        randomQuestion = 0;
        gameStart = true;
        $('#game-button').text('');
        $('#game-button').append(restartGame);
    }
}

