function Ball(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.isAlive = true;
  this.col = color(200, 100, 100);
  this.speed = {
    x: 4,
    y: 7
  };
  this.display = function () {
    fill(this.col);
    ellipse(this.x, this.y, this.r);
  };
  this.move = function () {
    if (this.x + this.r / 2 > width || this.x - this.r / 2 < 0) {
      this.speed.x *= -1;
    }
    if (this.y - this.r / 2 < 0) {
      this.speed.y *= -1;
    }
    if (this.y + this.r / 2 > height) {
      this.isAlive = false;
    }

    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
  };
  this.collisionDetect = function (x, y, targetHeight, targetWidth) {
    const deltaX = this.x - max(x, min(this.x, x + targetWidth));
    const deltaY = this.y - max(y, min(this.y, y + targetHeight));
    if (deltaX * deltaX + deltaY * deltaY < this.r * this.r / 4) {
      if (this.x < x || this.x > x + targetWidth) {
        this.speed.x *= -1;
      }
      if (this.y < y || this.y > y + targetHeight) {
        this.speed.y *= -1;
      }
      return true;
    }
  };
  this.chase = function ( x , y ) {
    this.x = x;
    this.y = y;
  }
}
