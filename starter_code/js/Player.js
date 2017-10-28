function Player(width, height, color, x, y) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.color = color;
};

Player.prototype.newPosition = function() {
    this.x += this.speedX;
    this.y += this.speedY;
};

Player.prototype.update = function(myGameArea) {
    var ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

Player.prototype.left = function() {
    return this.x;
};

Player.prototype.right = function() {
    return this.x + this.width;
};

Player.prototype.top = function() {
    return this.y;
};

Player.prototype.bottom = function() {
    return this.y + this.height;
};

Player.prototype.crashWidth = function(obstacle) {
    return !((this.bottom() < obstacle.top())    ||
             (this.top()    > obstacle.bottom()) ||
             (this.right()  < obtacle.left())    ||
             (this.left()   > obstacle.right()));
};
