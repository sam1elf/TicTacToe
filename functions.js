var currentPlayer = "O";
var winner = "";
counter = 0;
winsByO = 0;
winsByX = 0;

function toggleGameBoard(id) {
    $('#menu').attr("class", "container my-5 w-25 text-center text-info d-none");
    $('#gameBoard').attr("class", "container h-100 d-block");
    $('#scoreBoard').attr("class", "container h-100 d-block");
    currentPlayer = $('#' + id ).text();
    $('#output').text("Current Player: " + currentPlayer);
}

function tilePressed(id) {
    // console.log(id +" pressed!");
    if ( winner === "") {
        if ($('#' + id).text() === "" ) {
            $('#' + id).text(currentPlayer);
            counter ++;
            
            // check if all 9 tiles have been played
            if ( counter == 9 ) {
                $('#output').text("No Winner. Try again!");
                $('#playAgain').attr('class', 'btn-lg btn-success mx-auto visible');
            }

            // check for Winner
            if ( isThereAWinner() ) {
                $('#output').text(currentPlayer + " Wins!");
                winner = currentPlayer;
                
            };
            if ( winner === "" && counter < 9) {
                // switch currentPlayer
                if ( currentPlayer == "O" ) {
                    currentPlayer = "X";
                    $('#output').text("Current Player: X");
                } else {
                    currentPlayer = "O";
                    $('#output').text("Current Player: O");
                };
            }
        } 
    }
};

function isThereAWinner() {
    if (
    $('#button1').text() === currentPlayer && $('#button2').text() === currentPlayer && $('#button3').text() === currentPlayer ||
    $('#button4').text() === currentPlayer && $('#button5').text() === currentPlayer && $('#button6').text() === currentPlayer ||
    $('#button7').text() === currentPlayer && $('#button8').text() === currentPlayer && $('#button9').text() === currentPlayer ||
    $('#button1').text() === currentPlayer && $('#button4').text() === currentPlayer && $('#button7').text() === currentPlayer ||
    $('#button2').text() === currentPlayer && $('#button5').text() === currentPlayer && $('#button8').text() === currentPlayer ||
    $('#button3').text() === currentPlayer && $('#button6').text() === currentPlayer && $('#button9').text() === currentPlayer ||
    $('#button1').text() === currentPlayer && $('#button5').text() === currentPlayer && $('#button9').text() === currentPlayer ||
    $('#button7').text() === currentPlayer && $('#button5').text() === currentPlayer && $('#button3').text() === currentPlayer  
    ) {
        $('#playAgain').attr('class', 'btn-lg btn-success mx-auto visible');
        addScore();
        $('#scoreO').html(winsByO);
        $('#scoreX').html(winsByX);
        return true;
    } else {
        return false;
    };      
} 
function addScore() {
    if ( currentPlayer === "O") {
        winsByO ++;
    } else {
        winsByX ++;
    }
}
function playAgain() {
    // location.reload();
    // switch to menu
    $('#gameBoard').attr("class", "container h-100 d-none");
    $('#menu').attr("class", "container my-5 w-25 text-center text-info d-block");
    
    winner = "";
    counter = 0;
    $('#button1').text("");
    $('#button2').text("");
    $('#button3').text("");
    $('#button4').text("");
    $('#button5').text("");
    $('#button6').text("");
    $('#button7').text("");
    $('#button8').text("");
    $('#button9').text("");
    $('#playAgain').attr('class', 'btn-lg btn-success mx-auto invisible');
}

