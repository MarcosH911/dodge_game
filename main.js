window.onload;
const height = 300;
const width = 500;
let board;
let context;

window.onload = function () {
  board = document.getElementById("board");
  board.height = height;
  board.width = width;
  context = board.getContext("2d");

  update();
};

function update() {
  updateBackround();
  updateCharacter();
}

function updateBackround() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
  context.fillStyle = "gray";
  context.fillRect(0, height - 50, board.width, 50);
}

function updateCharacter() {
  context.fillStyle = "yellow";
  context.fillRect(width / 2 - 15, height - 80, 30, 30);
  window.onkeydown = function (e) {
    if (e.code === "ArrowRight") {
    }
  };
}
