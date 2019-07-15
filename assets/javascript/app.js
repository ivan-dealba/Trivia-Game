let gameStart = true;

let clickToStart = $('<button>');
clickToStart.text("Start Game");
clickToStart.css('padding', '20px');
clickToStart.css('margin', '20px');
clickToStart.attr('id', 'button-start');

const questionsArr = ['questionOne', 'questionTwo', 'questionThree'];

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