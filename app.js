for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("fizzbuzz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}
// code above is fizzbuzz challenge
// code below is second fizzbuzz challenge
function counter(x) {
    var userNumber = parseInt(prompt("Hello! We are going to play a game!\nPlease input your favorite number to start.", ""));
    for (var i = 1; i <= userNumber; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("fizzbuzz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}
console.log(counter(userNumber));
