var ball;
var block;
var blocks = [];
var player;
const VERTICAL_LEN = 7;
const HORIZONTAL_LEN = Math.floor( VERTICAL_LEN * 1.3 );
const CLEAR_POINT = VERTICAL_LEN * HORIZONTAL_LEN;
const BLOCK_WIDTH = 100;
const BLOCK_HEIGHT = 40;
var count = 0;
var status = 100;
const WAIT_TO_START = 0;
const ALIVE = 1;
const GAMEOVER = 2;
const GAMECLEAR = 3;

function setup() {
  createCanvas( VERTICAL_LEN * BLOCK_WIDTH , VERTICAL_LEN* BLOCK_WIDTH*1.2);
  ball = new Ball(width / 2, height / 2, 20);
  player = new Player();
  status = WAIT_TO_START;
  for (var i = 0; i < VERTICAL_LEN; i++) {
    for (var j = 0; j < HORIZONTAL_LEN; j++) {
      blocks.push(new Block(i * BLOCK_WIDTH, j * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT));
    }
  }
}

function keyPressed() {
  const SPACE_KEY = 32;

  if (key.charCodeAt(0) == SPACE_KEY && status == WAIT_TO_START) {
    status = ALIVE;
  }
}

function draw() {
  background(230, 200, 200);
  noCursor();
  if (status == WAIT_TO_START) {
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont("Roboto");
    noStroke();
    fill(250, 250, 250);
    text("PRESS SPACE KEY \n TO START", width / 2, height * 0.8);

    ball.chase( constrain( player.x + player.width/2 , player.width/2 , width - player.width/2), player.y - player.height);
  }
  else if (status == ALIVE) {

    textSize(300);
    textAlign(CENTER, CENTER);
    textFont("Roboto");
    noStroke();
    text(count.toString(), width / 2, height / 2);

    ball.move();

    if (!ball.isAlive) {
      status = GAMEOVER;
    }

    for (var i = 0; i < blocks.length; i++) {
      if (ball.collisionDetect(blocks[i].x, blocks[i].y, blocks[i].height, blocks[i].width)) {
        blocks.splice(i, 1);
        count++;
        if (count == CLEAR_POINT) {
          status = GAMECLEAR;
        }
        continue;
      }
      blocks[i].display();
    }

    ball.collisionDetect(mouseX - player.width / 2, player.y, player.height, player.width);

  } else if ( status == GAMEOVER) {
    textSize(80);
    textAlign(CENTER, CENTER);
    textFont("Roboto");
    noStroke();
    text("GAME OVER", width / 2, height / 2);
    cursor(ARROW);
  } else if (status == GAMECLEAR) {
    textSize(80);
    textAlign(CENTER, CENTER);
    textFont("Roboto");
    noStroke();
    text("CONGURATULATION!!!", width / 2, height / 2);
    cursor(ARROW);
  }

  if (status == WAIT_TO_START || status == ALIVE) {
    ball.display();
    player.display();
  }


}
