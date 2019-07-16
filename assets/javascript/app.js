let gameStart = true;

let clickToStart = $('<button>');
clickToStart.text("Start Game");
clickToStart.css('padding', '20px');
clickToStart.css('margin', '20px');
clickToStart.attr('id', 'button-start');

var totalCorrect = 0;
var totalWrong = 0;

const questionsArr = [{
    questionOne: {
        "Who is Gon Freecss' best friend in Hunter x Hunter?": {
            correct: "Killua Zoldyck",
            wrong: "Hisoka Morow",
            wrong: "Isaac Netero",
            wrong: "Silva Zoldyck"
        }
    }
}, {   
    questionTwo: {
        "Who does Agumon digi-evolve into?": {
            correct: "Greymon",
            wrong: "Angemon",
            wrong: "Kabuterimon",
            wrong: "Garurumon"
        }
    }
}, {
    questionThree: {
        "What is the name of the nine-tailed beast was sealed inside Naruto Uzumaki when he was an infant?": {
            correct: "Kurama",
            wrong: "Gyuki",
            wrong: "Kokuo",
            wrong: "Matatabi"
        }
    }
}, {
    questionFour: {
    "What is the name of the male character in the first season of Yu-Gi-Oh! who is known for having three Blue Eyes White Dragons?": {
        correct: "Seto Kaiba",
        wrong: "Maximillion Pegasus",
        wrong: "Weevil Underwood",
        wrong: "Dinosaur Ryuzaki"
    }
}, {
    questionFive: {
        "What is the name of the character in Avatar the Last Airbender who is an earth bender?": {
            correct: "Toph",
            wrong: "Sokka",
            wrong: "Katara",
            wrong: "Zuko"
        }
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
    for(var i = 0; i < questionsArr.length; i++){
        let currentQuestion = Math.floor(Math.random() * questionsArr.length);
        $('#main-content').text(questionsArr[currentQuestion]);
    }
}