function Player() {
  this.x = 0;
  this.y = height * 0.9;
  this.col = color(250, 240, 240);
  this.width = 100;
  this.height = 20;
  this.display = function () {
    this.x = mouseX - this.width / 2;
    fill(this.col);
    rect( constrain( this.x , 0 , width - this.width) , this.y, this.width, this.height );
  }
}
