// Toggle
let gameStart = true;

// Button to start game
let clickToStart = $('<button>');
clickToStart.text("Start Game");
clickToStart.css('padding', '20px');
clickToStart.css('margin', '20px');
clickToStart.attr('id', 'button-start');

// Counter
var totalCorrect = 0;
var totalWrong = 0;

// Questions assigned to individual constants as strings
const questionOne = "Who is Gon Freecss' best friend in Hunter x Hunter?";
const questionTwo = "Who does Agumon digi-evolve into?";
const questionThree = "What is the name of the nine-tailed beast was sealed inside Naruto Uzumaki when he was an infant?";
const questionFour = "What is the name of the male character in the first season of Yu-Gi-Oh! who is known for having three Blue Eyes White Dragons?";
const questionFive = "What is the name of the character in Avatar the Last Airbender who is an earth bender?";

// Array holding answer choices for their respect question
// questionOne pertains to the object at index 0, questionTwo pertains to the object at index 1, and so on
const questionsArr = [{
    question: {
        correct: "Killua Zoldyck",
        wrong: "Hisoka Morow",
        wrong: "Isaac Netero",
        wrong: "Silva Zoldyck"
    }
}, {   
    question: {
        correct: "Greymon",
        wrong: "Angemon",
        wrong: "Kabuterimon",
        wrong: "Garurumon"
    }
}, {
    question: {
        correct: "Kurama",
        wrong: "Gyuki",
        wrong: "Kokuo",
        wrong: "Matatabi"
    }
}, {
    question: {
        correct: "Seto Kaiba",
        wrong: "Maximillion Pegasus",
        wrong: "Weevil Underwood",
        wrong: "Dinosaur Ryuzaki"
    }
}, {
    question: {
        correct: "Toph",
        wrong: "Sokka",
        wrong: "Katara",
        wrong: "Zuko"
    }
}];

function newGame(){
    if(gameStart === true){
        $('#main-content').text("");
        $('#main-content').append(clickToStart);
    } else{
        // start questions
        // call function for executing trivia questions
        triviaQuestions();
    }
}

newGame();

$('#button-start').on('click', function(){
    gameStart = false;
    newGame();
})

function triviaQuestions(){
    // for(var i = 0; i < questionsArr.length; i++){
        let randomQuestion = Math.floor(Math.random() * questionsArr.length);
        console.log(randomQuestion);

        if(randomQuestion === 0){
            $('#main-content').text(questionOne);
        } else if(randomQuestion === 1){
            $('#main-content').text(questionTwo);
        } else if(randomQuestion === 2){
            $('#main-content').text(questionThree);
        } else if(randomQuestion === 3){
            $('#main-content').text(questionFour);
        } else if(randomQuestion === 4){
            $('#main-content').text(questionFive);
        }
    // }
}