function GameArea() {
    this.canvas = document.createElement('canvas');
    this.frames = 0;
}

GameArea.prototye.start = function(updateGameArea) {
    this.canvas.width = 1500;
    this.canvas.height = 350;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
};

GameArea.prototype.stop = function() {
    clearInterval(this.interval);
};

GameArea.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

GameArea.prototype.score = function() {
    var points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText('Score: ' + points, 350, 50);
};
