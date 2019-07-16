// Toggle
let gameStart = true;

// Button to start game
let clickToStart = $('<button>');
clickToStart.text("Start Game");
clickToStart.css('padding', '20px');
clickToStart.css('margin', '20px');
clickToStart.attr('id', 'button-start');

// Image on game start page
let welcomeImage = $('<img>');
welcomeImage.attr('src', 'assets/images/main-page.jpeg')
welcomeImage.attr('id', 'welcome-image');

// Image placeholder for questions
let questionImage = $('<img>');
questionImage.attr('id', 'question-image');

// Button to proceed to next question
let nextQuestion = $('<button>');
nextQuestion.text('Next Question');
nextQuestion.css('padding', '20px');
nextQuestion.css('margin', '20px');
nextQuestion.attr('id', 'button-next');

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
        $('#trivia-title').append(welcomeImage);
    } else{
        $('#game-button').text('');
        $('#welcome-image').remove();
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
    $(questionImage).remove();
    randomQuestion = 0;
    newGame();
})

// Counter for current question
let randomQuestion = 0;

// Variable that will hold interval ID when we execute the run function
let intervalId;

// Variable will be decremented for each question
let number = 30;

//
let imageAnswer = 0;

// Function that will decrement our timer
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $('#time-remaining').html(`<h3>Time remaining: ${number}</h3>`);


    if(number === 0){
        stop();
        alert('Time is up!');
        $('#answer-choices').text(`The answer is ${questionsArr[0].question.correct}.`);

        $(questionImage).remove();
        $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
        imageAnswer++;
        $('#current-image').append(questionImage);

        questionsArr.splice(0,1);
        totalWrong++;
        number = 30;
    }
}

function stop(){
    clearInterval(intervalId);
}

// Randomly choose a question and its answers to be displayed on the browser
function triviaQuestions(){

    // let randomQuestion = Math.floor(Math.random() * questionsArr.length);

    if(randomQuestion === 0){
        run();

        $('#current-question').html(`<h3>${questionOne}</h3>`);
        $(questionImage).attr('src', 'assets/images/gon.jpeg');
        $('#current-image').append(questionImage);

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
            $('#current-question').html(`<h3>Please click Next Question to proceed.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');            
            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');
            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })
        
    } else if(randomQuestion === 1){
        run();

        $('#current-question').html(`<h3>${questionTwo}</h3>`);
        $(questionImage).remove();
        $(questionImage).attr('src', 'assets/images/agumon.png');
        $('#current-image').append(questionImage);

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
            $('#current-question').html(`<h3>Please click Next Question to proceed.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');
            
            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

    } else if(randomQuestion === 2){
        run();

        $('#current-question').html(`<h3>${questionThree}</h3>`);
        $(questionImage).remove();
        $(questionImage).attr('src', 'assets/images/naruto.jpeg');
        $('#current-image').append(questionImage);

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
            $('#current-question').html(`<h3>Please click Next Question to proceed.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');
            
            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

    } else if(randomQuestion === 3){
        run();

        $('#current-question').html(`<h3>${questionFour}</h3>`);
        $(questionImage).remove();
        $(questionImage).attr('src', 'assets/images/blue-eyes.jpeg');
        $('#current-image').append(questionImage);

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
            $('#current-question').html(`<h3>Please click Next Question to proceed.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

    } else if(randomQuestion === 4){
        run();

        $('#current-question').html(`<h3>${questionFive}</h3>`);
        $(questionImage).remove();
        $(questionImage).attr('src', 'assets/images/avatar.png');
        $('#current-image').append(questionImage);

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
            $('#current-question').html(`<h3>Please click Next Question to proceed.</h3>`);
            $('#answer-choices').text('');
            
            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerTwo).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerThree).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })

        $(answerFour).on('click', function(){
            totalWrong++;
            alert('Wrong');
            $('#current-question').html(`<h3>The answer is ${questionsArr[0].question.correct}.</h3>`);
            $('#answer-choices').text('');

            questionsArr.splice(0,1);

            $(questionImage).remove();
            $(questionImage).attr('src', `assets/images/${imageAnswer}.jpeg`);
            imageAnswer++;
            $('#current-image').append(questionImage);

            stop();
            number = 30;
        })
    } else if(randomQuestion === 5){
        stop();
        $('#time-remaining').remove();
        $('#main-content').append(`Total correct: ${totalCorrect}`);
        $('#main-content').append('<br>');
        $('#main-content').append(`Total wrong: ${totalWrong}`);

        $(questionImage).remove();
        $(questionImage).attr('src', `assets/images/thank-you.jpeg`);
        imageAnswer = 0;
        $('#current-image').append(questionImage);

        gameStart = true;
        $('#game-button').text('');
        $('#game-button').append(restartGame);
    }
}

