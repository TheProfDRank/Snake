var foodThere = false;
var fieldSize = 400;
var movingDirection = 2;
var keyCode = 0;
var sxPos = 0;
var syPos = 0;

document.onkeydown = function (event) {

    keyCode = event.keyCode;
    console.log(keyCode);

    if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40) {
        console.log("Scanning ...")
        changeDirection()
        testFood()
    } else {
        return
    }
}

function moveSnake() {
        console.log("-->")
        sxPos = sxPos + 10;
        document.getElementById("snake").style.left = sxPos + 'px'
}

function changeDirection() {
    if (keyCode == 37) {
        movingDirection = 0;
    }
    if (keyCode == 38) {
        movingDirection = 1;
    }
    if (keyCode == 39) {
        movingDirection = 2;
    }
    if (keyCode == 40) {
        movingDirection = 3;
    }
}

function testFood() {
    if (foodThere == true){
        return
    } else {
        generateFood()
    }
}

function generateFood() {
    var xPos = 10 * Math.round((fieldSize - 10) /10 * Math.random());
    var yPos = 10 * Math.round((fieldSize - 10) /10 * Math.random());

    document.getElementById("food").style.left = xPos + 'px';
    document.getElementById("food").style.top = yPos + 'px';

    console.log(xPos)
    console.log(yPos)

    foodThere = true;
}