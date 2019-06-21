var currentPlayer = "O";
var winner = "";
counter = 0;


function tilePressed(id) {
    // console.log(id +" pressed!");
    if ( winner === "") {
        if ($('#' + id).text() === "--" ) {
            $('#' + id).text(currentPlayer);
            counter ++;

            if ( counter == 9 ) {
                $('#output').text("No Winner. Try again!");
                $('#playAgain').attr('class', 'btn-lg btn-success mx-auto visible');
            }

            // check for Winner
            if ( isThereAWinner() ) {
                $('#output').text(currentPlayer + " Wins!");
                winner = currentPlayer;
            };

            // switch currentPlayer
            if ( currentPlayer == "O" ) {
                currentPlayer = "X";
                $('#currPlay').text("X");
            } else {
                currentPlayer = "O";
                $('#currPlay').text("O");
            };

        } 
    }
};


function isThereAWinner() {
    console.log("entering winner eval");
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
        console.log("returning true");
        $('#playAgain').attr('class', 'btn-lg btn-success mx-auto visible');
        return true;
    } else {
        console.log("returning false");
        return false;
    };
            
} 

function playAgain() {
    location.reload();
}