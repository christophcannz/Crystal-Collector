console.log("Hello World")

// 1. A game with four crystals
// 2. Every crystal must have a random number between 1-12
// 3. That random number will regenerate each time you win or lose.
// 4. When clicking any crystal, it should add to the previous result until it equals the total score.
// 5. If it is NOT EQUAL, then we start over.
// 6. If it IS EQUAL, we INCREMENT a win counter.

var random_result;
var lose;
var win;
var previous = 0;

//-------------------------------------------------------------

var startGame = function() {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html("Random Result: " + random_result);

    for(var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', "rondo": random
            });

            crystal.html(random);

        $(".crystals").append(crystal);
    }
}

//-------------------------------------------------------------

startGame();

var restart = function() {

}

$(document).on("click", ".crystal", function () {
    var result;

    var num = parseInt($(this).attr("rondo"));

    previous += num;

    if(previous > random_result) {

        lose--;

        $("#lose").html(lose);

        previous = 0;

        startGame();
    }
    else if(previous === random_result){

        win++;

        $("#win").html(win);

        previous = 0;

        startGame();
    }

    console.log(previous);

});