var myObstacles = [];
var player;
var myGameArea;

window.onload = function() {
  var myGameArea = new GameArea();
  myGameArea.start(updateGameArea);
  var player = new Player(30, 30, 'red', 0, 110);
};

function updateGameArea() {
    for (var i = 0; i < myObstacles.length; i++) {
        if (player.crashWidth(myObstacles[i])) {
            myGameArea.stop();
            return;
        }
    }

    myGameArea.clear();
    myGameArea.frames++;
    if (myGameArea.frames % 100 === 0) {
        var x = myGameArea.canvas.width;
        var minHeight = 20;
        var maxHeight = 200;
        var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        var minGap = 50;
        var maxGap = 200;
        var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new Obstacle(10, height, 'green', x, 0));
        myObstacles.push(new Obstacle(10, x - height - gap,'green', x ,height + gap));
    }

    for ( var i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x--;
        myObstacles[i].update();
    }

    player.newPosition();
    player.update();
    myGameArea.score();
}

function moveUp() {
    player.speedY--;
}

function moveDown() {
    player.speedY++;
}

function moveLeft() {
    player.speedX--;
}

function moveRight() {
    player.speedX++;
}

function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
}

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
};

document.onkeyup = function(event) {
    stopMove();
};
