function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.r = 255;
  this.g = random(130, 200);
  this.b = random(130, 200);
  this.display = function () {
    fill(color(this.r, this.g, this.b));
    stroke(this.r - 20, this.g - 20, this.b - 20);
    strokeWeight(2);
    rect(this.x, this.y, this.width , this.height);
  }
}
