class Pokemon {
  // flip pokemon image makes the controls not work sometimes
  constructor(game, x, y, level) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.direction = "";
    this.img = new Image();
    this.attackList = [];
    this.level = level;
    this.pokeId = this.game.pokeId;
  }
  attack() {
    if (this.attackList.length > 0) {
      for (let i = 0; i < this.attackList.length; i++) {
        this.attackList[i].drawAttack();
        if (
          this.attackList[i].x < 0 ||
          this.attackList[i].x > this.game.cWidth
        ) {
          this.attackList.pop();
          return false;
        } else {
          this.direction !== "right"
            ? (this.attackList[i].x -= 20)
            : (this.attackList[i].x += 20);
          this.game.kill();
        }
      }
    } else {
      this.attackList.push(
        new Attack(
          this,
          this.direction !== "right" ? this.x : this.x + 200,
          this.y
        )
      );
    }
  }
  moveUp() {
    this.y - 50 >= 0 ? (this.y -= 50) : false;
  }
  moveDown() {
    this.y + 100 <= this.game.cHeight ? (this.y += 50) : false;
  }
  moveLeft() {
    this.direction = "left";
    this.x - 50 >= 0 ? (this.x -= 50) : false;
  }
  moveRight() {
    this.direction = "right";
    this.x + 100 <= this.game.cWidth ? (this.x += 50) : false;
  }
  reset() {
    this.x = cWidth / 2;
    this.y = cHeight / 2;
  }
  drawCharacter(levelup) {
    this.img.src = `http://www.serebii.net/xy/pokemon/00${
      this.pokeId + levelup
    }.png`;
    //  console.log(this.direction);
    //  this.game.ctx.scale(this.direction === "right" ? -1 : 1, 1);
    this.game.ctx.drawImage(
      this.img,
      this.x,
      //  this.direction === "right" ? this.x * -1 : this.x,
      this.y,
      100,
      100
    );
  }
}
