var random_result;
var lose;
var win;
var previous = 0;

//-------------------------------------------------------------

var startGame = function() {

    $(".crystals").empty(); //this generates a new element when pages reloads

    var images = ["./assets/images/turq.png", "./assets/images/green.png", "./assets/images/yellow.png", "./assets/images/orange.png"];

    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html("Random Result: " + random_result); //added to DOM

    for(var i = 0; i < 4; i++) { //4 times to create our 4 crystals

        var random = Math.floor(Math.random() * 11) + 1; //generates a random number

        
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', "rondo": random
            });

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total: " + previous);
}



//-------------------------------------------------------------

startGame();

var restart = function() {

}

$(document).on("click", ".crystal", function () {
    var result;

    var num = parseInt($(this).attr("rondo"));

    previous += num;

    $("#previous").html("Total: " + previous);

    if(previous > random_result) {

        lose--;

        $("#lose").html("You've Lost!: " + lose); //Connected with the HTML ID #lose

        previous = 0;

        startGame(); //game restarts after loss
    }
    else if(previous === random_result){

        win++;

        $("#win").html("Victory: " + win); //Connected with the HTML ID #win

        previous = 0;

        startGame(); //game restarts after win
    }

    console.log(previous);

});