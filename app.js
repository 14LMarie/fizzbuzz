/*for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("fizzbuzz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}*/
// code above is fizzbuzz challenge
// code below is second fizzbuzz challenge
function counter(x) {
    //var userNumber = parseInt(prompt("Hello! We are going to play a game!\nPlease input your favorite number to start.", ""));
    for (var i = 1; i <= x; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            var msg = "<li>FizzBuzz</li>";
        } else if (i % 5 == 0) {
            var msg = "<li>Buzz</li>";
        } else if (i % 3 == 0) {
            var msg = "<li>Fizz</li>";
        } else {
            var msg = "<li>" + i + "</li>";
        }
        $('.results').append(msg);
    }
}

$(document).ready(function () {
    $('#add').on('click', function () {
        var limit = $('#maxNumber').val();

        var userInputCorrect = true;
        //check if the limit is a number
        while (Math.floor(limit) != limit) {

            var limit = prompt("Your upper limit was not correct. Set it again.");
            userInputCorrect = false;
        }
        //if the user inoput is a number then play the game
        if (userInputCorrect = true) {
            counter(limit);
        }
    });
});
