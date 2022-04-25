class Pokemon {
  // flip pokemon image makes the controls not work sometimes (issue with controls, problably moveright())
  constructor(game, x, y, data) {
    this.game = game;
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = "left";
    this.img = new Image();
    this.attackList = [];
    this.level = this.data.level;
    this.pokeId = this.data.id;
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
    this.y - 100 >= 0 ? (this.y -= 50) : (this.y = 0);
  }
  moveDown() {
    this.y + 100 <= this.game.cHeight
      ? (this.y += 50)
      : (this.y = this.game.cHeight - 50);
  }
  moveLeft() {
    this.direction = "left";
    this.x - 100 >= 0 ? (this.x -= 50) : (this.x = 0);
  }
  moveRight() {
    this.direction = "right";
    this.x + 100 <= this.game.cWidth ? (this.x += 50) : this.x;
  }
  reset() {
    this.x = cWidth / 2;
    this.y = cHeight / 2;
  }
  drawCharacter() {
    this.img.src = this.data.imgUrl[1];
    // this.game.ctx.scale(this.direction === "right" ? -1 : 1, 1);
    this.game.ctx.drawImage(
      this.img,
      this.x,
      // this.direction === "right" ? this.x * -1 : this.x,
      this.y,
      100,
      100
    );
  }
}
