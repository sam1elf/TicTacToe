var currentPlayer = "O";
var winner = "";
counter = 0;

function tilePressed(id) {
    // console.log(id +" pressed!");
    if ( winner === "") {
        if ($('#' + id).text() === "--" ) {
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
        return true;
    } else {
        return false;
    };
            
} 

function playAgain() {
    location.reload();
}